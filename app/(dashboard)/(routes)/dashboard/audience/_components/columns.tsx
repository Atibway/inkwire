"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { format } from "timeago.js";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";

export const columns = [
    {
        id: "select",
        header: ({ table }:any) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }:any) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: ({ column }:any) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "createdAt",
    header: "Subscribed",
    cell: ({row}: any)=> {
const data = format(row.getValue("createdAt"))

return <div className="text-right font-medium">{data}</div>
    }
  },
  {
    accessorKey: "source",
    header: "Source",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
