"use client";

import Image from "next/image";
import background from "../../images/foto/latarHemat.jpg";
import person from "../../images/foto/person2.png";
import bgPutih from "../../images/foto/putih.png";
import "../../style/home/FirstPageStyle.css";
import { useEffect } from "react";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function FirstPage() {
  const nilaiTransformGambar =
    " 2xl:-translate-y-80 xl:-translate-y-60 md:-translate-y-28 sm:-translate-y-28";
  useEffect(() => {
    const gambarHanny = document.querySelector("#gambar-hanny");

    const delay = () => {
      gambarHanny.classList.remove("scale-0");
    };

    setTimeout(delay, 1000);
  }, []);

  return (
    <div className={"relative mt-5"}>
      <Image
        src={background}
        alt="bg hanny"
        priority={true}
        className={
          "absolute bg-cover w-full top-0 -trans" + nilaiTransformGambar
        }
      ></Image>

      <h1 className="text-slate-200 absolute top-[70px] 2xl:top-[100px] left-1/2 transform -translate-x-1/2 font-bold 2xl:text-[15rem] xl:text-[12rem] text-7xl md:text-[10rem] sm:text-[8rem]">
        <div className="wrapper">
          <div className="typing-demo drop-shadow-xl">WE ARE</div>
        </div>
      </h1>
      <div className="relative">
        <div
          className={
            "z-20 absolute bottom-0 flex flex-col items-center justify-end " +
            nilaiTransformGambar
          }
          id="gambar-putih"
        >
          <a
            href="#about"
            className={
              "absolute 2xl:flex items-end -mb-20 bg-white px-5 py-4 rounded-full hidden" +
              nilaiTransformGambar
            }
          >
            <span>
              <HiOutlineChevronDoubleDown size={20} className=" inline mr-2" />
            </span>
            See More
          </a>

          <Image src={bgPutih} alt="bg putih"></Image>
        </div>
        <Image
          src={person}
          priority={true}
          alt="person hanny"
          id="gambar-hanny"
          className={
            "scale-0 image-container z-20 bg-cover w-full top-0" +
            nilaiTransformGambar
          }
        ></Image>
      </div>
    </div>
  );
}
