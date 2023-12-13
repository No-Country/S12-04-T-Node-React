import useRecipeStore from "../store/useRecipeStore";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  console.log(favorites);

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <header className="flex flex-col justify-center items-center pt-32 gap-20">
        {favorites.length > 0 ? (
          <h1 className="text-6xl font-bold">Recetas guardadas</h1>
        ) : (
          <h1 className="text-6xl font-bold">No tienes recetas guardadas</h1>
        )}

        <div className="flex flex-wrap -mx-5 my-5">
          {favorites &&
            favorites.map((favorite, index) => (
              <FavoriteCard
                key={index}
                img="https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2022/11/1140-box-of-recipe-cards-esp.jpg"
                title={favorite.title}
              />
            ))}
        </div>
      </header>
    </div>
  );
};

export default Favorites;
