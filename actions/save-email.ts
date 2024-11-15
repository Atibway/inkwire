"use server";

import { db } from "@/lib/db";

export const saveEmail = async ({
  title,
  content,
  newsLetterOwnerId,
}: {
  title: string;
  content: string;
  newsLetterOwnerId: string;
 
}) => {
  try {
    
    const email = await db.emailSchema.findFirst({
        where:{
            title,
            newsLetterOwnerId
        }
    })

    if (email) {
    await db.emailSchema.update({
        where:{
            id:email.id,
            title,
            newsLetterOwnerId
        },
        data:{
           content: content 
        }
    })
      return { success: "Email updated successfully!" };
    } else {
      await db.emailSchema.create({
        data:{
            title,
            content,
            newsLetterOwnerId
        }
      })
      return { success: "Email saved successfully!" };
    }
  } catch (error) {
    return { error: "Something went wrong!" };

  }
};
