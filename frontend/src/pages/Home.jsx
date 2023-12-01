import { Link } from "react-router-dom";
import { ImBubbles2 } from "react-icons/im";


const Home = () => {
  return (
    <>
      <div
        className={`bg-cover bg-center h-screen flex items-center justify-center bg-[url('/src/assets/images/header-img.jpg')]`}
      >
        {/* Contenedor con blur */}
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <div className="bg-opacity-40 backdrop-filter sm:pb-5 backdrop-blur-sm xl:backdrop-blur-md px-2 text-[1.782rem]  text-white text-center  rounded-[1rem] sm:rounded-[2.5rem] bg-black xl:bg-gray-800/30 shadow-lg shadow-gray-950/50 flex flex-col gap-0 items-center justify-center sm:pt-2 sm:px-3 md:px-2 xl:px-7 xl:rounded-full">
            <h1 className="text-[1.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              ¡Conversa con el chef!
            </h1>
            <p className="text-center text-white text-base text-[0.73rem] sm:text-lg md:text-xl lg:text-2xl font-bold">
              Cocina con lo tengas en el momento
            </p>
          </div>
        </div>
        <button className="bg-red-900 shadow-md shadow-white xl:shadow-black xl:shadow-xl rounded-md xl:rounded-2xl flex items-center justify-center absolute bottom-4 w-60 sm:w-96 xl:bottom-14 xl:w-[20rem]">
          <Link
            to="chat"
            className="flex items-center text-white gap-2 py-[0.5rem] sm:py-[0.6rem] font-semibold text-xs xl:text-3xl"
          >
            Chatea con Goofy <ImBubbles2 className="text-white" size={20} />
          </Link>
        </button>
      </div>
    </>
  );
};

export default Home;
