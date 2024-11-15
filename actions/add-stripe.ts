"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { PrismaClient } from "@prisma/client";

import Stripe from "stripe";

const prisma = new PrismaClient();

export const addStripe = async () => {
  try {
   const user = await currentUser()
    if (user?.email) {
      throw new Error("No user session found.");
    }

 

    // Check if membership already exists for this user
    const membership = await db.membership.findFirst({
      where: {
         userId: user?.id
         },
    });

    if (membership) {
      return;
    } else {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2024-10-28.acacia",
      });

      // Create a new Stripe customer
   await stripe.customers.create({
        email: user?.email as string,
      }).then(async(customer)=> {
// Add the new membership to the database
await db.membership.create({
  data:{
   userId: user?.id as string,
   stripeCustomerId: customer.id,
   plan: "GROW"
  }
 });
      })  
    }
  } catch (error) {
    console.log("Error in addStripe:", error);
  } finally {
    await prisma.$disconnect();
  }
};
