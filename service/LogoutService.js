export default async function LogoutService() {
  let url = "http://192.168.43.201:8080/api/himasti/auth/logout";

  try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        username: localStorage.getItem("username"),
      },
    });

    if (response.status === 200) {
      console.log("berhasil");
      return true;
    } else {
      console.log("gagal");
      return false;
    }
  } catch {
    return false;
  }
}
