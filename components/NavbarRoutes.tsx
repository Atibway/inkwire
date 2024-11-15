"use client"
import { UserButton } from "./auth/user-button"
import { ModeToggle } from "./modeToggler"




export const NavbarRoutes = () => {
  return (
    <div className="flex gap-x-2 ml-auto">
        <ModeToggle/>
        <UserButton/>
    </div>
  )
}
