import SharedButton from "./SharedButton";
// import response from "../mockup/response.json";
import useRecipeStore from "../store/useRecipeStore";
import { useAuthStore } from "../store/auth";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { FaRegBookmark } from "react-icons/fa6";

const Description = () => {
  const addToFavorites = useRecipeStore((state) => state.addToFavorites);
  const recipe = useRecipeStore((state) => state.recipe);
  const modal = useRecipeStore((state) => state.modal);
  const openModal = useRecipeStore((state) => state.openModal);
  const closeModal = useRecipeStore((state) => state.closeModal);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    if (token) {
      openModal();
    } else {
      navigate("/auth");
    }
  };

  const handleSubmit = () => {
    addToFavorites({
      title: modal.title,
      category: modal.category,
      recipe: recipe,
    });
    closeModal();
    navigate("/favorites");
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-[#F8FAFA]">
      <img
        className="w-[50%] sm:w-[15%] mt-24 animate-bounce"
        src="/chefGpt.gif"
        alt="plato"
      />
      <div className="flex flex-col gap-2 divide-y divide-slate-400 bg-[#F9E9E7] text-slate-800 w-5/6 sm:shadow-2xl border-2 border-slate-300 sm:shadow-slate-600 rounded-2xl p-4 sm:p-8">
        <h1 className="text-2xl text-center ">Disfruta tu receta</h1>
        <p className="font-sans font-semibold">{recipe}</p>
      </div>

      <div className="flex justify-between gap-8 mt-8 mb-4">
        <SharedButton text={recipe} />
        <button
          onClick={handleAddToFavorites}
          disabled={!token}
          className="btn sm:btn-wide bg-red-600 text-lg text-slate-50"
        >
          Guardar
          <FaRegBookmark className="w-5 h-5" />
        </button>
      </div>
      {!token && (
        <span className="my-4 font-semibold text-sm sm:text-lg">
          * Para guardar tus recetas favoritas{" "}
          <Link className="text-green-600 hover:text-green-400" to="/auth">
            inicia sesión
          </Link>
        </span>
      )}
      <Modal isOpen={modal.isOpen} onSubmit={handleSubmit} />
    </div>
  );
};

export default Description;
