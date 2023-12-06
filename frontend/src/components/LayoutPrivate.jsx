import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStore} from '../store/auth'

const LayoutPrivate = () => {

  const token = useAuthStore((state) => state.token)
  
  return (
    <div>{token ? <Outlet /> : <Navigate to="/auth" />}</div>
  )
}

export default LayoutPrivate