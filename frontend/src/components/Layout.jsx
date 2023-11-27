import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
      
      {/* ACA PODRIA IR EL FOOTER */}
      
      {/* <div>
          <Footer />
          </div> */}
    </div>
  )
}

export default Layout