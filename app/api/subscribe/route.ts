import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { validateEmail } from "@/lib/zeroBounceApi";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const apiKey = data.apiKey;

    const decoded: any = jwt.verify(apiKey, process.env.JWT_SECRET_KEY!);

    const isSubscriberExist = await db.subscriber.findFirst({
      where:{
        email: data.email,
        newsLetterOwnerId: decoded?.user?.id,
      }
    });

    if (isSubscriberExist) {
      return NextResponse.json({ error: "Email already exists!" });
    }

    // Validate email
    const validationResponse = await validateEmail({ email: data.email });
    if (validationResponse.status === "invalid") {
      return NextResponse.json({ error: "Email not valid!" });
    }

    // Create new subscriber
    const subscriber = await db.subscriber.create({
      data:{
        email: data.email,
        newsLetterOwnerId: decoded?.user?.id,
        source: "By API",
        status: "Subscribed",
      }
    });

    return NextResponse.json(subscriber);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
