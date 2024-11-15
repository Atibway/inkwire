// app/api/subscribers/route.ts
import { NextResponse } from 'next/server';
import { subscribers } from "@/data/subscribers";
import { currentUser } from '@/lib/auth';

export async function GET(request: Request) {
const user = await currentUser()
  try {
    const data = await subscribers({ newsLetterOwnerId: user?.id });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json({ error: "Error fetching subscribers" }, { status: 500 });
  }
}
