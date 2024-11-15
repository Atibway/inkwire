import SparklesText from "@/components/ui/sparkles-text";
 
import Image from "next/image";
import React from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
const Banner = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mb-5">
      
      <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
        <Image
          src={
            "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1920,quality=75/www/homepage/MobileHero.png"
          }
          alt=""
          width={800}
          height={500}
          className="w-[80%] object-cover spin-slow"
        />
        <div className="absolute">
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2.75rem] md:text-[7xl] lg:text-[4rem]  max-w-4xl mx-auto text-center z-10  ">
            THE NEWSLETTER PLATFORM BUILT FOR
            <SparklesText text="GROW" />
          </h1>
          <br />
          <h3 className="text-3xl text-center">Built by newsletter people</h3>
          <br />
          <div className="flex w-full justify-center">
            <RainbowButton>
              Get Started
            </RainbowButton>
          </div>
          <br />
          <h5 className="text-center text-lg">start a 30day free trial</h5>
        </div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(70rem_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default Banner;
