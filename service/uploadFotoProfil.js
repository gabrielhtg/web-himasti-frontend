import alertService from "./AlertService";
import DataAPI from "./DataAPI";

export default async function uploadFotoProfil(fileFotoProfil) {
  const dataapi = new DataAPI();

  let url = dataapi.url + "/api/himasti/user/upload-foto-profil";

  const formData = new FormData();
  formData.append("fotoProfil", fileFotoProfil);

  console.log(formData);

  // Lakukan fetch ke API dengan method POST dan body berupa FormData
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        username: localStorage.getItem("username"),
        token: localStorage.getItem("token"),
      },
      body: formData,
    });
  } catch {
    alertService(
      "error",
      "Ukuran foto yang kamu masukkan melebihi ukuran maksimal!"
    );
  }
}
