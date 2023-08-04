import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import RehabilitacjaDzieci from "./pages/RehabilitacjaDzieci";

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
    ],
  },
]);
