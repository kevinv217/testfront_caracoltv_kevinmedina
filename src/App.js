import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import _ from "lodash";


//import routes from "./config/routes/routes";
import routes from "./config/routes/routes";

import Contenido from "./config/layout/Contenido";
// import Search from "./modules/search/forma";

export default function App() {
  let Menu = (
    <Router>
      <Contenido>
        {React.Children.toArray(
          _.map(routes, (route, index) => {
            return (
              <>
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              </>
            );
          })
        )}
      </Contenido>
    </Router>
  );

  return Menu;
}
