import "../style/NavbarStyle.css";
import profil from "./(images)/foto/profil.png";
import Image from "next/image";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import Link from "next/link";
import firstLoadService from "../service/isLoginService";
import "../style/alertStyle.css";

import LogoutService from "@/service/LogoutService";
import alertService from "@/service/AlertService";

export default function Navbar() {
  useEffect(() => {
    themeChange(false);

    let tombolTema = document.getElementsByClassName("tombol-tema");

    if (document.querySelector("html").getAttribute("data-theme") == "dark") {
      tombolTema[0].innerHTML = "Light Mode";
    }

    firstLoadService();
  }, []);

  return (
    <div className="navbar fixed top-0 bg-base-100 shadow-md sm:absolute z-10">
      {/* alert start */}

      <div className=" fixed z-10 w-full flex justify-center left-0 px-5 -top-[150px]">
        <div className="max-w-2xl w-full hidden" id="alert">
          <div className="alert flex justify-center">
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
            <span id="alert-msg"></span>
          </div>
        </div>
      </div>

      {/* alert end */}

      <div>
        <label
          tabIndex="0"
          onClick={() => {
            let menu = document.querySelector("#menu");
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
          }}
          className="btn btn-ghost btn-circle lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
          <Link className="w-full" href={"#about"}>
            About
          </Link>
        </li>
        <li className="">
          <div
            id=""
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
          <Link href={"/login"} id="tombol-login" className="">
            Login
          </Link>
        </li>
      </ul>

      <div className="flex-none gap-2 hidden ml-5" id="bagian-profil">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border border-primary">
              <Image alt="foto-profil" src={profil}></Image>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
                onClick={() => {
                  if (LogoutService()) {
                    alertService("success", "Berhasil Logout");
                    setTimeout(() => {
                      location.reload();
                    }, 1900);
                  } else {
                    alertService(null, "");
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
