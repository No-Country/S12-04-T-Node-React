import { useState } from "react";
import SharedButton from "./SharedButton";
import { IoShareSocialSharp } from "react-icons/io5";

const Description = () => {
  const [phone, setPhone] = useState("");
  const [showInput, setShowInput] = useState(false);
  console.log(showInput);

  //CAMBIAR TEXT POR EL CONTENIDO DE LA RECETA Y EL PHONE LO TENDRIA Q AGREGAR EL USUARIO CON UN INPUT?
  const text = "Receta: tomate, papas y lechuga";

  const handleClick = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="flex flex-col gap-4 items-center sm:m-12 bg-[#F8FAFA]">
      <img
        className="w-[50%] sm:w-[15%] mt-16 sm:mt-8"
        src="/chefGpt.gif"
        alt="plato"
      />
      <div className="flex flex-col gap-4 w-[60%] sm:shadow-2xl sm:shadow-slate-600 sm:rounded-2xl  sm:p-8">
        <h1 className="text-2xl font-bold">Nombre del Plato</h1>
        <h4 className="font-semibold">Descripción</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          doloremque, animi id perspiciatis est eligendi sunt omnis fuga vel
          aperiam ratione. Qui velit earum debitis.
        </p>
        <h4 className="font-semibold">Ingredientes:</h4>
        <div>Tomate-Papas-Lechuga</div>
        <h4 className="font-semibold">Instrucciones</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          consequatur numquam? Dolore inventore incidunt nam. Tenetur, ad earum.
          Mollitia perspiciatis quos eos consequuntur blanditiis similique ipsam
          molestias possimus inventore ipsa quia minus magnam numquam quisquam,
          ex natus enim nisi architecto.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus totam
          reiciendis hic perspiciatis beatae quam delectus quidem! Architecto
          molestiae, minima fuga consectetur quis aliquid amet tenetur ipsam
          tempore a! Unde animi perspiciatis corporis explicabo tempora illum
          consequuntur nisi alias sapiente.
        </p>
      </div>
      <div className="my-8 sm:ml-[600px]">
        {showInput ? (
          ""
        ) : (
          <button onClick={handleClick} title="Compartir por WhatsApp!">
            <IoShareSocialSharp className="w-8 h-8" />
          </button>
        )}
        {showInput ? (
          <form className="flex relative mb-8">
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="1123456789"
              className="input input-bordered w-full rounded-full"
            />
            <SharedButton text={text} phone={phone} />
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Description;
