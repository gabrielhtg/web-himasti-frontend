export default function cekInputDataLengkap() {
  let inputFoto = document.querySelector("#input-foto");

  let inputAngkatan = document.querySelector("#input-angkatan");

  let inputKotaLahir = document.querySelector("#input-kota-lahir");

  let inputTglLahir = document.querySelector("#input-tanggal-lahir");

  let tombolSubmitLengkapiData = document.querySelector(
    "#tombol-submit-lengkapi-data"
  );

  if (
    inputFoto.value === "" ||
    inputAngkatan.value === "" ||
    inputKotaLahir.value === "" ||
    inputTglLahir.value === ""
  ) {
    if (!tombolSubmitLengkapiData.classList.contains("btn-disabled")) {
      tombolSubmitLengkapiData.classList.add("btn-disabled");
    }
  } else {
    tombolSubmitLengkapiData.classList.remove("btn-disabled");
  }
}
