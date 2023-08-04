import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import RehabilitacjaDzieci from "./pages/RehabilitacjaDzieci";
import RehabilitacjaDoroslych from "./pages/RehabilitacjaDoroslych";
import RehabilitacjaDomowa from "./pages/RehabilitacjaDomowa";
import Kontakt from "./pages/Kontakt";

export default createBrowserRouter([
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
        element: <RehabilitacjaDzieci />,
      },
      {
        path: "rehabilitacja-doroslych",
        element: <RehabilitacjaDoroslych />,
      },
      {
        path: "rehabilitacja-domowa",
        element: <RehabilitacjaDomowa />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
    ],
  },
]);
