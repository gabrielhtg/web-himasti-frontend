"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div
      id="login"
      className={"w-full flex justify-center h-screen items-center bg-white"}
    >
      <div className="container border border-blue-500 max-w-lg bg-white w-11/12 py-10 px-10 rounded-3xl text-center ">
        <h1 className=" font-bold text-xl mb-5">Login</h1>
        <form onSubmit={(Event) => Event.preventDefault()}>
          <div className="mb-5">
            <label className="block text-left">Username</label>
            <input
              id="username"
              type="text"
              onClick={(event) => {
                event.target.select();
              }}
              className="rounded-md"
            ></input>
          </div>
          <div className="mb-5">
            <label className="text-left block">Password</label>
            <input
              id="password"
              type="password"
              onClick={(Event) => {
                Event.target.select();
              }}
              className="w-full rounded-md"
            ></input>
          </div>
          <div>
            <button
              className=" bg-blue-500 py-2 px-5 rounded-md mt-5 text-white hover:bg-blue-600"
              onClick={() => {
                const url = "http://192.168.43.201:8080/api/himasti/auth/login";
                const reqUsername = document.querySelector("#username").value;
                const reqPassword = document.querySelector("#password").value;

                const reqData = {
                  username: reqUsername,
                  password: reqPassword,
                };

                const reqOptions = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(reqData),
                };

                fetch(url, reqOptions)
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    if (data.pesanError == null) {
                      alert("Login Sukses boss");
                    } else {
                      alert("Login gagal");
                    }
                  });
              }}
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-base mt-5">
          Belum punya akun? Daftarkan <Link href={"/register"}>disini</Link>
        </p>
      </div>
    </div>
  );
}
