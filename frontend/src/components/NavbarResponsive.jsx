import { Link, useNavigate } from "react-router-dom";
// import hatLogo from "../assets/images/hat-logo.svg";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { useAuthStore } from "../store/auth";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function NavbarResponsive() {
  const [isOpen, setIsOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="sm:hidden absolute top-3 left-0 w-full z-10">
        <div className="flex relative">
          <div className="absolute left-1 top-1 px-3 py-2 rounded-2xl bg-opacity-50 backdrop-filter backdrop-blur-md bg-red-600 shadow-lg shadow-slate-500">
            {isOpen ? (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-2"
              >
                {/* <img className="h-full w-auto" src={hatLogo} alt="Logo App" /> */}
                <IoMdClose className="h-6 w-6 text-white" />
                <h1 className="text-white">Chef GPT</h1>
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-2"
              >
                {/* <img className="h-full w-auto" src={hatLogo} alt="Logo App" /> */}
                <RxHamburgerMenu className="h-6 w-6 text-white" />
                <h1 className="text-white">Chef GPT</h1>
              </button>
            )}
          </div>
          {isOpen && token && (
            <div className="animate-fade-right bg-opacity-50 backdrop-filter backdrop-blur-md bg-red-600 shadow-lg shadow-slate-500 w-72 h-[600px] text-white absolute top-20 rounded-md">
              <ul className="flex flex-col gap-8 mt-8 ml-8">
                <li className="font-medium hover:text-yellow-300">
                  <Link to="/">Mi perfil</Link>
                </li>
                <li className="font-medium hover:text-yellow-300">
                  <Link to="/favorites">Mis recetas</Link>
                </li>
                <li className="font-medium hover:text-yellow-300">
                  <button onClick={handleLogout}>Cerrar sesion</button>
                </li>
              </ul>
            </div>
          )}
          {isOpen && !token && (
            <div className="animate-fade-right bg-opacity-50 backdrop-filter backdrop-blur-md bg-red-600 shadow-lg shadow-slate-500 w-72 h-[600px] text-white absolute top-20 rounded-md">
              <ul className="flex flex-col gap-8 mt-8 ml-8">
                <li className="font-medium hover:text-yellow-300">
                  <Link to="/auth">Iniciar sesion</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
