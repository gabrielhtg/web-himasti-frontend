"use client";

import Link from "next/link";
import loginService from "./loginService";
import { useState } from "react";
import "../(style)/loginStyle.css";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="py-10 px-5 text-center sm:flex sm:flex-col sm:h-screen sm:justify-center sm:items-center sm:absolute sm:w-full sm:top-0">
      <div className="sm:border sm:bg-white sm:px-10 sm:py-10 sm:rounded-xl w-full max-w-lg sm:border-neutral sm:shadow-utama">
        <h1 className="text-2xl font-bold text-neutral">Login Page</h1>

        <form className="mt-10">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-sm">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                id="input-username"
                autoComplete="off"
                type="text"
                autoCapitalize="off"
                placeholder="Type here"
                className="input input-bordered w-full max-w-sm"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-full max-w-sm">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="input-password"
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-sm"
              />
            </div>
          </div>
        </form>

        <button
          className="btn btn-neutral btn-md mt-10 w-full max-w-[250px]"
          onClick={async () => {
            const alert = document.querySelector("#alert-error");
            const inputUsernameValue =
              document.querySelector("#input-username").value;
            const inputPasswordValue =
              document.querySelector("#input-password").value;

            if (inputUsernameValue !== "" && inputPasswordValue !== "") {
              let berhasilLogin = await loginService(
                inputUsernameValue,
                inputPasswordValue
              );

              console.log(alert.firstChild);

              if (berhasilLogin) {
                alert.firstChild.classList.remove("alert-error");
                alert.firstChild.classList.add("alert-success");
                alert.classList.remove("hidden");
                setTimeout(() => {
                  alert.classList.add("hidden");
                  alert.firstChild.classList.add("alert-error");
                  alert.firstChild.classList.remove("alert-success");
                }, 2000);
                setErrorMsg("Berhasil Login");
              } else {
                setErrorMsg(
                  "Gagal Login. Pastikan username/password kamu benar!"
                );
                alert.classList.remove("hidden");
                setTimeout(() => {
                  alert.classList.add("hidden");
                }, 2000);
              }
            } else {
              alert.classList.remove("hidden");
              setErrorMsg("Lengkapi form terlebih dahulu!");

              setTimeout(() => {
                alert.classList.add("hidden");
              }, 2000);
            }
          }}
        >
          Login
        </button>

        <div className=" fixed w-full flex justify-center left-0 px-5 -top-[150px]">
          <div className="  max-w-2xl w-full  hidden" id="alert-error">
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errorMsg}</span>
            </div>
          </div>
        </div>

        <p className="mt-5">
          Belum punya akun? Yuks daftar{" "}
          <Link className="text-info" href={"/register"}>
            disini
          </Link>
        </p>
      </div>
    </div>
  );
}
