/* Importación de hooks o componentes de react */
import { Fragment, useEffect, useState } from "react";

/* Importaciones de bibliotecas terceros */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

/* Importaciones de imágenes */
import hatLogo from "../assets/images/hat-logo.svg"
import profile from "../assets/images/profile-exam.svg"

/* Arreglo de los los links + propiedad current (si está activa la vista para estilos personalizados) */
const navigation = [
  { name: "Inicio", link: "/", current: false },
  { name: "Chat", link: "/chat", current: false },
  { name: "Ingreso", link: "/signin", current: false },
  { name: "Registro", link: "/signup", current: false },
];


/* Clases dinámicas perfil usuario */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ||| COMPONENTE NAVBAR ||| */
export const Navigation = () => {
  const location = useLocation(); // ubicación actual
  const [navItems, setNavItems] = useState(navigation);
  const navigate = useNavigate();

  useEffect(() => {
    // Actualiza el estado de activación basado en la ubicación actual
    setNavItems((prevNavItems) =>
      prevNavItems.map((item) => ({
        ...item,
        isActive: location.pathname === item.link,
      }))
    );
  }, [location.pathname]);

  // Función navegación a favoritos
  const onNavigate = () => {
    navigate("/favoritos")
  }

  /* || JSX || */
  return (
    <Disclosure as="nav" className="bg-slate-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Botón menú celular */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center gap-10">
                  {/* LOGO APP */}
                  <div>
                    <Link to="/" className="flex flex-col">
                      <img
                        className="h-8 w-auto"
                        src={hatLogo}
                        alt="Logo App"
                      />
                      <h1 className="text-white">¿Qué comemos hoy?</h1>
                    </Link>
                  </div>
                  {/* NAV LINKS */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          className={`text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                            item.isActive ? "bg-gray-900 text-white" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/*  */}
                <button
                  onClick={ onNavigate }
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <HeartIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={profile}
                        alt=""
                      />
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
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Configuraciones
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Cerrar sesión
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
