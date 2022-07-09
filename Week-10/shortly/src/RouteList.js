import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const AboutUs = lazy(() => import("pages/AboutUs"));
const Pricing = lazy(() => import("pages/Pricing"));
const NotFoundPage = lazy(() => import("pages/404"));

const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    path: "/pricing",
    component: <Pricing />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];
export default routes;
