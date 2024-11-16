"use client";


import { useCurrentUser } from "@/hooks/use-current-user";
import Image from "next/image";
import Link from "next/link";
import PulsatingButton from "../ui/pulsating-button";
import { Button } from "../ui/button";
import MobileSideBar from "@/app/(root)/_components/mobile-sidebar";

export const Toolbar = () => {
  const user  = useCurrentUser()

  return (
    <>
      <PulsatingButton  className="text-lg hidden sm:block bg-blue-400">
        Start Trial
      </PulsatingButton>
      {user ? (
        <>
          <Link href={"/dashboard"}>
            <Image
              src={user?.image || ""}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </>
      ) : (
        <Link href={"/auth/login"}>
          <Button
          variant={"link"}
          >
            Login
          </Button>
        </Link>
      )}
      <MobileSideBar/>
    </>
  );
};

