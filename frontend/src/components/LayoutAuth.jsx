import { Outlet } from "react-router-dom";


const LayoutAuth = () => {

  return (
    <div className="container-fluid relative">
      <Outlet />

      {/* ACA PODRIA IR EL FOOTER */}

      {/* <div>
          <Footer />
          </div> */}
    </div>
  );
};

export default LayoutAuth;
