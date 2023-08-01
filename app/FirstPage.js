"use client";

import Image from "next/image";
import background from "./(images)/foto/latarHemat.jpg";
import person from "./(images)/foto/person2.png";
import bgPutih from "./(images)/foto/putih.png";
import bgDark from "./(images)/foto/dark.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function FirstPage() {
  const nilaiTransformGambar =
    " 2xl:-translate-y-72 xl:-translate-y-60 md:-translate-y-28 sm:-translate-y-28 translate-y-0";

  return (
    <div className="">
      <div className=" relative ">
        <Image
          src={background}
          alt="bg hanny"
          priority={true}
          className={"absolute bg-cover w-full top-0" + nilaiTransformGambar}
        ></Image>

        <h1 className="text-slate-200 absolute top-[70px] 2xl:top-[100px] left-1/2 transform -translate-x-1/2 font-bold 2xl:text-[15rem] xl:text-[12rem] text-7xl md:text-[10rem] sm:text-[8rem]">
          <div className="wrapper">
            <div className="typing-demo drop-shadow-xl mt-4">WE ARE</div>
          </div>
        </h1>
        {/* <div
          id="scroll-bawah"
          className="absolute z-[2] w-full h-screen md:flex flex-col justify-end items-end hidden"
        >
          <a
            href="#about"
            className={
              "flex justify-center items-center w-20 h-14  rounded-full hover:w-14 hover:transition-all duration-300 ease-in-out delay-100 mr-10 mb-10 shadow-md border-2 bg-neutral"
            }
          >
            <span className="animate-bounce absolute mt-1 ">
              <HiOutlineChevronDoubleDown size={20} className=" inline" />
            </span>
          </a>
        </div> */}
        <div className="relative">
          <div
            className={
              "z-[1] absolute -bottom-2 flex flex-col items-center justify-end " +
              nilaiTransformGambar
            }
          >
            <Image
              id="gambar-lengkung"
              src={bgPutih}
              alt="bg putih"
              onLoad={async () => {
                let theme = document
                  .querySelector("html")
                  .getAttribute("data-theme");

                if (theme !== "light") {
                  let dataBgDark = document.getElementById(
                    "gambar-lengkung-dark"
                  );
                  let dataLight = document.getElementById("gambar-lengkung");

                  dataBgDark.classList.toggle("hidden");
                  dataLight.classList.toggle("hidden");
                }
              }}
              className="w-screen"
            ></Image>

            <Image
              id="gambar-lengkung-dark"
              src={bgDark}
              alt="bg putih"
              className="w-screen hidden"
            ></Image>
          </div>
          <Image
            src={person}
            priority={true}
            alt="person hanny"
            id="gambar-hanny"
            className={
              "image-container z-[1] w-full top-0" + nilaiTransformGambar
            }
          ></Image>
        </div>
      </div>
    </div>
  );
}
