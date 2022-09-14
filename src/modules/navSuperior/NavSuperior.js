import React from "react";

// import { NavLink } from "react-router-dom";
import _ from "lodash";
import SubMenu from "./SubMenu";

import dataNav from "../../shared/data/test.json";
import OffCanvas from "./OffCanvas";

export default function NavSuperior() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navsuperior p-0">
        <div className="row w-100">
          <div className="col-md-6 col-sm-12 py-3 ps-4 d-flex">
            <OffCanvas itemMenus={dataNav.navigation[0].items} />
            <a className="navbar-brand ms-3" href={dataNav.logo[0].href}>
              <img
                src={dataNav.logo[0].image.src}
                width={dataNav.logo[0].image.width}
                height={dataNav.logo[0].image.height}
                alt={dataNav.logo[0].alt}
              />
            </a>
          </div>
          <SubMenu hotTopics={dataNav.hotTopics} social={dataNav.social} />
        </div>
      </nav>
    </>
  );
}
