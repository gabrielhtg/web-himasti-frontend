import Image from "next/image";
import logoHimasti from "../(images)/logo-himasti/himasti transparan.png";
import Link from "next/link";
import { useState } from "react";
import registerService from "./registerService";

export default function Register() {
  const [msg, setMsg] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [inputTokenHidden, setTokenHidden] = useState("");
  const [classUsername, setClassUsername] = useState("hidden");
  const [classPassword, setClassPassword] = useState("hidden");

  return (
    <div className="px-5 sm:flex sm:justify-center sm:items-center sm:h-screen">
      <div className="sm:shadow-utama sm:flex sm:rounded-2xl">
        <Image
          priority={true}
          src={logoHimasti}
          width={500}
          height={500}
          alt="Logo Himasti"
          className="rounded-l-2xl border-2  border-slate-300 hidden lg:inline"
        ></Image>

        <div className="sm:h-[500px] sm:w-[500px] sm:flex sm:flex-col sm:justify-center sm:items-center sm:px-5 text-center mt-10 sm:mt-0">
          <h1 className="font-semibold text-2xl mb-10">Yuk Daftar Sekarang!</h1>

          {/* Minta token start */}
          <div
            className={
              " flex flex-col justify-center items-center text-center " +
              " " +
              inputTokenHidden
            }
          >
            <p className=" mb-5">
              Sebelum daftar, masukkan token yang sudah diberikan admin ke sini!
            </p>

            <form className=" w-full">
              <label>
                <span className="block mb-2 text-formulir font-semibold">
                  Register Token
                </span>
                <input
                  id="input-token"
                  autoComplete="off"
                  type="text"
                  className={"rounded-lg w-10/12"}
                  onFocus={(e) => {
                    e.target.select();
                    setMsg("");
                  }}
                ></input>
                <span className="mb-10 text-sm mt-1 block text-red-500">
                  {msg}
                </span>
              </label>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="block bg-blue-600 px-6 py-2 text-white rounded-lg mb-5"
                  onClick={(e) => {
                    e.preventDefault();
                    const inputToken = document.querySelector("#input-token");

                    if (inputToken.value === "") {
                      setMsg("Isi token terlebih dahulu!");
                    } else {
                      setTokenHidden("hidden");
                      setClassUsername("flex");
                      setToken(inputToken.value);
                    }
                  }}
                >
                  Selanjutnya
                </button>
              </div>
            </form>
          </div>
          {/* Minta token end */}

          {/* Minta username start */}
          <div
            className={
              " flex-col justify-center items-center text-center w-full" +
              " " +
              classUsername
            }
          >
            <p className=" mb-5">Masukkan nama dan username kamu!</p>

            <form className="w-full">
              <label>
                <span className="block mb-2 text-formulir font-semibold">
                  Nama
                </span>
                <input
                  id="input-nama"
                  autoCapitalize="words"
                  autoComplete="off"
                  type="text"
                  className="rounded-lg mb-5 w-10/12"
                  onFocus={(e) => {
                    e.target.select();
                    setMsg("");
                  }}
                ></input>
              </label>

              <label>
                <span className="block mb-2 text-formulir font-semibold">
                  Username
                </span>
                <input
                  id="input-username"
                  autoComplete="off"
                  autoCapitalize="off"
                  type="text"
                  className="rounded-lg mb-10 w-10/12"
                  onFocus={(e) => {
                    e.target.select();
                    setMsg("");
                  }}
                ></input>
              </label>

              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="block bg-blue-600 px-6 py-2 text-white rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const inputNama = document.querySelector("#input-nama");
                    const inputUsername =
                      document.querySelector("#input-username");

                    if (inputNama.value === "" || inputUsername.value === "") {
                      setMsg("Lengkapi form terlebih dahulu!");
                    } else {
                      setClassUsername("hidden");
                      setClassPassword("flex");

                      const temp = inputNama.value.split(" ");

                      setFirstName(temp[0]);
                      setLastName(temp[1]);
                      setUsername(inputUsername.value);
                    }
                  }}
                >
                  Selanjutnya
                </button>
                <span className="mb-5 text-sm mt-1 block text-red-500">
                  {msg}
                </span>
              </div>
            </form>
          </div>
          {/* Minta username end */}

          {/* Minta password start */}
          <div
            className={
              " flex-col justify-center items-center text-center w-full" +
              " " +
              classPassword
            }
          >
            <p className=" mb-5">Sekarang masukkan password baru kamu!</p>

            <form className="w-full">
              <label>
                <span className="block mb-2 text-formulir font-semibold">
                  Password
                </span>
                <input
                  id="input-password"
                  autoComplete="off"
                  type="password"
                  className={"rounded-lg mb-5 w-10/12"}
                  onFocus={(e) => {
                    e.target.select();
                    setMsg("");
                  }}
                ></input>
              </label>

              <label>
                <span className="block mb-2 text-formulir font-semibold">
                  Re-Enter Password
                </span>
                <input
                  id="input-repassword"
                  autoComplete="off"
                  type="password"
                  className={"rounded-lg mb-10 w-10/12"}
                  onFocus={(e) => {
                    e.target.select();
                    setMsg("");
                  }}
                ></input>
              </label>

              <div className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="block bg-blue-600 px-6 py-2 text-white rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const inputPassword =
                      document.querySelector("#input-password");
                    const inputRePassword =
                      document.querySelector("#input-repassword");

                    if (inputPassword.value === "") {
                      setMsg("Lengkapi form terlebih dahulu!");
                    } else {
                      if (inputPassword.value === inputRePassword.value) {
                        registerService(
                          token,
                          username,
                          inputPassword.value,
                          firstName,
                          lastName
                        );
                      } else {
                        setMsg("Password tidak sama");
                      }
                    }
                  }}
                >
                  Register Now
                </button>
                <span className="mb-5 text-sm mt-1 block text-red-500">
                  {msg}
                </span>
              </div>
            </form>
          </div>
          {/* Minta password end */}

          <div className="text-center">
            Sudah punya akun? Login{" "}
            <Link
              href={"/login"}
              className=" text-blue-500 hover:text-blue-700"
            >
              disini
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
