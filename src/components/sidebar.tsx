// react imports
import React, { useState, useEffect } from "react";

// my imports

// outside imports
import { X } from "lucide-react";
function Sidebar({
  openSidebar,
  openstatus,
}: {
  openSidebar: boolean;
  openstatus: any;
}) {
  return (
    <div
      className={`left-0 z-[1000] h-[100vh] bg-zinc-500 top-0
      overflow-y-scroll   transition-all duration-500 ${
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
            Tutorial
          </span>
          <ul className="indent-3 ">
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - Html
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - Css
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - JavaScript
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - Css
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - JavaScript
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - Css
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - JavaScript
            </li>
          </ul>
        </li>
        <li>
          <span className="text-2xl block border-b-2 border-solid border-gray-600 shadow-md mb-3 mt-3 shadow-gray-700   p-1 text-center">
            Setting
          </span>
          <ul className="indent-3 ">
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - Html
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - Css
            </li>
            <li className="p-2 hover:bg-zinc-400 cursor-pointer mt-1 rounded-sm transition-all ease-in-out duration-300 ">
              - JavaScript
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
