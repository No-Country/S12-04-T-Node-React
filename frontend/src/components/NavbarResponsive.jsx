import { Link, useNavigate } from "react-router-dom";
import hatLogo from "../assets/images/hat-logo.svg";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { useAuthStore } from "../store/auth";

export default function NavbarResponsive() {
  const [isOpen, setIsOpen] = useState(false);
  const logout = useAuthStore(state => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/auth")
  }

  return (
    <>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="sm:hidden absolute top-3 left-0 w-full z-10">
        <div className="flex relative">
          <div className="absolute left-1 top-1 px-3 py-2 rounded-2xl bg-opacity-50 backdrop-filter backdrop-blur-md bg-red-600 shadow-lg shadow-slate-500">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 p-2"
            >
              <img className="h-full w-auto" src={hatLogo} alt="Logo App" />
              <h1 className="text-white">Chef GPT</h1>
            </button>
          </div>
          {isOpen && (
            <div className="bg-opacity-50 backdrop-filter backdrop-blur-md bg-red-600 shadow-lg shadow-slate-500 w-72 h-[760px] text-white absolute top-20 rounded-md">
              <ul className="flex flex-col gap-8 mt-8 ml-8">
                <li>
                  <Link to="/">Mi perfil</Link>
                </li>
                <li>
                  <Link to="/favorites">Mis recetas</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Cerrar sesion</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
