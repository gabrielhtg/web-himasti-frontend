"use client";
import "./RegisterStyle.css";

export default function Register() {
  return (
    <div className="container mx-auto px-5">
      <h1 className="font-bold text-xl mt-5 mb-10">Register Account</h1>
      <form className="text-center tempat-input ">
        <div className="mb-5">
          <label>Username</label>
          <input type="text" className=""></input>
        </div>

        <div className="mb-5">
          <label>Password</label>
          <input type="password"></input>
        </div>

        <div className="mb-5">
          <label>Re-Enter Password</label>
          <input type="password"></input>
        </div>

        <div className="mb-5">
          <label>First Name</label>
          <input type="text"></input>
        </div>

        <div className="mb-5">
          <label>Last Name</label>
          <input type="text"></input>
        </div>

        <div className="mb-5">
          <label>Foto Profil</label>
          <input type="text"></input>
        </div>

        <div className="mb-5">
          <label>Angkatan</label>
          <input type="text"></input>
        </div>

        <div className="mb-5">
          <label>Last Name</label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
}
