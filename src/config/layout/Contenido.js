import React from "react";

import NavSuperior from "../../modules/navSuperior/NavSuperior";
// import Footer from "../../modules/footer/Footers";

const Contenido = ({ children, noNavbar, noFooter }) => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row position-relative">
          <div className="col-md-12 m-0 contenido p-0">
            <div className="row w-100 m-0">
              {!noNavbar && <NavSuperior />}
              <div className="child col-md-12 p-0 mx-0">{children}</div>
              {/* {!noFooter && <Footer />} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contenido;
