"use server";

import Stripe from "stripe";

export const manageSubscription = async ({
  customerId,
}: {
  customerId: string ;
}) => {
  try {
    
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-10-28.acacia",
    });

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.NEXT_PUBLIC_WEBSITE_URL + "/dashboard",
    });

    return portalSession.url;
  } catch (error) {
    console.log(error);
  }
};
