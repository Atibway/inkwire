import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import DashboardSideBar from "../(routes)/dashboard/_components/dashboard-sidebar";


export const CourseMobileSidebar = ({

}) => {
  return (
    <Sheet>
        <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
            <Menu/>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0 bg-white dark:bg-primary-foreground ">
        <div className="w-[300px] h-screen overflow-y-scroll">
            
            <DashboardSideBar />
            
          </div>
        </SheetContent>
    </Sheet>
  )
}
