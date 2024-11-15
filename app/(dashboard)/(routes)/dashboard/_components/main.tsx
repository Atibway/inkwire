
import { Button } from "@nextui-org/react";

import Link from "next/link";

import { DashboardOverViewCard } from "./overviewcard";
import { SubscribersChart } from "@/app/(dashboard)/(routes)/dashboard/_components/subscribers-chart";
import { ICONS } from "@/lib/icons";
import { CourseMobileSidebar } from "@/app/(dashboard)/_components/DashbordMobileSideba";
import { subscriber } from "@prisma/client";
import { currentUser } from "@/lib/auth";
import { HomePageUrl } from "./home-page";

export const Main = async({
  subscribersData,
  subscribers
}:{
  subscribers: subscriber[]
  subscribersData: any
}) => {
  const  user  = await currentUser()
  return (
    <div className="p-5 w-full h-screen bg-[#f9fafb]">
      <div className="flex justify-between ">
      <div className="">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi {user?.name} 👋
      </h1>
      <p className="opacity-[.7] text-sm pt-2">
        Here&apos;s how your publication is doing
      </p>
      </div>
<div>
<CourseMobileSidebar/>
</div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className=" min-h-[88vh] pr-5">
          <br />
          <DashboardOverViewCard
          subscribers={subscribers}
          />
          <br />
          <SubscribersChart
          subscribersData={subscribersData}
          />
        </div>
        <div className=" p-5">
          {/* create newsletter button */}
          <div className="w-full flex justify-end">
            <Button className="bg-black text-white text-lg rounded !px-6">
              <span className="mr-1 ml-[-5px]">{ICONS.write}</span>
              Start Writing
            </Button>
          </div>
          <br />
          {/* resources */}
          <div>
            <h5 className="text-xl font-medium">Resources</h5>
            <div className="w-full bg-white border rounded p-5 my-3">
              {/* home page url */}
              <HomePageUrl/>
            </div>
          </div>

          {/* tutorials */}
          <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Tutorials</h5>
            <p className="text-sm opacity-[.7]">
              Learn how to get started on becodemy and utilize all our features,
              directly from the becodemy team.
            </p>
            <br />
            <Button className="bg-[#FBCFE8] text-[#831743] rounded-lg h-[35px] flex items-center">
              Tutorials <span>{ICONS.link}</span>
            </Button>
          </div>

          {/* Need help? */}
          <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Need help?</h5>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Knowledge base</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">API Documentation</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">Blog</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center">
                <span className="text-sm">FAQ</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


