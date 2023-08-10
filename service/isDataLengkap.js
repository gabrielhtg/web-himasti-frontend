import DataAPI from "./DataAPI";

export default async function isDataLengkap() {
  const dataapi = new DataAPI();

  let url = dataapi.url + "/api/himasti/user/is-data-lengkap";

  let request = await fetch(url, {
    method: "GET",
    headers: {
      username: localStorage.getItem("username"),
    },
  });

  let data = await request.json();

  if (data.error == false) {
    return true;
  } else {
    return false;
  }
}
