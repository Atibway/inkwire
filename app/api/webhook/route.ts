import Stripe from "stripe";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-10-28.acacia",
});
const endpointSecret = "whsec_7625ff1b50be87267b8153369bebd0ab70bbdffba465cb2b5bb20ae9d0b47ca6";

const webhookHandler = async (req: Request) => {
  const signature = req.headers.get("Stripe-Signature") as string;

  if (!signature) {
    console.error("Missing Stripe-Signature header.");
    return NextResponse.json({ error: "Missing Stripe-Signature header" }, { status: 400 });
  }

  try {
    const body = await req.text();
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
    } catch (error: any) {
      console.error("Error verifying Stripe signature:", error.message);
      return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
    }

    if (event.type.startsWith("customer.subscription.")) {
      const subscription = event.data.object as Stripe.Subscription;

      if (!subscription.items?.data?.length) {
        console.error("Subscription items are empty.");
        return NextResponse.json({ error: "Subscription items are empty" }, { status: 400 });
      }

      const itemId = subscription.items.data[0].price.product;

      let product;
      try {
        product = await stripe.products.retrieve(itemId as string);
      } catch (error) {
        console.error("Error retrieving Stripe product:", error);
        return NextResponse.json({ error: "Error retrieving product" }, { status: 500 });
      }

      const planName = product.name;

      if (event.type === "customer.subscription.created") {
        const member = await db.membership.findFirst({
          where: {
            stripeCustomerId: subscription.customer as string,
          },
        });

        if (member) {
          await db.membership.update({
            where: { id: member.id },
            data: { plan: planName },
          });
        }
      }
    } else {
      console.warn(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook handler failed:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
};

export { webhookHandler as POST };
