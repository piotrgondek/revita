import logo from "../assets/logo.webp";
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
  Toolbar,
  ListItemProps,
} from "@mui/material";
import { Link, useMatches } from "react-router-dom";

const links: (
  | ({
      to: string;
      icon: JSX.Element;
      text: string;
      component?: React.ElementType;
      target?: "_blank";
    } & Pick<ListItemProps, "secondaryAction">)
  | "divider"
)[] = [
  {
    to: "/",
    icon: <Home />,
    text: "Strona główna",
  },
  {
    to: "/rehabilitacja-dzieci",
    icon: <BabyChangingStation />,
    text: "Rehabilitacja dzieci",
  },
  {
    to: "/rehabilitacja-doroslych",
    icon: <Wc />,
    text: "Rehabilitacja dorosłych",
  },
  {
    to: "/rehabilitacja-domowa",
    icon: <Accessible />,
    text: "Rehabilitacja domowa",
  },
  {
    to: "/kontakt",
    icon: <Contacts />,
    text: "Kontakt",
  },
  "divider",
  {
    to: "/RODO.pdf",
    icon: <FormatListNumbered />,
    text: "RODO",
    component: MuiLink,
    target: "_blank",
    secondaryAction: (
      <IconButton edge="end">
        <OpenInNew />
      </IconButton>
    ),
  },
];

const DrawerContent: React.FC = () => {
  const matches = useMatches();

  const isSelected = (to: string) =>
    matches
      .slice(1)
      .map((m) => m.pathname)
      .includes(to);

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
      <List disablePadding>
        {links.map((link) => {
          if (link === "divider") return <Divider key="divider" />;
          const { to, icon, text, component, target, secondaryAction } = link;
          return (
            <ListItem key={to} disablePadding secondaryAction={secondaryAction}>
              <ListItemButton
                component={component ?? Link}
                to={to}
                selected={isSelected(to)}
                target={target}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Toolbar
        sx={{
          backgroundColor: "primary.main",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          @ {new Date().getFullYear()} N.Z.O.Z. Revita Dukla
        </Typography>
      </Toolbar>
    </Stack>
  );
};

export default DrawerContent;
