// react imports
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// my imports
import Sidebar from "./sidebar";
// outside imports
import { AlignJustify } from "lucide-react";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const SidebarOpenStatus = (status: boolean) => {
    setOpenSidebar(status);
    return true;
  };
  useEffect(() => {
    document.body.style.paddingTop =
      document.getElementById("navbar")?.clientHeight + "px";
  }, []);
  return (
    <nav
      id="navbar"
      className="flex justify-between items-center min-h-[60px] bg-zinc-600 shadow-md p-0.5 md:p-1 shadow-slate-700 text-white text-sm  select-none fixed top-0 left-0 w-full  z-50"
    >
      {/* navbar left side */}
      <div className="flex justify-center items-center gap-1">
        <Image 
            src={require('../../public/logo.png')}
            alt="good"
            className="w-[50px] h-[50px] cursor-pointer "
        />
        <AlignJustify
          size={30}
          className="cursor-pointer sm:block md:hidden p-0.5 md:p-1 text-md md:text-lg hover:translate-x-0.5 "
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        />
        <Sidebar openSidebar={openSidebar} openstatus={SidebarOpenStatus} />
        <h1 className="cursor-pointer text-ellipsis hidden md:block  pl-1">Renter</h1>
      </div>
      {/* navbar center links   */}
      <ul className="hidden justify-center items-center gap-1 p-1  sm:hidden md:flex">
        <li className="p-0.5 md:p-1 lg:p-1 transition-all duration-400 transition-200 rounded-md cursor-pointer hover:bg-zinc-500 hover:shadow-green-500 shadow-sm">
          <Link href="/">Home</Link>
        </li>
        <li className="p-0.5 md:p-1 lg:p-1 transition-all duration-400 transition-200 rounded-md cursor-pointer hover:bg-zinc-500 hover:shadow-green-500 shadow-sm">
          About
        </li>
        <li className="p-0.5 md:p-1 lg:p-1 transition-all duration-400 transition-200 rounded-md cursor-pointer hover:bg-zinc-500 hover:shadow-green-500 shadow-sm">
          Service
        </li>
        <li className="p-0.5 md:p-1 lg:p-1 transition-all duration-400 transition-200 rounded-md cursor-pointer hover:bg-zinc-500 hover:shadow-green-500 shadow-sm">
          Contact
        </li>
      </ul>
      {/* navbar right side */}
      <ul className="flex justify-center items-center gap-1 p-1">
        <li className="p-0.5 md:p-1 rounded-md hover:bg-zinc-500 hover:shadow-green-500 shadow-sm cursor-pointer transition-all">
          <Link href="/signup">Signup</Link>
        </li>
        <li className="p-0.5 md:p-1 rounded-md hover:bg-zinc-500 hover:shadow-green-500 shadow-sm cursor-pointer transition-all">
          Cards
        </li>
        <li className="p-0.5 md:p-1 rounded-md hover:bg-zinc-500 hover:shadow-green-500 shadow-sm cursor-pointer transition-all">
          <Image
           src={require('../../public/facebook.png')}
           alt="image"
         
           className="rounded-full w-5 h-5 md:h-6 md:w-6"

          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
