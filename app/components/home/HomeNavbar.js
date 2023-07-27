"use client";

import { useEffect, useRef } from "react";
import "../../style/home/HomeNavBar.css";
import Login from "./Login";

export default function HomeNavbar() {
  const tampilanLogin = useRef(null);

  useEffect(() => {
    window.onscroll = function () {
      const navigasiKita = document.querySelector("#navigasi-kita");
      const jarakKeTop = navigasiKita.offsetTop;

      if (window.scrollY > jarakKeTop) {
        navigasiKita.classList.add("kasih-bayangan");
        navigasiKita.classList.remove("sm:bg-transparent");
      } else {
        navigasiKita.classList.remove("kasih-bayangan");
        navigasiKita.classList.add("sm:bg-transparent");
      }
    };
  }, []);

  return (
    <>
      <Login ref={tampilanLogin} />
      <div
        id="navigasi-kita"
        className=" fixed top-0 w-full z-40 bg-transparent bg-white sm:bg-transparent"
      >
        <div className="">
          <div className="flex items-center justify-between py-2 w-full">
            <div className="px-4 md:px-8 2xl:px-20 flex justify-center items-center">
              <a
                href="#home"
                className="font-bold text-2xl drop-shadow-lg lg:text-2xl"
              >
                <span className=" text-slate-800">HIMASTI </span>
                <span className="text-slate-900 font-normal hidden lg:inline">
                  INSTITUT TEKNOLOGI DEL
                </span>
              </a>
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
                    <a
                      href="#home"
                      className="flex items-center text-base py-1"
                    >
                      Home
                    </a>
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
                    <button
                      id="tombol-login"
                      className="mt-5 shadow-lg bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md md:mt-0 "
                      onClick={function () {
                        // console.log(tampilanLogin);
                        tampilanLogin.current.classList.toggle("hidden");
                        tampilanLogin.current.classList.toggle("flex");
                      }}
                    >
                      Login
                    </button>
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
