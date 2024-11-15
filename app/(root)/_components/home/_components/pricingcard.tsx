"use client"
import { GrowPlan, freePlan, scalePlan } from "@/data/constants";

import { useTheme } from "next-themes";
import React from "react";
import { BackgroundGradient } from "../../../../../components/ui/background-gradient";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { CardSpotlight } from "../../../../../components/ui/card-spotlight";

const PricingCard = ({ active }: { active: string }) => {
  const { theme } = useTheme();
  const handleSubscription = async ({ price }: { price: string }) => {
    
  };

  return (
    <div className="w-full md:flex items-start justify-around py-8">
      {/* free plan */}
      <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm  bg-white dark:bg-zinc-900">
      <CardSpotlight className=" text-white rounded-[22px]">
      <div className="flex justify-between" >
<div className="flex space-x-2">

    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4 z-20"
        >
          <path
            fill="#fff"
            stroke="#3843D0"
            stroke-width="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink  border-b text-neutral-200 border-[#000] z-20">
          Launch
        </h5>
</div>
        
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-xl mt-0 text-neutral-200  z-20">
            $0
          </h5>
      </div>
      <p className="text-lg z-20">No commitment</p>
      <div className="text-neutral-200 mt-4 relative">
      {freePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-1 z-20">
            <Step title={i.title} />
          </div>
        ))}
      </div>
      <RainbowButton >
          Get Started
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $0
          </span>
        </RainbowButton>
        <p className="pt-1 opacity-[.7] text-center">
          30-day free trial of Scale features, then free forever
        </p>
    </CardSpotlight>
       
      </BackgroundGradient>
    </div>

   

      {/* grow plan */}
      <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm  bg-white dark:bg-zinc-900">
      <CardSpotlight className=" text-white rounded-[22px]">
      <div className="flex justify-between" >
<div className="flex space-x-2">

    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4 z-20"
        >
          <path
            fill="#fff"
            stroke="#3843D0"
            stroke-width="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink  border-b z-20 text-white border-[#000]">
        GROW
        </h5>
</div>
        
<div className="border-b pb-8 border-black z-20">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "49" : "42"} /month
          </h5>
          <p className="text-lg">Billed {active}</p>
        </div>
      </div>
      <div className="pt-2">
          <p className="text-lg text-neutral-200 z-20">Everything in Launch, plus...</p>
        </div>
        {GrowPlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex z-20 text-neutral-200 w-full items-center py-1">
            <Step title={i.title} />
          </div>
        ))}
      
      <RainbowButton >
          Get Started
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          ${active === "Monthly" ? "49" : "42"} /month
          </span>
        </RainbowButton>
        <p className="pt-1 z-20 opacity-[.7] text-center">
          30-day free trial of Scale features, then $
          {active === "Monthly" ? "42" : "49"}/mo
        </p>
    </CardSpotlight>
       
      </BackgroundGradient>
    </div>
      {/* scale plan */}
      <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm  bg-white dark:bg-zinc-900">
      <CardSpotlight className=" text-white rounded-[22px]">
      <div className="flex justify-between" >
<div className="flex space-x-2">

    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4 z-20"
        >
          <path
            fill="#fff"
            stroke="#3843D0"
            stroke-width="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink  border-b text-white z-20 border-[#000]">
        SCALE
        </h5>
</div>
        
<div className="border-b pb-8 border-black ">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl z-20">
          ${active === "Monthly" ? "99" : "84"} /month
          </h5>
          <p className="text-lg">Billed {active}</p>
        </div>
      </div>
      <div className="pt-2 ">
          <p className="text-lg text-neutral-200 z-20">Everything in Grow, plus...</p>
        </div>
        {scalePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex  text-neutral-200 w-full items-center py-1 z-20">
            <Step title={i.title} />
          </div>
        ))}
      
      <RainbowButton >
          Get Started
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          ${active === "Monthly" ? "99" : "84"} /month
          </span>
        </RainbowButton>
        <p className="pt-1 opacity-[.7] z-20 text-center">
          30-day free trial of Scale features, then $
          {active === "Monthly" ? "99" : "84"}/mo
        </p>
    </CardSpotlight>
       
      </BackgroundGradient>
    </div>
    </div>
  );
};
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
}
export default PricingCard;

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-1 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );

}
