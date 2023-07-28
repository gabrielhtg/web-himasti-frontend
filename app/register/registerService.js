export default function registerUser(Event) {
  //   Event.preventDefault();
  console.log("Submit dieksekusi");
  const url = "http://192.168.43.201:8080/api/himasti/user/register";
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password");
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const fotoProfil = document.querySelector("#fotoProfil").files[0];
  const angkatan = document.querySelector("#angkatan").value;
  const tempatLahir = document.querySelector("#tempatLahir").value;
  const tanggalLahir = document.querySelector("#tanggalLahir").value;

  const reader = new FileReader();
  reader.onload = (Event) => {
    const dataFoto = Event.target.result;
  };

  console.log(dataFoto);
  //   const dataRequest = {
  //     username : username,
  //     password : password.value,
  //     firstName : firstName,
  //     lastName : lastName,
  //     fotoProfil :
  //   }

  //   fetch(url, )
}
