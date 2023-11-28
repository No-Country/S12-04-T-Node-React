import {Outlet} from 'react-router-dom'
import { Navigation } from './Navigation'


const Layout = () => {
  return (
    <div className='container-fluid'>
      <div >
        <Navigation />
      </div>
      <Outlet  />
      
      {/* ACA PODRIA IR EL FOOTER */}
      
      {/* <div>
          <Footer />
          </div> */}
    </div>
  )
}

export default Layout