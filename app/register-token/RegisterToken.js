"use client";

import alertService from "@/service/AlertService";
import getRegisterToken from "@/service/GetRegisterToken";
import { useEffect } from "react";

async function copyToken() {
  let tempatTokenMuncul = document.querySelector("#tempat-token-muncul");

  navigator.clipboard.writeText(tempatTokenMuncul.innerHTML);

  alertService(null, "Token berhasil disalin!");
}

export default function RegisterToken() {
  useEffect(() => {
    async function getToken() {
      let tempatTokenMuncul = document.querySelector("#tempat-token-muncul");
      let registerTokenObj = await getRegisterToken();
      console.log(registerTokenObj);
      tempatTokenMuncul.innerHTML = registerTokenObj.data.registerToken;
    }

    getToken();
  }, []);
  return (
    <div className="flex justify-center bg-base-200 items-center w-full h-screen">
      <div className=" w-full px-5">
        <div className="flex items-center flex-col justify-center w-full">
          <div className="flex mb-5 font-semibold text-accent">
            Register token aktif saat ini :
          </div>

          <div
            id="tempat-token-muncul"
            className="flex w-full bg-base-100 px-5 py-2 rounded-box"
          ></div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="btn btn-neutral btn-wide" onClick={copyToken}>
              Copy Token
            </button>

            <button className="btn btn-primary btn-wide">
              Generate New Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
