import { Link } from "react-router-dom";
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
        className="flex flex-col mt-8  justify-center items-center "
      >
        <img src={Group8} alt="logo" className="w-[11rem] mx-auto " />
        <h1 className="text-4xl mt-4">BIENVENIDO</h1>
        <div className="flex flex-col w-2/5 p-4  gap-5 justify-center items-center scale-90">
          <div className="flex items-center gap-8 w-full hover:cursor-pointer">
            <img src="/imageInsert.png" alt="image" className="object-cover" />
            <h2 className="text-2xl">+ Elige tu foto de perfil</h2>
          </div>
          <input
            style={{ backgroundColor: "rgba(118, 120, 118, 0.46)" }}
            className="bg-[#E0E0E0] border-4 rounded-lg border-[#858585] w-full mx-auto  ps-2 text-lg py-2  placeholder:bolder placeholder:text-black placeholder:text-900"
            type="text"
            placeholder=" Nombre de usuario"
            name="username"
            // value={dataUser.email}
            // onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })}

            autoFocus
          />
          <input
            style={{ backgroundColor: "rgba(118, 120, 118, 0.46)" }}
            className="bg-[#E0E0E0] border-4 rounded-lg border-[#858585] w-full mx-auto  ps-2 text-lg py-2  placeholder:bolder placeholder:text-black placeholder:text-900"
            type="text"
            placeholder="Mail"
            name="username"
            // value={dataUser.email}
            // onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })}

            autoFocus
          />
          <input
            style={{ backgroundColor: "rgba(118, 120, 118, 0.46)" }}
            className="bg-[#E0E0E0] border-4 rounded-lg border-[#858585] w-full mx-auto  ps-2 text-lg py-2  placeholder:bolder placeholder:text-black placeholder:text-900"
            type="text"
            placeholder="Contraseña"
            name="username"
            // value={}
            // onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })}

            autoFocus
          />
          <input
            style={{ backgroundColor: "rgba(118, 120, 118, 0.46)" }}
            className="bg-[#E0E0E0] border-4 rounded-lg border-[#858585] w-full mx-auto  ps-2 text-lg py-2  placeholder:bolder placeholder:text-black placeholder:text-900"
            type="text"
            placeholder="Confirmar Contraseña"
            name="username"
            // value={dataUser.email}
            // onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })}

            autoFocus
          />
          <div className="w-full flex flex-col items-center gap-2">
            <button
              className="w-full text-xl p-4 mt-4 bg-[#8C1407] rounded-full text-white"
              onSubmit={sendUser}
            >
              Registrarse
            </button>
            <h3>¿Ya tienes un usuario? </h3>
            <Link to="/auth" className="underline text-lg">
              <h3>Iniciar sesión</h3>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
