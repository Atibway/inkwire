
"use client"

import { Progress } from "@/components/ui/progress"
import { ICONS } from "@/lib/icons";
import { membership, subscriber } from "@prisma/client";
import { manageSubscription } from "@/actions/manage-subscription";
import { useRouter } from "next/navigation";
 export const UserPlan = ({
subscribers,
membership
 }:{
  subscribers: subscriber[]
  membership: membership | null | undefined
 }) => {
   const router = useRouter()

  const handleManage = async () => {
   await manageSubscription({customerId: membership?.stripeCustomerId as string}).then((res:any)=> {
    router.push(res)
   })
  };

  return (
    <div
     className="w-full my-3 p-3 bg-[#FDF1F8] rounded hover:shadow-xl cursor-pointer">
      <div className="w-full flex items-center">
        <h5 className="text-lg font-medium">
          {membership?.plan} Plan
        </h5>
        <div
          className="w-[95px] shadow ml-2 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-[#E77CAE]"
          onClick={handleManage}
        >
          <span className="text-white text-xl">{ICONS.electric}</span>
          <span className="text-white text-sm">Upgrade</span>
        </div>
      </div>
      <h5 className="text-[#831743]">Total subscribers</h5>
      <Progress value={subscribers?.length} className="" />

      <h6 className="text-[#831743]">
        { subscribers.length} of{" "}
        {membership?.plan == "LAUNCH"
          ? "2500"
          : membership?.plan === "Grow"||"GROW"
          ? "10,000"
          : "100,000"}{" "}
        added
      </h6>
      
    </div>
  );
};


