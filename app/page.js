"use client";

import Content from "./AboutHimasti";
import FirstPage from "./FirstPage";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      {/* <HomeNavbar /> */}
      <Navbar />
      <FirstPage />
      <Content />
    </div>
  );
}
