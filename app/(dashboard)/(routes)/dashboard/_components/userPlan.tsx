
"use client"

import useGetMembership from "@/hooks/useGetMembership";

import { Progress } from "@/components/ui/progress"
import { ICONS } from "@/lib/icons";
import { Slider } from "@nextui-org/slider";
import { subscriber } from "@prisma/client";
import React from "react";
 export const UserPlan = ({
subscribers
 }:{
  subscribers: subscriber[]
 }) => {
  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const { data: membershipData, loading: membershipLoading } =
    useGetMembership();
  

  const handleManage = async () => {
   
  };

  return (
    <div className="w-full my-3 p-3 bg-[#FDF1F8] rounded hover:shadow-xl cursor-pointer">
      <div className="w-full flex items-center">
        <h5 className="text-lg font-medium">
          {membershipLoading ? "..." : "GROW"} Plan
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
        {membershipData?.plan === "LAUNCH"
          ? "2500"
          : membershipData?.plan === "SCALE"
          ? "10,000"
          : "1,00,000"}{" "}
        added
      </h6>
      
    </div>
  );
};


