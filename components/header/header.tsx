import Link from "next/link";
import Logo from "./logo";
import { NavItems } from "./nav-items";
import { Toolbar } from "./toolbar";


export const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 z-[999] px-10 flex items-center justify-between h-[80px] bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center">
        <NavItems />
      </nav>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <Toolbar />
      </div>
    </header>
  );
};
