
import { navItems } from "@/data/constants";
import Link from "next/link";

 export const NavItems = () => {
  return (
    <div className="w-full hidden md:flex items-center">
      {navItems.map((i: NavItems, index: number) => (
        <Link key={index} href={"/"} className="px-5 text-lg">
          {i.title}
        </Link>
      ))}
    </div>
  );
};

