/* Importación de hooks o componentes de react */
import { Fragment } from "react";

/* Importaciones de bibliotecas terceros */
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {useAuthStore} from '../store/auth'
import {useNavigate} from 'react-router-dom'

/* Importaciones de imágenes */
import hatLogo from "../assets/images/hat-logo.svg";
import userLogo from "../assets/images/user-logo.svg";
import userProphile from "../assets/images/profile-exam.svg"

/* Clases dinámicas perfil usuario */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ||| COMPONENTE NAVBAR ||| */
export const Navigation = () => {

const logout = useAuthStore(state => state.logout)
const token = useAuthStore(state => state.token)
const navigate = useNavigate()

const handleLogout = () => {
  logout();
  navigate("/")
}

  /* || JSX || */
  return (
    <Disclosure
      as="nav"
      className="bg-red-900 fixed z-10 top-0 w-full shadow-md shadow-slate-500/50"
    >
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 ">
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                {/* Logo, no se reduce en tamaño */}
                <div className="flex flex-shrink-0 items-center gap-10">
                  <button className="">
                    <Link to="/" className="flex items-center gap-1">
                      <img
                        className="h-8 w-auto"
                        src={hatLogo}
                        alt="Logo App"
                      />
                      <h1 className="text-white xl:text-lg">Chef GPT</h1>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Desplegable de opciones de usuarios */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <Link to="/auth">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                      {
                        !token && (
                          <img
                          className="h-10 w-10 rounded-full"
                          src={userLogo}
                          alt=""
                        />
                        )
                      }
                      </Link>
                    </Menu.Button>
                  </div>
                </Menu>
                {/* Usuario conectado */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                    {
                      token && (
                        <img
                        className="h-10 w-10 rounded-full"
                        src={userProphile}
                        alt=""
                      />
                      )
                    }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Mi perfil
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/favorites"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Mis recetas
                          </a>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Configuraciones
                          </a>
                        )}
                      </Menu.Item> */}
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Cerrar sesión
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};
