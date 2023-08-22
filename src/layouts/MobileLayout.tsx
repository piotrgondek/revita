import { Menu, Phone } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  Fab,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import DrawerContent from "../components/DrawerContent";

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
      <Box
        sx={{
          pb: 4,
        }}
      >
        {children}
      </Box>
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
        <DrawerContent />
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
