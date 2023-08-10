import DataAPI from "./DataAPI";

export default async function getUser() {
  const dataapi = new DataAPI();

  let url = dataapi.url + "/api/himasti/user/get-user";

  if (localStorage.getItem("username") != null) {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        username: localStorage.getItem("username"),
      },
    });

    let data = await response.json();

    sessionStorage.setItem("firstName", data.data.firstName);
    sessionStorage.setItem("lastName", data.data.lastName);
    sessionStorage.setItem("angkatan", data.data.angkatan);
    sessionStorage.setItem("tanggalLahir", data.data.tanggalLahir);
    sessionStorage.setItem("kotaLahir", data.data.kotaLahir);
    sessionStorage.setItem("isAdmin", data.data.admin);
  }
}
