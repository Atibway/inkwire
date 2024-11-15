"use server";

import { db } from "@/lib/db";

export const GetEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    
    const email = await db.emailSchema.findFirst({
      where:{
        title,
        newsLetterOwnerId
      }
    })
    return email;
  } catch (error) {
    console.log(error);
  }
};
