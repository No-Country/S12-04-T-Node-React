import { Link } from "react-router-dom";

const Home = () => {
  const backgroundImage = "url('/src/assets/images/header-img.jpg')";

  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{
          backgroundImage,
          height: "calc(100vh - 80px)", // Calcula la altura restando 80px
        }}
      >
        {/* Contenedor con blur */}
        <Link to="chat">
          <div className="bg-opacity-25 backdrop-filter p--0 backdrop-blur-md p-8  text-white text-center border-4 rounded-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              Conversa con el chef!
            </h1>
            <p className="mt-2 text-left text-base sm:text-lg md:text-xl lg:text-2xl">
              Cocina con lo tengas en el momento
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
