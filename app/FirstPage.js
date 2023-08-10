"use client";

import Image from "next/image";
import background from "./(images)/foto/latarHemat.jpg";
import person from "./(images)/foto/person2.png";
import bgPutih from "./(images)/foto/putih2.png";
import bgDark from "./(images)/foto/dark2.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";
import bgDarkAtauLight from "@/service/bgDarkAtauLight";
import { useEffect } from "react";

export default function FirstPage() {
  useEffect(() => {
    bgDarkAtauLight();
  });

  return (
    <div className=" bg-base-200 2xl:mt-[-200px] lg:mt-[-100px] mt-10">
      <div className="w-full relative">
        <Image
          src={background}
          alt="bg hanny"
          priority={true}
          className={"w-full object-cover"}
        ></Image>

        <h1 className="text-slate-200 absolute top-[50px] 2xl:top-[300px] lg:top-[180px] left-1/2 transform -translate-x-1/2 font-bold 2xl:text-[15rem] xl:text-[12rem] text-7xl md:text-[10rem] sm:text-[8rem]">
          <div className="wrapper">
            <div className="typing-demo drop-shadow-xl mt-4">WE ARE</div>
          </div>
        </h1>
        {/* <div
          id="scroll-bawah"
          className="absolute z-[2] w-full h-screen md:flex flex-col justify-end items-end hidden"
        >
          <Link href={"#about"} className=" mr-16 mb-10">
            {" "}
            <button className="btn btn-circle">
              <HiOutlineChevronDoubleDown size={20} className=" inline" />
            </button>
          </Link>
        </div> */}

        <div>
          <Image
            id="gambar-lengkung"
            src={bgPutih}
            alt="bg putih"
            className="absolute bottom-0 z-[2]"
          ></Image>

          <Image
            id="gambar-lengkung-dark"
            src={bgDark}
            alt="bg putih"
            className="absolute bottom-0 z-[2] hidden"
          ></Image>
          <Image
            src={person}
            priority={true}
            alt="person hanny"
            id="gambar-hanny"
            className={"absolute z-[1] w-full top-0"}
          ></Image>
        </div>
      </div>
    </div>
  );
}
