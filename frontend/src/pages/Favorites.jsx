import { useState, useEffect } from "react";
import useRecipeStore from "../store/useRecipeStore";
import FavoriteCard from "../components/FavoriteCard";

const Favorites = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  
  const [all, setAll] = useState([]);
  

  let categorias = ["Desayuno", "Almuerzo", "Cena", "Merienda", "Todas"];

  function handleCategory(e) {
    // console.log(e.target.value)
    // setSeleccionadas([...seleccionadas,null])

        switch (e.target.value) {
          case "Todas":
            setAll(favorites);
            break;
          case 'Desayuno':
            setAll(favorites.filter(favory => favory.category === 'Desayuno' && favory));
            
            break;
          case 'Almuerzo':
            setAll(favorites.filter(favory => favory.category === 'Almuerzo' && favory));
            break;
          case 'Cena':
            setAll(favorites.filter(favory => favory.category === 'Cena' && favory));
            break;
          case 'Merienda':
            setAll(favorites.filter(favory => favory.category === 'Merienda' && favory));
            break;
          default:
            return 'No hay recetas guardadas en esta categoria';  
        }
          
    }
  //   if (e.target.value === "Todas") {      
  //     setAll(favorites);
  //   }else{       
  //     const select = favorites.filter(favory => favory.category === e.target.value && favory )
  //     setAll(select);
  //   }
    
  
  useEffect(() => {
      setAll(favorites);
  }, []);  

  return (
    <div className="max-w-screen-2xl mx-48 px-4">
      <header className="flex flex-col justify-center items-center pt-32 gap-20">
        {favorites.length > 0 ? (
          <h1 className="text-6xl font-bold">Recetas guardadas</h1>
        ) : (
          <h1 className="text-6xl font-bold">No tienes recetas guardadas</h1>
        )}
        <div className=" w-full">
          <select className="bg-[#F9E9E7] border  border-[#8C1407] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3" onChange={handleCategory}>
            <option  disabled defaultValue="" selected className='font-bold' >Categorias
            </option>
            {categorias.map((categoria,index) => (
                <option key={index} value={categoria} className='font-bold'>{categoria}</option>           
            ))}
          </select>
        </div>

        {
        all.length === 0? 'No hay recetas guardadas': all.map((favory, index) => (
              <FavoriteCard
                  key={index}
                  title={favory.title}
                  category={favory.category}
                  recipe={favory.recipe}
                />
            ))
          }
        
      </header>
    </div>
  );
};

export default Favorites;
