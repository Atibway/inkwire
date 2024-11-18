"use server";

import { db } from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-10-28.acacia",
});

export const stripeSubscribe = async ({
  price,
  userId,
}: {
  price: string;
  userId: string ;
}) => {
  try {
  
    const user = await db.membership.findFirst({
      where:{
        userId
      }
    })
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: user?.stripeCustomerId,
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      success_url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/success",
      cancel_url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/error",
      subscription_data: {
        metadata: {
          payingUserId: userId,
        },
      },
    });
    if (!checkoutSession.url) {
      return {
        message: "Could not create checkout session!",
      };
    }
    return checkoutSession.url;
  } catch (error) {
    console.log(error);
  }
};
