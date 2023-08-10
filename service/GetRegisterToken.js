import DataAPI from "./DataAPI";

export default async function getRegisterToken() {
  const dataapi = new DataAPI();

  let url = dataapi.url + "/api/himasti/registerToken/get";

  let response = await fetch(url, {
    method: "GET",
    headers: {
      username: localStorage.getItem("username"),
      token: localStorage.getItem("token"),
    },
  });

  let data = await response.json();

  return data;
}
