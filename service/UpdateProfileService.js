import alertService from "./AlertService";
import DataAPI from "./DataAPI";
import uploadFotoProfil from "./uploadFotoProfil";

export default async function updateProfileService(
  inputFotoProfil,
  inputFirstName,
  inputLastName,
  inputAngkatan,
  inputKotaLahir,
  inputTglLahir
) {
  const dataapi = new DataAPI();

  let urlUpdateProfile = dataapi.url + "/api/himasti/user/update-profile";

  let reqData = {
    firstName: inputFirstName,
    lastName: inputLastName,
    angkatan: inputAngkatan,
    tanggalLahir: Date.parse(inputTglLahir),
    kotaLahir: inputKotaLahir,
  };

  try {
    await fetch(urlUpdateProfile, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: localStorage.getItem("username"),
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(reqData),
    });

    uploadFotoProfil(inputFotoProfil);

    alertService(null, "Berhasil Edit Profil");

    setTimeout(() => {
      window.location.href = "/profile";
    }, 1900);
  } catch {
    alertService("error", "Gagal Edit Profil");
  }
}
