"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { FiFacebook } from "react-icons/fi";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
        className="flex min-w-[400px] flex-col justify-center items-center p-4 py-6 my-10 rounded-xl border-2 border-gray-950 border-solid"
      >
        {/* form title */}
        <h1 className="text-xl opacity-70 select-none">Renter Create acount</h1>
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
        {/* Username field */}
        <label className="w-full  p-1 text-xl select-none" htmlFor="username">
          Usernmae
        </label>
        <input
          className="w-full border-solid border-2 border-sky-500 rounded-md p-1 indent-1 text-lg"
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          required
          value={formData.username}
          onChange={HandleChange}
        />
        {/* password field  */}

        <label className="w-full p-1 text-xl select-none" htmlFor="email">
          Password
        </label>

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
        {/* confirm password field  */}

        <label className="w-full p-1 text-xl select-none" htmlFor="email">
          confirmPassword
        </label>

        <input
          className="w-full border-solid border-2 border-sky-500 rounded-md p-1 indent-1 text-lg"
          type="password"
          id="confirmPassword"
          placeholder="confirmPassword"
          name="confirmPassword"
          required
          value={formData.confirmPassword}
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
          Already have account
          <Link
            className="text-red-600 hover:underline indent-2 pl-1 translate-y-2"
            href="/signin"
          >
            Signin
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
