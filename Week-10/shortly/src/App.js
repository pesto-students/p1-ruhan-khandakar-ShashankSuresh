import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "components/Layout/Layout";
import SuspenseComponent from "components/Common/SuspenseComponent";

import "./App.css";

const Home = lazy(() => import("pages/Home"));
const AboutUs = lazy(() => import("pages/AboutUs"));
const Pricing = lazy(() => import("pages/Pricing"));
const NotFoundPage = lazy(() => import("pages/404"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <SuspenseComponent>
              <Home />
            </SuspenseComponent>
          }
        />
        <Route
          path="/about-us"
          element={
            <SuspenseComponent>
              <AboutUs />
            </SuspenseComponent>
          }
        />
        <Route
          path="/pricing"
          element={
            <SuspenseComponent>
              <Pricing />
            </SuspenseComponent>
          }
        />
        <Route
          path="*"
          element={
            <SuspenseComponent>
              <NotFoundPage />
            </SuspenseComponent>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
