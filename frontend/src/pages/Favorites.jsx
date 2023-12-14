import useRecipeStore from "../store/useRecipeStore";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  console.log(favorites);
  // let categorias = ["Desayuno", "Almuerzo","Cena"];

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <header className="flex flex-col justify-center items-center pt-32 gap-20">
        {favorites.length > 0 ? (
          <h1 className="text-6xl font-bold">Recetas guardadas</h1>
        ) : (
          <h1 className="text-6xl font-bold">No tienes recetas guardadas</h1>
        )}
        <div className=" w-full">
          {/* <select className="bg-[#D9D9D9] border  border-[#8C1407] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3">
            <option value="" disabled defaultValue="" selected className='font-bold'>Categorias
            </option>
            {categorias.map((categoria,index) => (
                <option key={index} value={categoria} className='font-bold'>{categoria}</option>           
            ))}
          </select> */}
        </div>

        <div className="flex flex-col justify-start w-full">
          {favorites &&
            favorites.map((favorite, index) => (
              <FavoriteCard
                key={index}
                title={favorite.title}
                
              />
            ))}
        </div>
      </header>
    </div>
  );
};

export default Favorites;
