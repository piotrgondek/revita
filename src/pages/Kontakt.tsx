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
  Typography,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import jpg from "../assets/imgs/outside/001.jpg";
import {
  ContactPhone,
  LocationOn,
  Phone,
  WatchLater,
} from "@mui/icons-material";
import cergowa from "../assets/imgs/outside/002.jpg";
import parkowa from "../assets/imgs/outside/007.jpg";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import ProminentText from "../components/ProminentText";
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";
import img01 from "../assets/imgs/outside/001.jpg";
import img02 from "../assets/imgs/outside/002.jpg";
import img03 from "../assets/imgs/outside/003.jpg";
import img04 from "../assets/imgs/outside/004.jpg";
import img05 from "../assets/imgs/outside/005.jpg";
import img06 from "../assets/imgs/outside/006.jpg";
import img07 from "../assets/imgs/outside/007.jpg";
import arrayShuffle from "array-shuffle";

const images: ReactImageGalleryProps["items"] = arrayShuffle([
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
]).map((img) => ({
  original: img,
}));

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
      <Box mt={2}>
        <ImageGallery
          items={images}
          lazyLoad
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </Box>
    </>
  );
};

export default Kontakt;
