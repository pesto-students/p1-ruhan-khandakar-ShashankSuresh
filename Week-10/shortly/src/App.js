import { useMemo } from "react";
import { useRoutes } from "react-router-dom";

import Layout from "components/Layout/Layout";
import SuspenseComponent from "components/Common/SuspenseComponent";

import "./App.css";
import routeList from "RouteList";

const getAllRoutes = () =>
  routeList.map((route) => ({
    path: route.path,
    element: <SuspenseComponent>{route.component}</SuspenseComponent>,
  }));

function App() {
  const routes = useMemo(() => getAllRoutes(), []);
  const elements = useRoutes(routes);
  return <Layout>{elements}</Layout>;
}

export default App;
