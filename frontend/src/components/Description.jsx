import SharedButton from "./SharedButton";
import { FaHeart } from "react-icons/fa";
// import response from "../mockup/response.json";
import useRecipeStore from "../store/useRecipeStore";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Description = () => {

  const addToFavorites = useRecipeStore((state) => state.addToFavorites);
  const favorites = useRecipeStore((state) => state.favorites);
  console.log(favorites);
  const recipe = useRecipeStore((state) => state.recipe)
  const modal = useRecipeStore((state) => state.modal);
  const openModal = useRecipeStore((state) => state.openModal)
  const closeModal = useRecipeStore((state) => state.closeModal)
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    if (token) {
      openModal()
    } else {
      navigate("/auth");
    }
  };

  const handleSubmit = () => {
    addToFavorites({ title: modal.title, category: modal.category, recipe: recipe });
    closeModal();
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-[#F8FAFA]">
      <img
        className="w-[50%] sm:w-[15%] mt-24 sm:mt-20"
        src="/chefGpt.gif"
        alt="plato"
      />
      <div className="flex flex-col gap-4 w-[60%] sm:shadow-2xl sm:shadow-slate-600 sm:rounded-2xl  sm:p-8">
       <p>{recipe}</p>
      </div>
      <div className="flex justify-between gap-8 my-8">
        <SharedButton text={recipe} />
        <button
          onClick={handleAddToFavorites}
          className="btn sm:btn-wide bg-red-600 text-lg text-slate-50"
        >
          Me gusta
          <FaHeart className="w-5 h-5" />
        </button>
        </div>
        <Modal isOpen={modal.isOpen} onSubmit={handleSubmit} />
    </div>
  );
};

export default Description;
