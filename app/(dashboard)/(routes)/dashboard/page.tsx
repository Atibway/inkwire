import { currentUser } from "@/lib/auth";
import {Main} from "./_components/main";
import { redirect } from "next/navigation";
import { subscribersAnalytics } from "@/actions/subscribers-analytics";
import { subscribers } from "@/data/subscribers";


const Page = async() => {
  const user = await currentUser()
  if(!user){
    redirect("/")
  }
  const data = await subscribers({newsLetterOwnerId: user?.id})
  const analytics = await subscribersAnalytics()
  return (
      <Main
      subscribers= {data}
      subscribersData={analytics}
      />
  );
};

export default Page;
