"use client";

import Link from "next/link";
import loginService from "../../service/LoginService";
import { useRouter } from "next/navigation";
import alertService from "@/service/AlertService";

export default function Login() {
  const router = useRouter();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="sm:border sm:px-10 sm:py-10 sm:rounded-xl w-full max-w-lg sm:border-neutral sm:shadow-utama sm:bg-base-100">
            <h1 className="text-2xl font-bold">Login Page</h1>

            <form className="mt-10">
              <div className="flex flex-col justify-center items-center">
                <div className="w-full max-w-sm">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    id="input-username"
                    autoComplete="off"
                    type="text"
                    autoCapitalize="none"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center mt-5">
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
              </div>
            </form>

            <button
              className="btn btn-neutral btn-md mt-10 w-full max-w-[250px]"
              onClick={async () => {
                const inputUsernameValue =
                  document.querySelector("#input-username").value;
                const inputPasswordValue =
                  document.querySelector("#input-password").value;

                if (inputUsernameValue !== "" && inputPasswordValue !== "") {
                  let berhasilLogin = await loginService(
                    inputUsernameValue,
                    inputPasswordValue
                  );

                  if (berhasilLogin) {
                    alertService(null, "Berhasil Login");
                    setTimeout(() => {
                      router.push("/");
                    }, 1900);
                  } else {
                    alertService(
                      "error",
                      "Gagal Login. Pastikan username/password kamu benar!"
                    );
                  }
                } else {
                  alertService("error", "Lengkapi form terlebih dahulu!");
                }
              }}
            >
              Login
            </button>

            <p className="mt-5">
              Belum punya akun? Yuks daftar{" "}
              <Link className="text-info" href={"/register"} prefetch={true}>
                disini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
