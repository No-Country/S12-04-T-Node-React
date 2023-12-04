import SharedButton from "./SharedButton";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import response from "../mockup/response.json";

const Description = () => {

  return (
    <div className="flex flex-col gap-4 items-center sm:m-12 bg-[#F8FAFA]">
      <img
        className="w-[50%] sm:w-[15%] mt-16 sm:mt-8"
        src="/chefGpt.gif"
        alt="plato"
      />
      <div className="flex flex-col gap-4 w-[60%] sm:shadow-2xl sm:shadow-slate-600 sm:rounded-2xl  sm:p-8">
        <h1 className="text-2xl font-bold">{response.title}</h1>
        <h4 className="font-semibold">Descripción</h4>
        <p>{response.description}</p>
        <h4 className="font-semibold">Ingredientes:</h4>
        <p>{response.ingredients}</p>
        <h4 className="font-semibold">Instrucciones</h4>
        <p>{response.instructions}</p>
      </div>
      <div className="flex sm:gap-8 my-8">
        <SharedButton text={response.title + ':' + response.instructions} />
        <Link to="/favorites" className="btn sm:btn-wide bg-red-600 text-lg  text-slate-50">
          Favoritos
          <FaHeart className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Description;
