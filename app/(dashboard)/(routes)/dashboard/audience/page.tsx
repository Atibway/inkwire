
import { currentUser } from "@/lib/auth";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { subscribers } from "@/data/subscribers";



const AudiencePage = async() => {
  const user =  await currentUser()
 const data = await subscribers({newsLetterOwnerId: user?.id})

  return (
    <div className="w-full p-5 h-screen overflow-hidden">
       <h1 className="text-2xl font-medium">
        Subscribers
       </h1>
       <p className="pt-1 text-lg">View and manage your subscribers</p>
       <DataTable columns={columns} data={data!} />
    </div>
  )
}

export default AudiencePage;