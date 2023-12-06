import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChatBot from "../pages/ChatBot";
import Layout from "../components/Layout";
import NotFound from "../pages/NotFound";
import Recipe from "../pages/Recipe";
import LayoutAuth from "../components/LayoutAuth";
import Favorites from "../pages/Favorites";
import LayoutPrivate from "../components/LayoutPrivate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <ChatBot />,
      },
      {
        path: "/recipe",
        element: <Recipe />,
      },
    ],
  },
  {
    path: "/auth/",
    element: <LayoutAuth />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register", // Usando ruta relativa
        element: <Register />,
      },
    ],
  },
  {
    path: "/favorites", // Ruta para guardar recetas si esta logueado
    element: <LayoutPrivate />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
