// const backURL = "https://chefgtp.onrender.com";
import { Loading } from "notiflix/build/notiflix-loading-aio";
export const sendNewUser = (data) => {
  Loading.circle("Creando usuario");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch("https://chefgtp.onrender.com/api/user/register", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      Loading.remove();
    });
};
