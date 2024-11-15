"use client"
import { partners } from "@/data/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkles";

const Branding = () => {
  return (
    <>
     <div className="h-[25rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
     <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative text-white">
        CREATED BY THE EARLY MORNING BREW TEAM
      </h3>
      <div className="w-[40rem] h-40 relative">
      <Marquee className="w-full flex justify-around bg-white">
        {partners.map((i: PartnersTypes, index: number) => (
          <>
            <Image
              src={i.url}
              key={i.url}
              width={200}
              height={200}
              alt="partner"
              className={`md:mx-8 w-[150px] md:w-[180px] mx-3`}
            />
          </>
        ))}
      </Marquee>
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="w-full text-center pt-1">
        <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative text-white">
          NOW POWERING THE WORLD&apos;S TOP NEWSLETTERS
        </h3>
      </div>
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
       
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
  
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    
    
    </>
    
  );
};

export default Branding;
