export default function loginService() {
  const url = "http://192.168.43.201:8080/api/himasti/auth/login";
  const reqUsername = document.querySelector("#username").value;
  const reqPassword = document.querySelector("#password").value;

  const reqData = {
    username: reqUsername,
    password: reqPassword,
  };

  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  };

  fetch(url, reqOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.pesanError == null) {
        alert("Login Sukses boss");
      } else {
        alert("Login gagal");
      }
    });
}
