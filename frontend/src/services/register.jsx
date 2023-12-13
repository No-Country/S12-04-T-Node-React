// const backURL = "https://chefgtp.onrender.com";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export const sendNewUser = (data) => {
  Loading.circle("Creando usuario");
  const requestOptions = {
    method: "POST",
    //  headers: { "Content-Type": "application/json" },
    //  body: JSON.stringify(data),
    body: data,
  };
  const sendUser = fetch(
    "https://chefgtp.onrender.com/api/user/register",
    requestOptions
  ).then((response) => {
    Loading.remove();
    return response.json();
  });
  return sendUser;
};
