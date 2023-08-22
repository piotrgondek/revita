import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";
import LargeLayout from "./layouts/LargeLayout";

const App: React.FC = function () {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  if (isMd) {
    return (
      <MobileLayout>
        <Outlet />
      </MobileLayout>
    );
  }

  return (
    <LargeLayout>
      <Outlet />
    </LargeLayout>
  );
};

export default App;
