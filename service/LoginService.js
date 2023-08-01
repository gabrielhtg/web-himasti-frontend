export default async function loginService(username, password) {
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

  const test = await fetch(url, reqOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error == false) {
        localStorage.setItem("username", username);
        localStorage.setItem("token", data.data);

        console.log("Ini adalah username " + localStorage.getItem("username"));
        console.log("Ini adalah token " + localStorage.getItem("token"));
        return true;
      } else {
        return false;
      }
    });

  return test;
}
