import Link from "next/link";
import { useState } from "react";
import alertService from "../../service/AlertService";
import registerService from "../../service/RegisterService";
import { useRouter } from "next/navigation";

export default function Register() {
  const [registerToken, setRegisterToken] = useState("");
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  return (
    <div className="py-10 px-5 text-center sm:flex sm:flex-col sm:h-screen sm:justify-center sm:items-center sm:absolute sm:w-full sm:top-0">
      <div className="sm:border sm:px-10 sm:py-10 sm:rounded-xl w-full max-w-lg sm:border-neutral sm:shadow-utama">
        <h1 className="text-2xl font-bold">Yuk Daftarkan Akunmu</h1>

        {/* minta token start */}
        <div id="div-token">
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="mb-5 w-full max-w-sm text-center">
              Sebelum masuk. Masukkan Register Token yang sudah kamu terima dari
              admin HIMASTI.
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

          <button
            id="tombol-next-token"
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
                alertService(null, "Isi token terlebih dahulu!");
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
                alertService(null, "Lengkapi Form Dulu!");
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
                  type="password"
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
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </div>
          </form>

          <button
            className="btn btn-neutral btn-md mt-10 w-full max-w-[250px]"
            onClick={async () => {
              const inputPassword =
                document.querySelector("#input-password").value;
              console.log(inputPassword);

              const inputRePassword = document.querySelector(
                "#input-re-enter-password"
              ).value;

              if (inputPassword !== "" && inputRePassword !== "") {
                if (inputPassword === inputRePassword) {
                  try {
                    const statusLogin = await registerService(
                      registerToken,
                      username,
                      inputPassword,
                      nama
                    );
                    if (statusLogin.error == false) {
                      alertService(
                        "success",
                        "Register berhasil! Tunggu sebentar, kamu akan diarahkan ke laman login."
                      );
                      setTimeout(() => {
                        router.push("/login");
                      }, 2000);
                    } else {
                      alertService(
                        null,
                        "Register gagal! " + statusLogin.pesanError
                      );
                      setTimeout(() => {
                        location.reload();
                      }, 2000);
                    }
                  } catch {
                    alertService(null, "Gagal terhubung ke server!");
                    setTimeout(() => {
                      location.reload();
                    }, 2000);
                  }
                } else {
                  alertService(null, "Password tidak sama!");
                }
              } else {
                alertService(null, "Lengkapi Form Dulu!");
              }
            }}
          >
            Register Now
          </button>
        </div>

        {/* minta password end */}

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
