"use client";

import { useEffect } from "react";
import "./(style)/NavbarStyle.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div
        id="navigasi-kita"
        className="top-0 w-full z-40 bg-white kasih-bayangan"
      >
        <div className="">
          <div className="flex items-center justify-between py-2 w-full">
            <div className="px-4 md:px-8 2xl:px-20 flex justify-center items-center">
              <Link
                href={"./"}
                className="font-bold text-2xl drop-shadow-lg lg:text-2xl"
              >
                <span className=" text-slate-800">HIMASTI </span>
                <span className="text-slate-900 font-normal hidden lg:inline">
                  INSTITUT TEKNOLOGI DEL
                </span>
              </Link>
            </div>

            <div className="px-4 2xl:px-20 flex">
              <button
                id="hamburger"
                className="py-1 md:hidden"
                onClick={function () {
                  const menuHimasti = document.querySelector("#menu-himasti");
                  hamburger.classList.toggle("hamburger-active");
                  menuHimasti.classList.toggle("hidden");
                }}
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                className="hidden absolute mr-6 right-1 bg-white top-full mt-2 shadow-lg py-3 px-3 rounded-md text-center md:flex md:static md:bg-transparent md:py-2 md:shadow-none md:px-0 md:mr-0 md:right-0 md:mt-0 lg:text-md"
                id="menu-himasti"
              >
                <ul className="block md:flex">
                  <li className="hover:text-blue-600 px-5">
                    <Link
                      href={"./"}
                      className="flex items-center text-base py-1"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-blue-600 px-5">
                    <a
                      href="#home"
                      className="flex items-center text-base py-1"
                    >
                      About
                    </a>
                  </li>
                  <li className="hover:text-blue-600 px-5">
                    <a
                      href="#home"
                      className="flex items-center text-base py-1"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="px-5">
                    <Link href={"login"}>
                      <button
                        id="tombol-login"
                        className="transition delay-75 ease-in mt-5 shadow-lg bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md md:mt-0 "
                      >
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
