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

  let test = await fetch(url, reqOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.error == false) {
        return true;
      } else {
        return false;
      }
    });

  return test;
}

// export default async function loginService(username, password) {
//   const url = "http://192.168.43.201:8080/api/himasti/auth/login";

//   const reqData = {
//     username: username,
//     password: password,
//   };

//   const reqOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(reqData),
//   };

//   try {
//     const response = await fetch(url, reqOptions);
//     const data = await response.json();

//     console.log(data);
//     if (data.error === false) {
//       console.log("login berhasil");
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return false;
//   }
// }
