
import { ICONS } from "@/lib/icons";
import { UserPlan } from "./userPlan";
import { DashboardItems } from "./dashboard-items";
import { currentUser } from "@/lib/auth";
import { subscribers } from "@/data/subscribers";


const DashboardSideBar = async() => {
  const user = await currentUser()
  const subscribersData = await subscribers({newsLetterOwnerId: user?.id})
  return (
    <div className="p-2">
      <div className="p-2 flex items-center bg-[#f5f5f5f5] rounded">
        <span className="text-2xl">{ICONS.home}</span>
        <h5 className="pl-2 pt-1 capitalize">{user?.name} Newsletter</h5>
      </div>
      <div>
        <DashboardItems />
        <UserPlan
        subscribers={subscribersData} 
        />
        <DashboardItems bottomContent={true} />
      </div>
    </div>
  );
};

export default DashboardSideBar;
