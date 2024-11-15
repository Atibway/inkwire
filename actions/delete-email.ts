"use server";
import { db } from "@/lib/db";

export const deleteEmail = async ({ emailId }: { emailId: string }) => {
  try {
    
    await db.emailSchema.delete({
      where:{
        id: emailId
      }
    })
    return { message: "Email deleted successfully!" };
  } catch (error) {
    return { error: "An error occurred while saving the email." };
  }
};
