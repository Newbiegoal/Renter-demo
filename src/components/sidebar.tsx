// react imports
import React, { useState, useEffect } from "react";

// my imports

// outside imports
import { X } from "lucide-react";
import Link from "next/link";
function Sidebar({
  openSidebar,
  openstatus,
}: {
  openSidebar: boolean;
  openstatus: any;
}) {
  return (
    <div
      className={`left-0 z-[1000] h-full  md:h-[100vh]  bg-zinc-500 top-0
      overflow-y-scroll  transition-all duration-500 w-full md:w-[400px] ${
        openSidebar ? "fixed" : "hidden"
      }
      
      ${openSidebar ? "w-[400px]" : "w-0"}`}
    >
      {/* sidebar header */}
      <div className="flex justify-between items-center gap-1 p-2 w-full border-solid border-b-2 border-white">
        <h1>Renter Options</h1>
        <div
          className="text-2xl p-1 rounded-md cursor-pointer"
          onClick={() => {
            openstatus(!openstatus);
          }}
        >
          <X size={30} />
        </div>
      </div>
      {/* sidebar list  */}
      <ul className="p-1 pb-5">
        <li>
          <span className="text-2xl block border-b-2 border-solid border-gray-600 shadow-md mb-3 mt-3 shadow-gray-700   p-1 text-center">
            Pages
          </span>
          <ul className="indent-3 ">
            <li
              onClick={() => {
                openstatus(!openstatus);
              }}
              className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 "
            >
              <Link
                onClick={() => {
                  openstatus(!openstatus);
                }}
                href="/"
              >
                - Home
              </Link>
            </li>
            <li
              onClick={() => {
                openstatus(!openstatus);
              }}
              className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 "
            >
              <Link href="">- Javascript</Link>
            </li>
            <li
              onClick={() => {
                openstatus(!openstatus);
              }}
              className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 "
            >
              <Link href="">- Flask</Link>
            </li>
            <li
              onClick={() => {
                openstatus(!openstatus);
              }}
              className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 "
            >
              <Link href="">- Gemma</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
