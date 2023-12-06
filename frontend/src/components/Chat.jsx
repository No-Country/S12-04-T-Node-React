import { Link } from "react-router-dom";
import { useState } from "react";
import response from "../mockup/response.json";
import { useFormik } from "formik";
import * as Yup from "yup";

const Chat = () => {

  const [ingredients, setIngredients] = useState("");
  const [option, setOption] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOption(true);
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required("Ingresa algún ingrediente!").min(3, "Mínimo 3 caracteres")
      .max(100, "Máximo 100 caracteres"),
    }),
    onSubmit: (values) => {
      setIngredients(values.message);
    },
  });

  return (
    <div className="flex flex-col w-[80rem] sm:w-[60rem] h-screen gap-10 mx-2 font-medium text-lg">
      <div className="chat chat-start mt-24">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="bot.png" />
          </div>
        </div>
        <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
          <p>Hola, dime que ingredientes tienes!</p>
        </div>
      </div>
      {ingredients && (
        <div className="flex flex-col">
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
              <p>{response.instructions}</p>
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
                onClick={handleClick}
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
              <p>{response.optional}</p>
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
                onClick={handleClick}
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
          className="flex gap-2 w-[90%] sm:w-[60%] mx-4 fixed bottom-12"
        >
          <input
            onChange={handleChange}
            name="message"
            type="text"
            placeholder="Escribe lo que tienes en la heladera"
            className="input border-2 border-slate-400 rounded-2xl w-full"
          />
          <button type="submit" className={errors.message ? 'hidden' : "absolute right-2 mt-3 "}>
            <img src="/enviar.png" alt="button" />
          </button>
        </form>
      ) : (
        ""
      )}
      {errors && errors.message ? (
        <p className="text-red-500 text-md fixed bottom-4 ms-6">{errors.message}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
