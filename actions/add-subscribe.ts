"use server";

import { db } from "@/lib/db";
import { validateEmail } from "@/lib/zeroBounceApi";


export const subscribe = async ({
  email,
  userId,
}: {
  email: string;
  userId: string;
}) => {
  try {
    

    // now we need to find our newsletter owner
    const newsletterOwner = await db.user.findUnique({
      where:{
        id: userId
      }
    })
    if (!newsletterOwner) {
      return {error: "Username is not valid!"};
    }

    // check if subscribers already exists
    const isSubscriberExist = await db.subscriber.findFirst({
      where:{
        email,
        newsLetterOwnerId: newsletterOwner?.id,
      }
    });

    if (isSubscriberExist) {
      return { error: "Email already exists!" };
    }

    // Validate email
    const validationResponse = await validateEmail({ email });
    if (validationResponse.status === "invalid") {
      return { error: "Email not valid!" };
    }

    // Create new subscriber
    const subscriber = await db.subscriber.create({
      data:{
      email,
      newsLetterOwnerId: newsletterOwner?.id,
      source: "By Inkwire website",
      status: "Subscribed",
      }
    });
    return {success: "You have successfully subscribed"}
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while subscribing." };
  }
};
