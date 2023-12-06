// const backURL = "https://chefgtp.onrender.com";
export const sendNewUser = (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch("https://chefgtp.onrender.com/api/user/register", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
