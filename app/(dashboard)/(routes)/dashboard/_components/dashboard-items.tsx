"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";
import useRouteChange from "@/hooks/useRouteChange";
import { useCurrentUser } from "@/hooks/use-current-user";
import { sideBarBottomItems, sideBarItems } from "@/data/constants";
import { ICONS } from "@/lib/icons";
import { LogoutButton } from "@/components/auth/logout-button";
import Logo from "@/components/header/logo";

export const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const  user = useCurrentUser()
  const pathName = usePathname();


  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="p-2 py-5 flex items-center"
            >
              <span
                className={`text-3xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </>
      ) : (
        <>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-2 py-5 flex items-center"
                href={
                  item.url === "/"
                    ? `/subscribe?userId=${user?.id}`
                    : item.url
                }
              >
                <span
                  className={`text-3xl mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-xl mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
          {/* sign out */}
          <LogoutButton>
          <div className="p-2 py-5 flex items-center cursor-pointer border-b">
            <span className="text-3xl mr-2">{ICONS.logOut}</span>
            <span className="text-xl">Sign Out</span>
          </div>
          </LogoutButton>
          {/* footer */}
          <br />
          <br />
          <div className="w-full flex justify-center cursor-pointer">
            <Logo/>
          </div>
          <p className="text-sm text-center pt-5 pb-10">
            © 2024 Inkwire, Inc. All rights reserved.
          </p>
        </>
      )}
    </>
  );
};

