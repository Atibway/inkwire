"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";


export const getMemberShip = async () => {
  try {
   
      const user = await currentUser()
      if (user) {
        // const membership = await Membership.findOne({
        //   userId: user?.id,
        // });
        const membership = await db.membership.findFirst({
          where: {
           userId: user.id
          }
        })
        
        return membership;
      }
    
  } catch (error) {
    console.log(error);
  }
};
