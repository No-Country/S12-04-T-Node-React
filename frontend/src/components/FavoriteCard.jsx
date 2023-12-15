import lapiz from "../assets/images/lapiz.svg";
import tacho from "../assets/images/tacho.svg";
import useRecipeStore from "../store/useRecipeStore";

function FavoriteCard({ title, recipe, category }) {
  const deleteFavorite = useRecipeStore((state) => state.deleteFavorite);
  function deleteRecipe() {
    deleteFavorite(title);
  }
  function editRecipe() {}

  return (
    <div
      className={
        category +
        " bg-[#D9D9D9] border-rounded rounded ps-7 py-5 mb-4 relative"
      }
    >
      <div className="flex absolute top-5 right-5 gap-5">
        <img
          src={lapiz}
          className="hover:cursor-pointer"
          onClick={editRecipe}
          alt="Editar"
        />
        <img
          src={tacho}
          className="hover:cursor-pointer"
          onClick={deleteRecipe}
          alt="Eliminar"
        />
      </div>

      <div>
        <h2 className="card-title" style={{ textTransform: "capitalize" }}>
          {title}
        </h2>
        <p>{category}</p>
        <p>{recipe}</p>
      </div>
    </div>
  );
}

export default FavoriteCard;
