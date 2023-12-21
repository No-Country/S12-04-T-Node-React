import axios from "axios";
import { Loading } from "notiflix/build/notiflix-loading-aio";

export const chatService = async (message) => {
  Loading.pulse();
  const { data } = await axios.post(
    "https://s12-04-t-node-react-production.up.railway.app/message",
    { message }
  );
  try {
    return data.message;
  } catch (error) {
    console.log(error);
  }
};
