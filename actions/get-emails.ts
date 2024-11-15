"use server"
import { db } from "@/lib/db"

export const getEmails = async ({
   newsLetterOwnerId 
}:{
    newsLetterOwnerId: string;
})=>{
try {
    const emails = await db.emailSchema.findMany({
        where: {
            newsLetterOwnerId
        }
    })

    return emails;
} catch (error) {
    console.log(error);
   return {error: "Something went wrong"} 
}
}