import { Redirect } from "react-router-dom";
import Inicio from "../../views/inicio/index";

const datosRoutes = [
  {
    id: 0,
    path: "/inicio",
    exact: true,
    component: Inicio,
  },
  {
    id: 1,
    path: "/listproperties",
    exact: true,
    // component: vista2,
  },
  {
    id: 2,
    path: "/detailsproperty",
    // component: vista3,
  },
  {
    id: 3,
    path: "/",
    exact: true,
    component: () => <Redirect to="/inicio" />,
  },
];

export default datosRoutes;
