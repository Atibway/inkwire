
import { NextUIProvider } from "@nextui-org/react";

import { Toaster } from "react-hot-toast";
import DashboardSidebar from "@/app/(dashboard)/(routes)/dashboard/_components/dashboard-sidebar";
import { NextRequest } from "next/server";
import { currentUser } from "@/lib/auth";


interface ProviderProps {
  request?: NextRequest;
  children: React.ReactNode;
}

export default async function Providers({
  request,
   children 
  }: ProviderProps) {
  const pathname = request?.nextUrl.pathname;

  const user = await currentUser()

  const isStripeCustomerIdHas = async () => {
  };

  return (
    <>
    
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/success" &&
      pathname !== "/sign-in" ? (
        <div className="w-full flex">
          {user && (
          <div className="w-[290px] h-screen overflow-y-scroll hidden lg:block">
            
            <DashboardSidebar />
            
          </div>
          )}
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
    
    </>
  );
}
