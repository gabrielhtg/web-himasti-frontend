"use client";

import Link from "next/link";
import TombolSubmit from "../(component)/TombolSubmit";
import loginService from "./loginService";

export default function Login() {
  return (
    <div
      id="login"
      className={"w-full flex justify-center h-screen items-center bg-white"}
    >
      <div className="container border border-blue-500 max-w-lg bg-white w-11/12 py-10 px-10 rounded-3xl text-center ">
        <h1 className=" font-bold text-xl mb-5">Login</h1>
        <form onSubmit={(Event) => Event.preventDefault()}>
          <div className="mb-5 ">
            <label className="block text-left mb-1">Username</label>
            <input
              required
              id="username"
              type="text"
              onFocus={(Event) => Event.target.select()}
              className=" w-full rounded-md"
            ></input>
          </div>
          <div className="mb-5">
            <label className="text-left block mb-1">Password</label>
            <input
              required
              id="password"
              type="password"
              onFocus={(Event) => Event.target.select()}
              className="w-full rounded-md"
            ></input>
          </div>
          <div>
            <TombolSubmit text={"Login"} fungsi={loginService}></TombolSubmit>
          </div>
        </form>
        <p className="text-base mt-5">
          Belum punya akun? Daftarkan <Link href={"/register"}>disini</Link>
        </p>
      </div>
    </div>
  );
}
