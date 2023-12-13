import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStore} from '../store/auth'
import { Navbar } from './Navbar'

const LayoutPrivate = () => {

  const token = useAuthStore((state) => state.token)
  
  return (
    <div>{token ? (
      <div className="container-fluid relative">
        <Navbar/>
        <Outlet /> 
      </div>
    ) : <Navigate to="/auth" />}</div>
  )
}

export default LayoutPrivate