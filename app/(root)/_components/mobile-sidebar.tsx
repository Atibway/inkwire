"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function MobileSideBar() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button  size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle mobile sidebar</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Mobile Sidebar</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          <nav className="space-y-2">
            <a href="#" className="block px-2 py-1 text-lg hover:bg-gray-100 rounded">Home</a>
            <a href="#" className="block px-2 py-1 text-lg hover:bg-gray-100 rounded">About</a>
            <a href="#" className="block px-2 py-1 text-lg hover:bg-gray-100 rounded">Services</a>
            <a href="#" className="block px-2 py-1 text-lg hover:bg-gray-100 rounded">Contact</a>
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}