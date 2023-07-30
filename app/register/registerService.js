export default function registerService(
  token,
  username,
  password,
  firstName,
  lastName
) {
  const url = "http://192.168.43.201:8080/api/himasti/user/register";

  console.log(password);
  const reqData = {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      TOKEN: token,
    },
    body: JSON.stringify(reqData),
  };

  fetch(url, reqOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error == false) {
        alert("Register Sukses boss");
      } else {
        alert("Register gagal boss");
      }
      window.location.reload();
    });
}
