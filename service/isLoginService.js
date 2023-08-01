export default async function checkIsLogin() {
  let bagianProfil = document.querySelector("#bagian-profil");
  let tombolLogin = document.querySelector("#tombol-login");

  const url = "http://192.168.43.201:8080/api/himasti/auth/islogin";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        username: localStorage.getItem("username"),
        "session-token": localStorage.getItem("token"),
      },
    });

    // user sudah login
    if (response.status === 200) {
      bagianProfil.classList.remove("hidden");
      tombolLogin.classList.add("hidden");
    } else if (response.status === 401) {
    }
  } catch {}
}
