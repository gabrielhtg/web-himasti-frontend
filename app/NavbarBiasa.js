"use client";

import { useEffect, useState } from "react";
import "./(style)/NavbarStyle.css";
import Link from "next/link";
import profil from "./(images)/foto/profil.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b-2 sm:absolute z-10">
      <div className="dropdown md:hidden">
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
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          HIMASTI
        </a>
      </div>

      {/* menu besar start */}
      <div className="hidden md:flex md:w-96 md:justify-evenly">
        <span>Home</span>
        <span>Portfolio</span>
        <span>About</span>
        <span>Contact Us</span>
      </div>
      {/* menu besar end */}

      <div className="flex-none gap-2">
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
