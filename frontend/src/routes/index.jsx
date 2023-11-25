import {createBrowserRouter} from 'react-router-dom'
// Rutas del front 
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ChatBot from '../pages/ChatBot'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/signin',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Register/>
  },
  {
    path: '/chat',
    element: <ChatBot/>
  }
])