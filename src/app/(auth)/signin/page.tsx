"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FiFacebook } from "react-icons/fi";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const HandleChange = async (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full min-h-full  flex justify-center items-center">
      {/* login form  */}
      <form
        onSubmit={HandleSubmit}
        method="post"
        className="flex min-w-[400px] flex-col justify-center items-center p-4 py-6 rounded-xl border-2 border-gray-950 border-solid my-9"
      >
        {/* form title */}
        <h1 className="text-xl opacity-70 select-none">Renter Login</h1>
        {/* email field */}
        <label className="w-full  p-1 text-xl select-none" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border-solid border-2 border-sky-500 rounded-md p-1 indent-1 text-lg"
          type="text"
          id="email"
          placeholder="Email"
          name="email"
          required
          value={formData.email}
          onChange={HandleChange}
        />
        {/* password field  */}
        <div className="flex justify-between items-center w-full">
          <label className="w-full p-1 text-xl select-none" htmlFor="email">
            Password
          </label>
          <div className="text-sm text-blue-500 text-end w-full p-1 hover:underline transition-all duration-300 cursor-pointer select-none">
            forget password
          </div>
        </div>
        <input
          className="w-full border-solid border-2 border-sky-500 rounded-md p-1 indent-1 text-lg"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          required
          value={formData.password}
          onChange={HandleChange}
        />

        {/* submit button */}
        <button
          className="w-full bg-sky-400 rounded-md cursor-pointer  p-2 text-white text-xl mt-2 hover:bg-sky-600 "
          type="submit"
        >
          Signin
        </button>

        {/* social auth  */}
        <div className="flex justify-center items-center gap-2 p-0.5 cursor-pointer rounded-md hover:bg-zinc-100 border-solid border-2 border-zinc-500 w-full mt-3">
          <FcGoogle size={30} />
          <h1>Login with Google</h1>
        </div>
        <div className="flex justify-center items-center gap-2 p-0.5 cursor-pointer rounded-md hover:bg-zinc-100 border-solid border-2 border-zinc-500 w-full mt-3">
          <FiFacebook size={30} />
          <h1>Login with Facebook</h1>
        </div>
        <div className="w-full p-1 text-center opacity-80 mt-3">
          Create new Account
          <Link
            className="text-red-600 hover:underline indent-2 pl-1 translate-y-2 "
            href="/signup"
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
