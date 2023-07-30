export default function loginService(username, password) {
  const url = "http://192.168.43.201:8080/api/himasti/auth/login";

  const reqData = {
    username: username,
    password: password,
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
      if (data.error == false) {
        alert("Login Sukses boss");
      } else {
        alert("Login gagal");
      }
    });
}
