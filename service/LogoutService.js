import DataAPI from "./DataAPI";

export default async function LogoutService() {
  const dataapi = new DataAPI();

  let url = dataapi.url + "/api/himasti/auth/logout";

  try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        username: localStorage.getItem("username"),
      },
    });

    if (response.status === 200) {
      console.log("berhasil");
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      sessionStorage.removeItem("tanggalLahir");
      sessionStorage.removeItem("isLogin");
      sessionStorage.removeItem("lastName");
      sessionStorage.removeItem("isAdmin");
      sessionStorage.removeItem("firstName");
      sessionStorage.removeItem("angkatan");
      sessionStorage.removeItem("kotaLahir");
      return true;
    } else {
      console.log("gagal");
      return false;
    }
  } catch {
    return false;
  }
}
