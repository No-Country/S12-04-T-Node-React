import SharedButton from "./SharedButton";
import { FaHeart } from "react-icons/fa";
import response from "../mockup/response.json";
import useRecipeStore from "../store/useRecipeStore";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";

const Description = () => {
  const addToFavorites = useRecipeStore((state) => state.addToFavorites);
  const token = useAuthStore((state) => state.token);
  const username = useAuthStore((state) => state.username);
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    if (token) {
      Confirm.prompt(
        `Hola ${username}`,
        "Elige el nombre de la receta!",
        "",
        "Guardar",
        "Cancelar",
        (data) => {
          addToFavorites({
            title: data,
          });
          console.log("receta guardada!");
        },
        () => {
          console.log("cancelar!");
        },
        {
          backgroundColor: "#D9D9D9",
          titleColor: "#000000",
          okButtonBackground: "#8C1407",
        }
      );
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-[#F8FAFA]">
      <img
        className="w-[50%] sm:w-[15%] mt-24 sm:mt-20"
        src="/chefGpt.gif"
        alt="plato"
      />
      <div className="flex flex-col gap-4 w-[60%] sm:shadow-2xl sm:shadow-slate-600 sm:rounded-2xl  sm:p-8">
        <h1 className="text-2xl font-bold">{response.title}</h1>
        <h4 className="font-semibold">Descripción</h4>
        <p>{response.description}</p>
        <h4 className="font-semibold">Ingredientes:</h4>
        <p>{response.ingredients}</p>
        <h4 className="font-semibold">Instrucciones</h4>
        <p>{response.instructions}</p>
      </div>
      <div className="flex justify-between gap-8 my-8">
        <SharedButton text={response.title + ":" + response.instructions} />
        <button
          onClick={handleAddToFavorites}
          className="btn sm:btn-wide bg-red-600 text-lg text-slate-50"
        >
          Me gusta
          <FaHeart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Description;
