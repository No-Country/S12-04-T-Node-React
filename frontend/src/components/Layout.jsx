import { Outlet, useLocation } from "react-router-dom";
import NavbarResponsive from "./NavbarResponsive";
import { Navbar } from "./Navbar";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="container-fluid relative">
      {location.pathname === "/" ? <NavbarResponsive /> : <Navbar />}
      <Outlet />

      {/* ACA PODRIA IR EL FOOTER */}

      {/* <div>
          <Footer />
          </div> */}
    </div>
  );
};

export default Layout;
