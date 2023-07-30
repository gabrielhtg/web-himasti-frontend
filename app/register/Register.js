"use client";

import Link from "next/link";
import { useState } from "react";
import "../(style)/loginStyle.css";
import alertService from "../(component)/alertService";

export default function Register() {
  const [errorMsg, setErrorMsg] = useState("");
  const [registerToken, setRegisterToken] = useState("");
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="py-10 px-5 text-center sm:flex sm:flex-col sm:h-screen sm:justify-center sm:items-center sm:absolute sm:w-full sm:top-0">
      <div className="sm:border sm:bg-white sm:px-10 sm:py-10 sm:rounded-xl w-full max-w-lg sm:border-neutral sm:shadow-utama">
        <h1 className="text-2xl font-bold text-neutral">
          Yuk Daftarkan Akunmu
        </h1>

        {/* minta token start */}
        <div id="div-token">
          <form className="mt-10">
            <div className="flex flex-col justify-center items-center">
              <p className="mb-5 w-full max-w-sm text-center">
                Sebelum masuk. Masukkan Register Token yang sudah kamu terima
                dari admin HIMASTI.
              </p>
              <div className="w-full max-w-sm">
                <label className="label">
                  <span className="label-text">Register Token</span>
                </label>
                <input
                  id="input-token"
                  autoComplete="off"
                  type="text"
                  autoCapitalize="off"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </div>
          </form>

          <button
            className="btn btn-neutral btn-md mt-10 w-full max-w-[250px]"
            onClick={() => {
              let inputToken = document.getElementById("input-token").value;
              let divInputNamaUsername =
                document.getElementById("div-nama-username");
              let divToken = document.getElementById("div-token");

              if (inputToken !== "") {
                setRegisterToken(inputToken);
                divToken.classList.toggle("hidden");
                divInputNamaUsername.classList.toggle("hidden");
              } else {
                setErrorMsg("Isi token terlebih dahulu!");
                alertService();
              }
            }}
          >
            Selanjutnya
          </button>
        </div>

        {/* minta token end */}

        {/* minta nama dan username start */}

        <div className="hidden" id="div-nama-username">
          <form className="mt-10">
            <div className="flex flex-col justify-center items-center">
              <p className="mb-5 w-full max-w-sm text-center">
                Sekarang masukkan nama dan username akun baru kamu.
              </p>
              <div className="w-full max-w-sm">
                <label className="label">
                  <span className="label-text">Nama</span>
                </label>
                <input
                  id="input-nama"
                  autoComplete="off"
                  type="text"
                  autoCapitalize="words"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>

              <div className="w-full max-w-sm mt-5">
                <label className="label">
                  <span className="label-text">Username Baru</span>
                </label>
                <input
                  id="input-username"
                  autoComplete="off"
                  type="text"
                  autoCapitalize="off"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </div>
          </form>

          <button
            className="btn btn-neutral btn-md mt-10 w-full max-w-[250px]"
            onClick={() => {
              let inputNama = document.getElementById("input-nama").value;
              let inputUsername =
                document.getElementById("input-username").value;
              let divNamaUsername =
                document.getElementById("div-nama-username");
              let divPassword = document.getElementById("div-password");

              if (inputNama !== "" && inputUsername !== "") {
                setNama(inputNama);

                setUsername(inputUsername);

                divNamaUsername.classList.toggle("hidden");

                divPassword.classList.toggle("hidden");
              } else {
                setErrorMsg("Lengkapi Form Dulu!");
                alertService();
              }
            }}
          >
            Selanjutnya
          </button>
        </div>

        {/* minta nama dan username end */}

        {/* minta password start */}

        <div className="hidden" id="div-password">
          <form className="mt-10">
            <div className="flex flex-col justify-center items-center">
              <p className="mb-5 w-full max-w-sm text-center">
                Sekarang password baru untuk akun kamu.
              </p>
              <div className="w-full max-w-sm">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="input-password"
                  autoComplete="off"
                  type="password"
                  autoCapitalize="off"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>

              <div className="w-full max-w-sm mt-5">
                <label className="label">
                  <span className="label-text">Re-Enter Password</span>
                </label>
                <input
                  id="input-re-enter-password"
                  autoComplete="off"
                  type="password"
                  autoCapitalize="off"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </div>
          </form>

          <button
            className="btn btn-neutral btn-md mt-10 w-full max-w-[250px]"
            onClick={() => {
              let inputPassword =
                document.getElementById("input-password").value;

              let inputRePassword = document.getElementById(
                "input-re-enter-password"
              ).value;

              let divNamaUsername = document.getElementById("div-password");

              if (inputPassword !== "" && inputRePassword !== "") {
                if (inputPassword === inputRePassword) {
                  setPassword(inputRePassword);
                  setErrorMsg("Register Berhasil");
                  alertService("success");
                  // divNamaUsername.classList.toggle("hidden");
                }
              } else {
                setErrorMsg("Lengkapi Form Dulu!");
                alertService();
              }
            }}
          >
            Selanjutnya
          </button>
        </div>

        {/* minta nama dan username end */}

        <div className=" fixed w-full flex justify-center left-0 px-5 -top-[150px]">
          <div className="  max-w-2xl w-full  hidden" id="alert-error">
            <div className="alert alert-error">
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
              <span>{errorMsg}</span>
            </div>
          </div>
        </div>

        <p className="mt-5">
          Sudah punya akun? Yuks login{" "}
          <Link className="text-info" href={"/login"}>
            disini
          </Link>
        </p>
      </div>
    </div>
  );
}
