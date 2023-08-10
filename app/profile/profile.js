"use client";

import DataAPI from "@/service/DataAPI";
import milisToString from "@/service/milisToString";
import Image from "next/image";
import Profil from "../(images)/foto/profil.png";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [fotoProfil, setFotoProfil] = useState(Profil);
  const [nama, setNama] = useState("");
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [ttl, setTtl] = useState("");

  useEffect(() => {
    let username = localStorage.getItem("username");
    let token = localStorage.getItem("token");
    let namaLengkap =
      sessionStorage.getItem("firstName") +
      " " +
      sessionStorage.getItem("lastName");

    const dataapi = new DataAPI();

    setFotoProfil(
      dataapi.url + "/api/himasti/user/foto/" + username + "/" + token
    );

    setNama(namaLengkap);
    setUsername(localStorage.getItem("username"));
    setNamaDepan(sessionStorage.getItem("firstName"));
    setNamaBelakang(sessionStorage.getItem("lastName"));
    setAngkatan(sessionStorage.getItem("angkatan"));
    try {
      setTtl(
        sessionStorage.getItem("kotaLahir").trim() +
          ", " +
          milisToString(sessionStorage.getItem("tanggalLahir"))
      );
    } catch {}
  }, []);

  return (
    <div className="md:h-screen flex bg-base-200">
      <div className="container mx-auto mt-[95px] px-5 flex flex-col items-center w-full justify-center">
        <div className="flex flex-col md:flex-row w-full md:justify-center">
          <div className="flex flex-col justify-center items-center pt-6 pb-5 px-5 card bg-base-300 rounded-box md:w-1/2">
            <div className="avatar mb-5 md:mb-10">
              <div className="w-28 sm:w-36 md:w-40 lg:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src={fotoProfil}
                  alt="foto-profil"
                  width={150}
                  height={150}
                  priority={true}
                ></Image>
              </div>
            </div>
            <h1 className=" text-xl font-semibold sm:text-2xl lg:text-3xl">
              {nama}
            </h1>
          </div>

          <div className="divider md:divider-horizontal"></div>

          <div className="grid card bg-base-300 rounded-box p-5 md:w-1/2">
            <div className="flex flex-col">
              <h1 className=" text-accent font-semibold">Username</h1>
              <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                <span>{username}</span>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold">Nama Depan</h1>
              <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                <span>{namaDepan}</span>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold">Nama Belakang</h1>
              <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                <span>{namaBelakang}</span>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold">Angkatan</h1>
              <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                <span>{angkatan}</span>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold">
                Tempat Tanggal Lahir
              </h1>
              <div className="bg-base-100 py-2 px-5 mt-2 rounded-lg">
                <span>{ttl}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-16">
          <Link href={"/profile/edit-profile"}>
            <button className="btn btn-neutral">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
