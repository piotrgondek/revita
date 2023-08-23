import { Toolbar, Box, Drawer } from "@mui/material";
import DrawerContent from "../components/DrawerContent";
import { ScrollRestoration } from "react-router-dom";

const drawerWidth = 320;

const LargeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ScrollRestoration />
      <Box
        sx={{
          ml: `${drawerWidth}px`,
        }}
      >
        {children}
        <Toolbar
          sx={{
            mt: 2,
            backgroundColor: "primary.main",
          }}
        />
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default LargeLayout;
