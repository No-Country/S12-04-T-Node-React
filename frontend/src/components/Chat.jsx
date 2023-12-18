import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import response from "../mockup/response.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../store/auth";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { chatService } from "../services/chat";
import useRecipeStore from "../store/useRecipeStore";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import axios from "axios";
import ScrollButton from "./ScrollButton";


const Chat = () => {
  const username = useAuthStore((state) => state.username);
  const setRecipe = useRecipeStore((state) => state.setRecipe);
  const recipe = useRecipeStore((state) => state.recipe);

  const [ingredients, setIngredients] = useState(null);
  const [option, setOption] = useState(false);

  useEffect(() => {
    const startChat = async () => {
      try {
        const res = await axios.get(
          "https://s12-04-t-node-react-production.up.railway.app/start"
        );
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    startChat();
  }, []);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .required("¡Ingresa algún ingrediente!")
        .min(3, "Mínimo 3 caracteres")
        .max(100, "Máximo 100 caracteres"),
    }),
    onSubmit: async (values) => {
      const data = await chatService(values.message);
      setRecipe(data);
      setIngredients(values.message);
      Loading.remove();
    },
  });

  const handleOption = async () => {
    const data = await chatService(ingredients);
    setOption(data);
    Loading.remove();
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 mx-4 sm:mx-32 h-screen gap-10 font-medium text-lg">
      <div className="chat chat-start mt-40">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="bot.png" />
          </div>
        </div>
        <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
          <p>
            Hola {username ? username : "invitado"}, dime: ¿que ingredientes
            tienes?
          </p>
        </div>
      </div>
      
      {ingredients && (
        <div className="flex flex-col">
          <ScrollButton />
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-12 rounded-full">
                <img alt="avatar" src="/avatar.svg" />
              </div>
            </div>
            <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
              <p>{values.message}</p>
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-16 rounded-full">
                <img alt="avatar" src="bot.png" />
              </div>
            </div>
            <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
              <p> Aqui tienes una receta:</p>
              <br />
              <p>{recipe}</p>
            </div>
          </div>
          <div className="flex flex-col gap-16 my-6">
            <h4 className="font-bold text-2xl mx-auto">
              ¿Te gustó esta receta?
            </h4>
            <div className="flex justify-center gap-2 flex-wrap">
              <Link
                to="/recipe"
                className="btn btn-outline border-red-800 border-2 hover:bg-slate-800 hover:border-slate-50 w-[40%] px-32 col-12 text-xl"
              >
                Si
              </Link>
              <button
                onClick={handleOption}
                className="btn bg-red-800 hover:bg-slate-800 px-32 col-12 w-[40%] text-slate-50 text-xl"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {option && (
        <div className="flex flex-col">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-16 rounded-full">
                <img alt="avatar" src="bot.png" />
              </div>
            </div>
            <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
              <p> Aqui tienes una alternativa:</p>
              <br />
              <p>{option}</p>
            </div>
          </div>
          <div className="flex flex-col gap-16 my-6">
            <h4 className="font-bold text-2xl mx-auto">
              ¿Te gustó esta receta?
            </h4>
            <div className="flex justify-center gap-2 flex-wrap">
              <Link
                to="/recipe"
                className="btn btn-outline border-red-800 border-2 hover:bg-slate-800 hover:border-slate-50 w-[40%] px-32 col-12 text-xl"
              >
                Si
              </Link>
              <button
                onClick={handleOption}
                className="btn bg-red-800 hover:bg-slate-800 px-32 col-12 w-[40%] text-slate-50 text-xl"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {!ingredients ? (
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 w-5/6 sm:w-1/2 mx-4 fixed bottom-12"
        >
          <input
            onChange={handleChange}
            name="message"
            type="text"
            placeholder="Ingresa al menos 3 ingredientes"
            className="input border-2 border-slate-400 rounded-2xl w-full text-sm sm:text-lg"
          />
          <button
            type="submit"
            className={
              errors.message
                ? "hidden"
                : "absolute right-4 hover:right-2 mt-2 text-slate-500 hover:text-sky-600"
            }
          >
            {/* <img src="/enviar.png" alt="button" /> */}
            <MdOutlineArrowForwardIos className="w-8 h-8" />
          </button>
        </form>
      ) : (
        ""
      )}
      {errors && errors.message ? (
        <p className="text-red-500 text-md fixed bottom-4 ms-6">
          {errors.message}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
