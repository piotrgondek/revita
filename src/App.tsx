import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppBar, Button, Divider, Stack, Toolbar } from "@mui/material";
import { FormatListNumbered } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

const App: React.FC = function () {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button color="inherit" component={Link} to="/rehabilitacja-dzieci">
            Rehabilitacja dzieci
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/rehabilitacja-doroslych"
          >
            Rehabilitacja dorosłych
          </Button>
          <Button color="inherit" component={Link} to="/rehabilitacja-domowa">
            Rehabilitacja domowa
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Outlet />
      <Toolbar
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          justifyContent: "center",
        })}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button color="secondary" startIcon={<FormatListNumbered />}>
            RODO
          </Button>
        </Stack>
      </Toolbar>
    </>
  );
};

export default App;
