import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import NavbarResponsive from "./NavbarResponsive";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="container-fluid relative">
      {location.pathname === "/" ? <NavbarResponsive /> : <Navigation />}
      <Outlet />

      {/* ACA PODRIA IR EL FOOTER */}

      {/* <div>
          <Footer />
          </div> */}
    </div>
  );
};

export default Layout;
