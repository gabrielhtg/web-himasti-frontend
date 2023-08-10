"use client";

import "../style/NavbarStyle.css";
import profil from "./(images)/foto/profil.png";
import Image from "next/image";
import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import Link from "next/link";
import isLoginService from "../service/isLoginService";
import "../style/alertStyle.css";

import LogoutService from "@/service/LogoutService";
import alertService from "@/service/AlertService";
import { useRouter } from "next/navigation";
import getUser from "@/service/getUser";
import DataAPI from "@/service/DataAPI";

export default function Navbar() {
  const [fotoProfil, setFotoProfil] = useState(profil);

  const router = useRouter();
  useEffect(() => {
    let tombolTema = document.getElementsByClassName("tombol-tema");
    let elementRegisterToken = document.querySelector("#register-token");

    if (document.querySelector("html").getAttribute("data-theme") == "dark") {
      tombolTema[0].innerHTML = "Light Mode";
    }

    if (sessionStorage.getItem("isAdmin")) {
      elementRegisterToken.classList.remove("hidden");
    }

    isLoginService(router);
    getUser();

    let username = localStorage.getItem("username");
    let token = localStorage.getItem("token");

    setFotoProfil(
      new DataAPI().url + "/api/himasti/user/foto/" + username + "/" + token
    );
    themeChange(false);
  }, [router]);

  return (
    <div className="navbar fixed top-0 bg-base-100 shadow-md z-10">
      {/* alert error start */}
      <div className=" fixed z-10 w-full flex justify-center left-0 px-5 -top-[150px]">
        <div id="alert-error" className="max-w-2xl w-full hidden">
          <div className="alert alert-error flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                id="path-alert"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span id="alert-error-msg"></span>
          </div>
        </div>
      </div>

      {/* alert error end */}

      {/* alert success start */}

      <div className=" fixed z-10 w-full flex justify-center left-0 px-5 -top-[150px]">
        <div id="alert-success" className="max-w-2xl w-full hidden">
          <div className="alert flex justify-center alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                id="path-alert"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span id="alert-success-msg"></span>
          </div>
        </div>
      </div>

      {/* alert success end */}

      <div>
        <label
          tabIndex="0"
          className="btn btn-ghost btn-circle swap swap-rotate lg:hidden"
        >
          <input
            type="checkbox"
            onChange={() => {
              let menu = document.querySelector("#menu");
              menu.classList.toggle("hidden");
              menu.classList.toggle("flex");
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="swap-off h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>

          <svg
            className="swap-on fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            // width="32"
            // height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl lg:text-2xl"
        >
          HIMASTI
        </Link>
      </div>

      <ul
        id="menu"
        className="hidden items-start lg:flex menu menu-vertical absolute top-[72px] shadow-utama lg:top-0 lg:shadow-none lg:static lg:menu-horizontal bg-base-200 rounded-box"
      >
        <li>
          <Link href="/" replace={true} prefetch={true}>
            Home
          </Link>
        </li>
        <li>
          <Link className="w-full" href={"/#about"}>
            About
          </Link>
        </li>
        <li>
          <div
            className="tombol-tema"
            data-toggle-theme="light,dark"
            data-act-class="ACTIVECLASS"
            onClick={(e) => {
              let htmlElement = document.querySelector("html");
              if (htmlElement.getAttribute("data-theme") == "dark") {
                e.target.innerHTML = "Light Mode";
              } else {
                e.target.innerHTML = "Dark Mode";
              }

              try {
                let gambarLengkung = document.querySelector("#gambar-lengkung");
                let gambarLengkungDark = document.querySelector(
                  "#gambar-lengkung-dark"
                );

                gambarLengkung.classList.toggle("hidden");
                gambarLengkungDark.classList.toggle("hidden");
              } catch {}
            }}
          >
            Dark Mode
          </div>
        </li>
        <li>
          <Link href={"/login"} id="tombol-login" className="font-semibold">
            Login
          </Link>
        </li>
      </ul>

      <div className="flex-none gap-2 hidden ml-5" id="bagian-profil">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div
              className="w-10 rounded-full border border-primary"
              id="tempat-foto-profil"
            >
              <Image
                src={fotoProfil}
                priority={true}
                alt="foto-profil"
                width={40}
                height={40}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/profile"} className="justify-between">
                Profile
              </Link>
            </li>
            <li id="register-token" className="hidden">
              <Link href={"/register-token"}>Register Token</Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
                onClick={async () => {
                  if (LogoutService()) {
                    alertService(null, "Berhasil Logout");
                    setTimeout(() => {
                      window.location.href = "/";
                    }, 1900);
                  } else {
                    alertService("error", "Gagal Logout");
                  }
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
