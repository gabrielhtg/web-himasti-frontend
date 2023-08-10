import DataAPI from "./DataAPI";

export default async function loginService(username, password) {
  const data = new DataAPI();

  let url = data.url + "/api/himasti/auth/login";

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
        return true;
      } else {
        return false;
      }
    });

  return test;
}
