// import { useState } from "react";
import Group8 from "../assets/images/Group8.svg";
const Register = () => {
  // const {user,SetUser} = useState({})
  function sendUser(e) {
    console.log(e);
  }
  return (
    <>
      <form
        onSubmit={sendUser}
        className="flex flex-col mt-16  justify-center items-center "
      >
        <img src={Group8} alt="logo" className="mt-4" />
        <div className="flex gap-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            {/* Nombre */}
            <label className="form-control w-full max-w-xs ml-4 mt-4">
              <div className="label">
                <span className="label-text">Nombre</span>
              </div>
              <input
                type="text"
                placeholder="Jhon"
                className="input  input-bordered bg-[#76787675] w-full max-w-xs "
              />
            </label>
            {/* Apellido */}
            <label className="form-control w-full max-w-xs ml-4 mt-4">
              <div className="label">
                <span className="label-text">Apellido</span>
              </div>
              <input
                type="text"
                placeholder="Doe"
                className="input bg-[#76787675] input-bordered w-full max-w-xs "
              />
            </label>
            {/* Correo Electronico */}
            <label className="form-control w-full max-w-xs ml-4 mt-4">
              <div className="label">
                <span className="label-text">Correo Electronico</span>
              </div>
              <input
                type="text"
                placeholder="Jhon_Doe@gmail.com"
                className="input bg-[#76787675] input-bordered w-full max-w-xs "
              />
            </label>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* Telefono */}
            <label className="form-control w-full max-w-xs ml-4 mt-4">
              <div className="label">
                <span className="label-text">Telefono</span>
              </div>
              <input
                type="text"
                placeholder="+000 00000000"
                className="input bg-[#76787675] input-bordered w-full max-w-xs "
              />
            </label>
            {/* Contraseña */}
            <label className="form-control w-full max-w-xs ml-4 mt-4">
              <div className="label">
                <span className="label-text">Contraseña</span>
              </div>
              <input
                type="text"
                placeholder="**********"
                className="input bg-[#76787675] input-bordered w-full max-w-xs "
              />
            </label>
            {/* Confirmar contraseña */}
            <label className="form-control w-full max-w-xs ml-4 mt-4">
              <div className="label">
                <span className="label-text">Confirmar contraseña</span>
              </div>
              <input
                type="text"
                placeholder="**********"
                className="input bg-[#76787675] input-bordered w-full max-w-xs "
              />
            </label>
          </div>
        </div>
        <button
          className="w-64 p-4 mt-4 bg-red-800 rounded-full text-white"
          onSubmit={sendUser}
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default Register;
