"use client";

import { Button } from "@nextui-org/react";
import PricingCard from "./pricingcard";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState("Monthly");

  return (
    <div
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #1e1f26 0%, #292d36 100%)",
        color: "white",
        minHeight: "100vh", // Ensures it covers the viewport height
        padding: "2rem 0",
      }}
    >
      <div className="w-[95%] m-auto py-5">
        <div className="w-full md:flex justify-between">
          <div>
            <h3 className="font-clashDisplay text-center lg:text-left uppercase text-cyber-ink text-[2.75rem] md:text-7xl lg:text-[4rem] xl:text-[5.75rem] max-w-4xl">
              Pricing
            </h3>
            <p className="text-3xl text-gray-300">Simple. Predictable. Built for you.</p>
          </div>
          <div className="flex items-center justify-center p-4">
      <div className="inline-flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <Button
          variant="ghost"
          size="lg"
          className={`rounded-r-none px-8 text-lg transition-colors ${
            active === 'Monthly'
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'hover:bg-muted'
          }`}
          onClick={() => setActive('Monthly')}
        >
          Monthly
        </Button>
        <div className="w-px bg-gray-200 dark:bg-gray-800" />
        <Button
          variant="ghost"
          size="lg"
          className={`rounded-l-none px-8 text-lg transition-colors ${
            active === 'Yearly'
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'hover:bg-muted'
          }`}
          onClick={() => setActive('Yearly')}
        >
          Yearly
        </Button>
      </div>
    </div>
        </div>
        <PricingCard active={active} />
      </div>
    </div>
  );
};

export default Pricing;
