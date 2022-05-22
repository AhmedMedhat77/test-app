import React from "react";
import { RouteProps } from "react-router-dom";

const Home = React.lazy(function HomeLazy() {
    return import('../Pages/Home');
})
const globalRoutes: (RouteProps & { key: string })[] = [
  {
    key: "1",
    path: "/",
    element: <Home />,
  },
];

export default globalRoutes;
