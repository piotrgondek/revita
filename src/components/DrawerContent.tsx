import logo from "../assets/logo.jpg";
import {
  Home,
  BabyChangingStation,
  Wc,
  Accessible,
  Contacts,
  OpenInNew,
  FormatListNumbered,
} from "@mui/icons-material";
import {
  Link as MuiLink,
  Stack,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const DrawerContent: React.FC = () => {
  return (
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
          <ListItemButton component={MuiLink} href="/RODO.pdf" target="_blank">
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
  );
};

export default DrawerContent;
