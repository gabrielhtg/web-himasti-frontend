"use client";
import getUser from "@/service/getUser";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import cekInputDataLengkap from "@/service/cekInputDataLengkap";
import submitDataLengkap from "@/service/lengkapiDataService";
import uploadFotoProfil from "@/service/uploadFotoProfil";

export default function LengkapiData() {
  let router = useRouter();
  useEffect(() => {
    let getData = async () => {
      await getUser();

      document.querySelector("#greetings").innerHTML =
        "Hello " + sessionStorage.getItem("firstName") + "!!";
    };

    getData();

    if (sessionStorage.getItem("isLogin") == "false") {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 id="greetings" className="text-5xl font-bold">
              Hello{" "}
            </h1>
            <p className="py-6">
              <span className="mb-3 block ">Selamat datang di web ini!!</span>
              Untuk dapat menggunakan web ini, kamu harus melengkapi data kamu
              terlebih dahulu.
              <br /> Yuk lengkapi data diri kamu!
            </p>
            <Link href={"#item1"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-5 bg-base-200 flex w-full flex-col items-center">
        <div className="carousel w-full text-center max-w-lg">
          <div id="item1" className="carousel-item w-full ">
            <div className="border rounded-box w-full p-5 flex flex-col items-center">
              <p className="mb-5">
                Agar kamu mudah dikenali, masukkan foto terbaik kamu disini!
                Pastikan wajah kamu terlihat dengan jelas ya.
              </p>
              <div className="form-control w-full max-w-xs  justify-center">
                <label className="label">
                  <span className="label-text">Pick or drag a file</span>
                </label>

                <input
                  id="input-foto"
                  type="file"
                  max={5000}
                  accept=".png, .jpg, .jpeg"
                  onBlur={() => {
                    cekInputDataLengkap();
                  }}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          <div id="item2" className="carousel-item w-full">
            <div className="border rounded-box w-full flex flex-col p-5 justify-center items-center">
              <p className="mb-5">Kamu angkatan tahun berapa?</p>
              <input
                id="input-angkatan"
                type="number"
                min={2001}
                max={2030}
                onBlur={() => {
                  cekInputDataLengkap();
                }}
                step={1}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div id="item3" className="carousel-item w-full">
            <div className="border rounded-box p-5 flex flex-col justify-center w-full items-center">
              <p className="mb-5">Masukkan kota kelahiran kamu.</p>
              <input
                id="input-kota-lahir"
                type="text"
                onBlur={() => {
                  cekInputDataLengkap();
                }}
                placeholder="Type here"
                className="input input-bordered min-w-[200px] w-full"
              />
            </div>
          </div>
          <div id="item4" className="carousel-item w-full">
            <div className="border rounded-box p-5 flex flex-col justify-center w-full">
              <p className="mb-5">Masukkan tanggal lahir kamu.</p>
              <input
                id="input-tanggal-lahir"
                className="input input-bordered w-full"
                type="date"
                onBlur={() => {
                  cekInputDataLengkap();
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>

        <button
          id="tombol-submit-lengkapi-data"
          className="btn btn-primary mt-10 btn-disabled"
          onClick={() => {
            let inputFoto = document.querySelector("#input-foto").files[0];

            let inputAngkatan = document.querySelector("#input-angkatan").value;

            let inputKotaLahir =
              document.querySelector("#input-kota-lahir").value;

            let inputTglLahir = document.querySelector(
              "#input-tanggal-lahir"
            ).value;

            try {
              console.log("Pesan ini dari lengkapidata.js : " + inputFoto);
              uploadFotoProfil(inputFoto);

              submitDataLengkap(inputAngkatan, inputKotaLahir, inputTglLahir);
            } catch {}
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}
