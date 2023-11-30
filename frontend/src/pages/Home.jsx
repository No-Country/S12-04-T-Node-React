import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <div
        className={`bg-cover bg-center h-screen flex items-center justify-center bg-[url('/src/assets/images/header-img.jpg')]`}
      >
        {/* Contenedor con blur */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="bg-opacity-25 backdrop-filter sm:pb-5 backdrop-blur-md px-5 text-[1.782rem]  text-white text-center  rounded-[1rem] sm:rounded-[2.5rem] bg-gray-950 shadow-lg shadow-gray-950/50">
            <h1 className=" sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              ¡Conversa con el chef!
            </h1>
          </div>
          <button className="bg-red-900 shadow-lg shadow-red-900/50 rounded-full flex items-center">
            <Link to="chat" className="shadow-cyan-500/50 flex items-center">
              <p className="text-center text-white text-base text-[0.652rem] sm:text-lg md:text-xl lg:text-2xl px-3 py-1 rounded-full font-[500]">
                Cocina con lo tengas en el momento
              </p>
              {/* <GiClick className="text-white" size={40} /> */}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
