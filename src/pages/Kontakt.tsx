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
  Grid,
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
import HeroImage from "../components/HeroImage";
import ProminentText from "../components/ProminentText";

const Kontakt: React.FC = function () {
  return (
    <>
      <HeroImage
        img={jpg}
        text="Zapraszamy do skontaktowania się z naszym zespołem!"
      />
      <Container maxWidth="md">
        <ProminentText>
          W trudnych chwilach warto mieć wsparcie doświadczonych
          profesjonalistów. Nasz empatyczny zespół specjalistów zdrowia jest
          tutaj, aby Ci pomóc. Jeśli Ty lub Twoje dziecko borykacie się z ciężką
          chorobą, nie jesteście sami. Skontaktuj się z nami, aby umówić wizytę
          i rozpocząć drogę do powrotu do zdrowia.
        </ProminentText>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} lg={6}>
            <Card sx={{ height: 1 }}>
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
                  <ListItemText
                    primary={
                      <MuiLink
                        component={Link}
                        to="tel:+48660596511"
                        target="_blank"
                      >
                        +48 660-596-511
                      </MuiLink>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WatchLater />
                  </ListItemIcon>
                  <ListItemText primary="8:00 - 18:00" secondary="pon - pt" />
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
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card sx={{ height: 1 }}>
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
                  <ListItemText
                    primary={
                      <MuiLink
                        component={Link}
                        to="tel:134331555"
                        target="_blank"
                      >
                        (13) 43 31 555
                      </MuiLink>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ContactPhone />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <MuiLink
                        component={Link}
                        to="tel:+48660596511"
                        target="_blank"
                      >
                        +48 660-596-511
                      </MuiLink>
                    }
                    secondary="Violetta Bąk"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WatchLater />
                  </ListItemIcon>
                  <ListItemText primary="8:00 - 18:00" secondary="pon - pt " />
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Kontakt;
