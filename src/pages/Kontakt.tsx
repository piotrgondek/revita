import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Link as MuiLink,
  alpha,
} from "@mui/material";
import jpg from "../assets/dzieci5.jpg";
import {
  ContactPhone,
  LocationOn,
  Phone,
  WatchLater,
} from "@mui/icons-material";
import cergowa from "../assets/cergowa.jpg";
import parkowa from "../assets/parkowa.jpg";
import { Link } from "react-router-dom";

const Kontakt: React.FC = function () {
  return (
    <>
      <Box
        sx={{
          height: "45vh",
          backgroundImage: `url(${jpg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Typography
          sx={(theme) => ({
            backgroundColor: alpha(theme.palette.secondary.main, 0.6),
            p: 2,
            display: "flex",
            position: "absolute",
            bottom: 0,
            color: theme.palette.primary.main,
          })}
          component="span"
          variant="h4"
        >
          Zapraszamy do skontaktowania się z naszym zespołem!
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Stack gap={2} sx={{ mt: 2, mb: 4 }}>
          <Typography
            variant="h6"
            textAlign="justify"
            fontStyle="italic"
            sx={{
              "&::first-letter": {
                initialLetter: "2 1",
              },
            }}
          >
            W trudnych chwilach warto mieć wsparcie doświadczonych
            profesjonalistów. Nasz empatyczny zespół specjalistów zdrowia jest
            tutaj, aby Ci pomóc. Jeśli Ty lub Twoje dziecko borykacie się z
            ciężką chorobą, nie jesteście sami. Skontaktuj się z nami, aby
            umówić wizytę i rozpocząć drogę do powrotu do zdrowia.
          </Typography>
          <Card>
            <CardMedia
              component="img"
              height="400px"
              image={cergowa}
              alt="Revita Dukla"
            />
            <CardHeader
              title={
                <Typography variant="h4">
                  Rehabilitacja Dzieci Oraz Domowa
                </Typography>
              }
            />
            <List>
              <ListItem>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary="+48 660-596-511" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WatchLater />
                </ListItemIcon>
                <ListItemText primary="pon-pt 8:00-18:00" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <MuiLink
                      component={Link}
                      to="https://maps.app.goo.gl/VQQZNNRm8PK5bg327"
                      target="_blank"
                    >
                      Cergowa 159F, 38-450 Cergowa
                    </MuiLink>
                  }
                />
              </ListItem>
            </List>
          </Card>
          <Card>
            <CardMedia
              component="img"
              height="400px"
              image={parkowa}
              alt="Revita Dukla"
            />
            <CardHeader
              title={
                <Typography variant="h4">Rehabilitacja Dorosłych</Typography>
              }
            />
            <List>
              <ListItem>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary="(013) 43 31 555 w godzinach: 8:00-15:30" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ContactPhone />
                </ListItemIcon>
                <ListItemText primary="+48 660-596-511 - Violetta Bąk" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WatchLater />
                </ListItemIcon>
                <ListItemText primary="pon-pt 8:00-18:00" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <MuiLink
                      component={Link}
                      to="https://goo.gl/maps/F3WdNnuoqbpch6h99"
                      target="_blank"
                    >
                      ul. Parkowa 5, 38-450 Dukla
                    </MuiLink>
                  }
                />
              </ListItem>
            </List>
          </Card>
        </Stack>
      </Container>
    </>
  );
};

export default Kontakt;
