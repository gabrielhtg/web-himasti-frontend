"use client";

import { useEffect, useState } from "react";
import "./(style)/NavbarStyle.css";
import Link from "next/link";

export default function Navbar() {
  const [hamburger, setHamburger] = useState("");

  // useEffect(() => {
  const container = document.getElementById("mini-nav");

  document.body.addEventListener("click", (e) => {
    // console.log(
    //   !e.target.closest("#mini-nav" && hamburger === "hamburger-active")
    // );

    console.log(!e.target.closest("#mini-nav"));

    // console.log(hamburger);
    if (!e.target.closest("#mini-nav") && hamburger === "hamburger-active") {
      setHamburger("");
      container.classList.add("hidden");
    }

    // if (!e.target.closest("#mini-nav"))
  });
  // }, []);

  return (
    <>
      <div
        id="navigasi-kita"
        className="top-0 sm:fixed w-full z-10 bg-white kasih-bayangan"
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
                className={"py-1 md:hidden" + " " + hamburger}
                onClick={function () {
                  const miniNav = document.getElementById("mini-nav");

                  if (hamburger === "") {
                    setHamburger("hamburger-active");
                    miniNav.classList.toggle("hidden");
                  }
                  // else {
                  //   setHamburger("");
                  //   miniNav.classList.toggle("hidden");
                  // }
                }}
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>

              <nav
                // className="hidden absolute mr-6 right-1 bg-white top-full mt-2 shadow-lg py-3 px-3 rounded-md text-center md:flex md:static md:bg-transparent md:py-2 md:shadow-none md:px-0 md:mr-0 md:right-0 md:mt-0 lg:text-md"

                className={
                  "absolute z-10 bg-white shadow-utama py-2 right-5 mt-16 md:mt-0 hidden md:flex md:shadow-none md:static"
                }
                id="mini-nav"
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
