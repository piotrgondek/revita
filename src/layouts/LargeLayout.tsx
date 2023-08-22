import { AppBar, Toolbar, Box, Drawer, Typography } from "@mui/material";
import DrawerContent from "../components/DrawerContent";

const drawerWidth = 320;

const LargeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          ml: `${drawerWidth}px`,
        }}
      >
        {children}
      </Box>
      <Box>
        <AppBar
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              N.Z.O.Z. Revita Dukla
            </Typography>
          </Toolbar>
        </AppBar>
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
      </Box>
    </>
  );
};

export default LargeLayout;
