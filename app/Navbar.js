import "../style/NavbarStyle.css";
import profil from "./(images)/foto/profil.png";
import Image from "next/image";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import Link from "next/link";
import firstLoadService from "../service/isLoginService";
import "../style/alertStyle.css";

// import bgDark from "./(images)/foto/dark.png";
import LogoutService from "@/service/LogoutService";
import alertService from "@/service/AlertService";

export default function Navbar() {
  useEffect(() => {
    themeChange(false);

    let tombolTema = document.getElementsByClassName("tombol-tema");

    if (document.querySelector("html").getAttribute("data-theme") == "dark") {
      tombolTema[0].innerHTML = "Light Mode";
      tombolTema[1].innerHTML = "Light Mode";
    }

    firstLoadService();
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-md sm:absolute z-10">
      {/* alert start */}

      <div className=" fixed z-10 w-full flex justify-center left-0 px-5 -top-[150px]">
        <div className="max-w-2xl w-full hidden " id="alert">
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

      <div className="dropdown lg:hidden">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
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
        <ul
          tabIndex="0"
          className="menu dropdown-content w-auto mt-3 z-[2] p-2 shadow bg-base-100 rounded-box"
        >
          <li>
            <Link href="/" replace={true} prefetch={true}>
              Home
            </Link>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>

          <li>
            <div
              id=""
              className="w-28 tombol-tema"
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
                  let gambarLengkung =
                    document.querySelector("#gambar-lengkung");
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
            {/* tombol login start */}
            <Link href={"/login"} id="tombol-login" className="">
              Login
            </Link>
            {/* tombol login end */}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case text-xl lg:text-2xl"
        >
          HIMASTI
        </Link>
      </div>

      {/* menu besar start */}
      <div className="hidden lg:flex lg:w-[600px] w-96 lg:justify-between text-lg mr-5">
        <Link
          href="/"
          className=" hover:font-semibold transition-all ease-in-out"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="hover:font-semibold transition-all ease-in-out"
        >
          Portfolio
        </Link>
        <Link
          href={"#"}
          className="hover:font-semibold transition-all ease-in-out"
        >
          About
        </Link>
        <Link
          href={"#"}
          className="hover:font-semibold transition-all ease-in-out"
        >
          Contact Us
        </Link>
        <button
          id=""
          className="tombol-tema hover:font-semibold transition-all ease-in-out"
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
        </button>
        {/* tombol login start */}
        <Link href={"/login"} id="tombol-login" className="">
          <button className="btn btn-neutral">Login</button>
        </Link>
        {/* tombol login end */}
      </div>
      {/* menu besar end */}

      <div className="flex-none gap-2 hidden" id="bagian-profil">
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
