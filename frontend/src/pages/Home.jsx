import { Link } from "react-router-dom";

const Home = () => {
  const backgroundImage = "url('/src/assets/images/header-img.jpg')";

  return (
    <>
      <div
        className={`bg-cover bg-center h-screen flex flex-col items-center justify-center relative p-4 `}
        style={{
          backgroundImage,
        }}
      >
        {/* Contenedor con blur */}
        <div className="bg-opacity-25 backdrop-filter p--0 backdrop-blur-md px-5 text-[1.632rem]  text-white text-center  rounded-[1rem] bg-gray-950">
          <h1 className=" sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Conversa con el chef!
          </h1>
        </div>
        <Link to="chat" className="shadow-cyan-500/50 ">
          <p className="mt-2 text-center text-white bg-red-900 text-base text-[0.7rem] sm:text-lg md:text-xl lg:text-2xl px-2 rounded-full font-[500]">
            Cocina con lo tengas en el momento
          </p>
        </Link>
      </div>
    </>
  );
};

export default Home;
