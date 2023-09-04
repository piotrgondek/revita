import { Navigate, createHashRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import { lazy } from "react";
import { SuspenseWrapper } from "./components/SuspenseWrapper";

const RehabilitacjaDzieci = lazy(() => import("./pages/RehabilitacjaDzieci"));
const RehabilitacjaDoroslych = lazy(
  () => import("./pages/RehabilitacjaDoroslych"),
);
const RehabilitacjaDomowa = lazy(() => import("./pages/RehabilitacjaDomowa"));
const Kontakt = lazy(() => import("./pages/Kontakt"));

export default createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "rehabilitacja-dzieci",
        element: <SuspenseWrapper component={RehabilitacjaDzieci} />,
      },
      {
        path: "rehabilitacja-doroslych",
        element: <SuspenseWrapper component={RehabilitacjaDoroslych} />,
      },
      {
        path: "rehabilitacja-domowa",
        element: <SuspenseWrapper component={RehabilitacjaDomowa} />,
      },
      {
        path: "kontakt",
        element: <SuspenseWrapper component={Kontakt} />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
