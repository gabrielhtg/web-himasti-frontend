import DataAPI from "./DataAPI";
import isDataLengkap from "./isDataLengkap";

export default async function checkIsLogin(router) {
  let bagianProfil = document.querySelector("#bagian-profil");
  let tombolLogin = document.querySelector("#tombol-login");

  const dataapi = new DataAPI();

  const url = dataapi.url + "/api/himasti/auth/islogin";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        username: localStorage.getItem("username"),
        "session-token": localStorage.getItem("token"),
      },
    });

    const data = await response.json();

    // user sudah login
    if (data.error == false) {
      if (bagianProfil.classList.contains("hidden")) {
        bagianProfil.classList.remove("hidden");
        tombolLogin.classList.add("hidden");
      }

      if (!(await isDataLengkap())) {
        router.push("/profile/edit-profile");
      }

      sessionStorage.setItem("isLogin", "true");
    } else {
      sessionStorage.setItem("isLogin", "false");
    }
  } catch {}
}
