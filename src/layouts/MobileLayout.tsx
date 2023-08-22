import logo from "../assets/logo.jpg";
import {
  Home,
  Contacts,
  BabyChangingStation,
  Wc,
  Accessible,
  FormatListNumbered,
  OpenInNew,
  Menu,
  Phone,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Fab,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const MobileLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const { pathname } = useLocation();

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  React.useEffect(() => {
    handleDrawerClose();
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Toolbar />
      <Box>{children}</Box>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 1 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div">
            N.Z.O.Z. Revita Dukla
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          maxWidth: "80vw",
        }}
      >
        <Stack height={1}>
          <Box
            sx={(theme) => ({
              my: 1,
              height: theme.typography.pxToRem(90),
            })}
          >
            <Box
              component="img"
              src={logo}
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Strona główna" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/rehabilitacja-dzieci">
                <ListItemIcon>
                  <BabyChangingStation />
                </ListItemIcon>
                <ListItemText primary="Rehabilitacja dzieci" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/rehabilitacja-doroslych">
                <ListItemIcon>
                  <Wc />
                </ListItemIcon>
                <ListItemText primary="Rehabilitacja dorosłych" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/rehabilitacja-domowa">
                <ListItemIcon>
                  <Accessible />
                </ListItemIcon>
                <ListItemText primary="Rehabilitacja domowa" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/kontakt">
                <ListItemIcon>
                  <Contacts />
                </ListItemIcon>
                <ListItemText primary="Kontakt" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end">
                  <OpenInNew />
                </IconButton>
              }
            >
              <ListItemButton
                component={MuiLink}
                href="/RODO.pdf"
                target="_blank"
              >
                <ListItemIcon>
                  <FormatListNumbered />
                </ListItemIcon>
                <ListItemText primary="RODO" />
              </ListItemButton>
            </ListItem>
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="body2"
            sx={(theme) => ({
              backgroundColor: theme.palette.primary.main,
              p: 1,
            })}
          >
            @ {new Date().getFullYear()} N.Z.O.Z. Revita Dukla
          </Typography>
        </Stack>
      </Drawer>
      <Fab
        color="primary"
        size="medium"
        component="a"
        href="tel:660596511"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 16,
        }}
      >
        <Phone />
      </Fab>
    </>
  );
};

export default MobileLayout;
