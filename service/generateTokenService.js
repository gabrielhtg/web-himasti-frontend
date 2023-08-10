import DataAPI from "./DataAPI";

export default async function generateToken(lamaToken) {
  const dataapi = new DataAPI();

  let url = dataapi.url + "/api/himasti/registerToken/generate";

  let response = await fetch(url, {
    method: "GET",
    headers: {
      username: localStorage.getItem("username"),
      durasi: lamaToken,
    },
  });
}
