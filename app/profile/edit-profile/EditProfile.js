"use client";

import fileToBlob from "@/service/fileToBlob";
import Image from "next/image";
import { useEffect, useState } from "react";
import profil from "../../(images)/foto/profil.png";
import { BsFillPersonFill } from "react-icons/bs";
import updateProfileService from "@/service/UpdateProfileService";
import Link from "next/link";
import DataAPI from "@/service/DataAPI";

function mamaUpdateProfileDiKlik() {
  let elementNamaDepan = document.querySelector("#input-nama-depan");
  let elementNamaBelakang = document.querySelector("#input-nama-belakang");
  let elementAngkatan = document.querySelector("#input-angkatan");
  let elementKotaLahir = document.querySelector("#input-kota-lahir");
  let elementTanggalLahir = document.querySelector("#input-tanggal-lahir");
  let elementInputFoto = document.querySelector("#input-foto");

  updateProfileService(
    elementInputFoto.files[0],
    elementNamaDepan.value,
    elementNamaBelakang.value,
    elementAngkatan.value,
    elementKotaLahir.value,
    elementTanggalLahir.value
  );
}

export default function EditProfile() {
  const [fotoProfil, setFotoProfil] = useState(profil);
  const [fotoProfilBaru, setFotoProfilBaru] = useState();

  useEffect(() => {
    let elementNamaDepan = document.querySelector("#input-nama-depan");
    let elementNamaBelakang = document.querySelector("#input-nama-belakang");
    let elementAngkatan = document.querySelector("#input-angkatan");
    let elementKotaLahir = document.querySelector("#input-kota-lahir");
    let elementTanggalLahir = document.querySelector("#input-tanggal-lahir");

    let tanggalLahirMilis = sessionStorage.getItem("tanggalLahir");

    let date = new Date(+tanggalLahirMilis);

    let tahun = date.getFullYear();
    let bulan = String(date.getMonth() + 1).padStart(2, "0");
    let hari = String(date.getDate()).padStart(2, "0");

    let tanggalFormatted = `${tahun}-${bulan}-${hari}`;

    elementNamaDepan.value = sessionStorage.getItem("firstName");
    elementNamaBelakang.value = sessionStorage.getItem("lastName");
    elementAngkatan.value = sessionStorage.getItem("angkatan");
    elementKotaLahir.value = sessionStorage.getItem("kotaLahir");
    elementTanggalLahir.value = tanggalFormatted;

    setFotoProfil(
      new DataAPI().url +
        "/api/himasti/user/foto/" +
        localStorage.getItem("username") +
        "/" +
        localStorage.getItem("token")
    );
  }, [fotoProfil]);

  return (
    <div className="md:h-screen flex bg-base-200">
      <div className="container mx-auto mt-[85px] px-5 flex flex-col items-center w-full justify-center">
        <div className="flex flex-col md:flex-row w-full md:justify-center">
          <div className=" flex flex-col justify-center items-center pt-10 pb-8 px-5 card bg-base-300 rounded-box md:w-1/2">
            <div className="avatar mb-5 md:mb-10">
              <div className="w-28 sm:w-36 md:w-40 lg:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <div className="w-full h-full flex justify-center items-center">
                  {/* <Image
                    id="foto-profil-lama"
                    src={fotoProfil}
                    priority={true}
                    alt="foto-profil"
                    width={500}
                    height={500}
                    className=""
                  ></Image> */}

                  <Image
                    id="foto-profil-baru"
                    src={fotoProfilBaru}
                    alt="foto-profil"
                    width={100}
                    height={100}
                    className="hidden"
                  ></Image>
                  <BsFillPersonFill
                    id="logo-profil"
                    className=" w-8/12 h-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h1 className=" text-accent font-semibold mb-2">Foto Profil</h1>
              <input
                type="file"
                id="input-foto"
                max={5000}
                accept=".png, .jpg, .jpeg"
                className="file-input file-input-bordered w-full"
                onChange={() => {
                  let inputFoto = document.querySelector("#input-foto");

                  let elementFotoLama =
                    document.querySelector("#foto-profil-lama");
                  let elementFotoBaru =
                    document.querySelector("#foto-profil-baru");

                  let logoProfil = document.querySelector("#logo-profil");

                  if (
                    fotoProfil ==
                    new DataAPI().url +
                      "/api/himasti/user/foto/" +
                      localStorage.getItem("username") +
                      "/" +
                      localStorage.getItem("token")
                  ) {
                    // elementFotoLama.classList.toggle("hidden");
                    elementFotoBaru.classList.toggle("hidden");
                    logoProfil.classList.toggle("hidden");
                  }

                  setFotoProfilBaru(fileToBlob(inputFoto));
                }}
              />
            </div>
          </div>

          <div className="divider md:divider-horizontal"></div>

          <div className="grid card bg-base-300 rounded-box p-5 md:w-1/2">
            <div className="flex flex-col">
              <h1 className=" text-accent font-semibold mb-2">Nama Depan</h1>
              <input
                id="input-nama-depan"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold mb-2">Nama Belakang</h1>
              <input
                id="input-nama-belakang"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold mb-2">Angkatan</h1>
              <input
                id="input-angkatan"
                type="number"
                min={2001}
                max={2025}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold mb-2">Kota Lahir</h1>
              <input
                id="input-kota-lahir"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col mt-5">
              <h1 className=" text-accent font-semibold mb-2">Tanggal Lahir</h1>
              <input
                id="input-tanggal-lahir"
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-5 justify-center mb-16">
          <Link href={"/profile"}>
            <button className="btn btn-neutral btn-wide">Back</button>
          </Link>

          <button
            onClick={() => {
              mamaUpdateProfileDiKlik();
            }}
            className="btn btn-primary btn-wide"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
