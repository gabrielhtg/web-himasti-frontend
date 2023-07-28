"use client";

import { useEffect } from "react";
import Navbar from "../NavbarBiasa";
import Register from "./Register";

export default function Home() {
  return (
    <div className=" top-0">
      <Navbar />
      <Register />
    </div>
  );
}
