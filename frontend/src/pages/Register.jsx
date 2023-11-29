// import { useState } from "react";
const Register = () => {
  // const {user,SetUser} = useState({})
  function sendUser(e) {
    console.log(e);
  }
  return (
    <form onSubmit={sendUser}>
      {/* Nombre */}
      <label className="form-control w-full max-w-xs ml-4 mt-4">
        <div className="label">
          <span className="label-text">Nombre</span>
        </div>
        <input
          type="text"
          placeholder="Jhon"
          className="input input-bordered w-full max-w-xs "
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
          className="input input-bordered w-full max-w-xs "
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
          className="input input-bordered w-full max-w-xs "
        />
      </label>
      {/* Telefono */}
      <label className="form-control w-full max-w-xs ml-4 mt-4">
        <div className="label">
          <span className="label-text">Telefono</span>
        </div>
        <input
          type="text"
          placeholder="+000 00000000"
          className="input input-bordered w-full max-w-xs "
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
          className="input input-bordered w-full max-w-xs "
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
          className="input input-bordered w-full max-w-xs "
        />
      </label>
      <button
        className="w-24 p-2 mt-8 bg-slate-500 rounded-full"
        onSubmit={sendUser}
      >
        Enviar
      </button>
    </form>
  );
};

export default Register;
