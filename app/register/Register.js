"use client";
import TombolSubmit from "../(component)/TombolSubmit";
import FormWarn from "./FormWarn";
import "./RegisterStyle.css";
import registerUser from "./registerService";

export default function Register() {
  return (
    <div className="container mx-auto px-5">
      <h1 className="font-bold text-xl mt-5 mb-10">Register Account</h1>
      <form className=" tempat-input ">
        <div className="mb-5">
          <label>
            <span className="inputTitle">Username</span>
            <input
              required
              id="username"
              autoCapitalize="off"
              autoComplete="off"
              placeholder="ex: robertganteng"
              type="text"
              onFocus={(Event) => {
                Event.target.select();
              }}
            ></input>
          </label>
        </div>

        <div className="mb-5">
          <label>
            <span className="inputTitle">Password</span>
            <div>
              <input
                required
                id="password"
                type="password"
                onFocus={(Event) => {
                  Event.target.select();
                  const passwordWarn =
                    document.querySelectorAll(".password-warn");
                  passwordWarn.forEach((element) => {
                    element.innerHTML = "";
                  });
                }}
              ></input>
              <FormWarn classname={"password-warn"} />
            </div>
          </label>
        </div>

        <div className="mb-5">
          <label>
            <span className="inputTitle">Re-Enter Password</span>
            <div>
              <input
                required
                id="passwordAgain"
                type="password"
                onFocus={(Event) => {
                  Event.target.select();
                  const passwordWarn =
                    document.querySelectorAll(".password-warn");

                  passwordWarn.forEach((element) => {
                    element.innerHTML = "";
                  });
                }}
                onBlur={(Event) => {
                  const password = document.querySelector("#password");
                  const passwordWarn =
                    document.querySelectorAll(".password-warn");

                  if (password.value !== Event.target.value) {
                    passwordWarn.forEach((element) => {
                      element.innerHTML = "Password not match!";
                    });
                  }
                }}
              ></input>
              <FormWarn classname={"password-warn"} />
            </div>
          </label>
        </div>

        <div className="mb-5">
          <label>
            <span className="inputTitle">First Name</span>
            <input
              required
              autoComplete="off"
              id="firstName"
              placeholder="ex: Robert"
              className=" capitalize"
              type="text"
              onFocus={(Event) => {
                Event.target.select();
              }}
            ></input>
          </label>
        </div>

        <div className="mb-5">
          <label>
            <span className="inputTitle">Last Name</span>
            <input
              id="lastName"
              placeholder="ex: Aritonang"
              className=" capitalize"
              type="text"
              onFocus={(Event) => {
                Event.target.select();
              }}
            ></input>
          </label>
        </div>

        <div className="mb-5 max-w-lg">
          <label>
            <span className="inputTitle">Foto Profil</span>
            <div className="border rounded-md h-11 flex items-center border-slate-500 px-2">
              <input id="fotoProfil" type="file"></input>
            </div>
          </label>
        </div>

        <div className="mb-5">
          <label>
            <span className="inputTitle">Angkatan</span>
            <input
              type="number"
              id="angkatan"
              name="year"
              min="1900"
              max="2099"
              placeholder="ex: 2021"
              required
            ></input>
          </label>
        </div>

        <div className="mb-5">
          <label>
            <span className="inputTitle">Tempat Lahir</span>
            <input
              id="tempatLahir"
              type="text"
              placeholder="ex: Laguboti"
              onFocus={(Event) => {
                Event.target.select();
              }}
            ></input>
          </label>
        </div>

        <div className="mb-5">
          <label>
            <span className="inputTitle">Tanggal Lahir (mm/dd/yyyy)</span>
            <input
              id="tanggalLahir"
              className="form-input mt-1 block w-full"
              type="date"
            ></input>
          </label>
        </div>

        <div>
          <TombolSubmit text={"Register"} fungsi={registerUser} />
        </div>
      </form>
    </div>
  );
}
