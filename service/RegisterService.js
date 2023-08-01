export default async function registerService(token, username, password, nama) {
  const url = "http://192.168.43.201:8080/api/himasti/user/register";

  const pecahNama = nama.split(" ");
  const reqData = {
    username: username,
    password: password,
    firstName: pecahNama[0],
    lastName: pecahNama[1],
  };

  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      TOKEN: token,
    },
    body: JSON.stringify(reqData),
  };

  let fetchApi = await fetch(url, reqOptions);
  let dataApi = await fetchApi.json();

  return dataApi;
}