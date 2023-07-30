"use client";

import Image from "next/image";
import logoHimasti from "../(images)/logo-himasti/logo himasti.png";
import Link from "next/link";
import loginService from "./loginService";
import { useState } from "react";

export default function Login() {
  const [msg, setMsg] = useState("");

  return (
    <div className="container mx-auto sm:h-screen sm:flex sm:justify-center sm:items-center">
      <div className="sm:shadow-utama sm:rounded-2xl lg:flex">
        <Image
          src={logoHimasti}
          priority={true}
          width={500}
          height={500}
          alt="Logo Himasti"
          className="rounded-l-2xl border-2 border-slate-300 hidden xl:inline"
        ></Image>

        <div className="flex flex-col justify-center items-center py-10 sm:w-[500px] sm:h-[500px]  w-full">
          <h1 className="font-semibold text-2xl mb-10">Login Page</h1>
          <form className="px-10">
            <label className=" bg-blue-500 ">
              <span className="block mb-2 text-formulir font-semibold">
                Username
              </span>
              <input
                required
                id="username"
                autoCapitalize="off"
                autoComplete="off"
                type="text"
                className="rounded-lg mb-5"
                onFocus={() => setMsg("")}
              ></input>
            </label>
            <label>
              <span className="block mb-2 text-formulir font-semibold">
                Password
              </span>
              <input
                type="password"
                id="password"
                required
                onFocus={() => setMsg("")}
                className="rounded-lg mb-10"
              ></input>
            </label>
            <div className="flex items-center flex-col">
              <button
                type="submit"
                className="block bg-blue-600 px-6 py-2 text-white rounded-lg mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  const reqUsername = document.querySelector("#username").value;
                  const reqPassword = document.querySelector("#password").value;
                  if (reqUsername === "" || reqPassword === "") {
                    setMsg("Lengkapi form dulu!");
                  } else {
                    loginService(reqUsername, reqPassword);
                  }
                }}
              >
                Login
              </button>
              <span className="mb-5 text-sm mt-1 block text-red-500">
                {msg}
              </span>
            </div>
          </form>
          <div>
            Belum punya akun? Register{" "}
            <Link
              href={"/register"}
              className=" text-blue-500 hover:text-blue-700"
            >
              disini
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
