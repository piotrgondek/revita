import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  AppBar,
  Button,
  Divider,
  Fab,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import { Contacts, FormatListNumbered, Home } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";

const App: React.FC = function () {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  if (isSm) {
    return (
      <MobileLayout>
        <Outlet />
      </MobileLayout>
    );
  }

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
          {!isSm && (
            <Button color="inherit" component={Link} to="/kontakt">
              Kontakt
            </Button>
          )}
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
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button
            color="secondary"
            startIcon={<Home />}
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            color="secondary"
            startIcon={<Contacts />}
            component={Link}
            to="/kontakt"
          >
            Kontakt
          </Button>
          <Button
            color="secondary"
            startIcon={<FormatListNumbered />}
            component={MuiLink}
            href="/RODO.pdf"
            target="_blank"
          >
            RODO
          </Button>
        </Stack>
      </Toolbar>
      {isSm && (
        <Fab
          component={Link}
          to="/kontakt"
          color="primary"
          sx={(theme) => ({
            position: "fixed",
            bottom: theme.spacing(4),
            right: theme.spacing(1),
          })}
        >
          <Contacts />
        </Fab>
      )}
    </>
  );
};

export default App;
