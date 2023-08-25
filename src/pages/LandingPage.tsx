import revitaDukla from "../assets/imgs/outside/003.jpg";
import rehabilitacjaDzieci from "../assets/imgs/kids/039.jpg";
import rehabilitacjaDoroslych from "../assets/imgs/adults/004.jpg";
import rehabilitacjaDomowa from "../assets/rehabilitacja-domowa.jpg";
import {
  Stack,
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  CardHeader,
  CardActionArea,
  ListItemIcon,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import ProminentText from "../components/ProminentText";
import { SportsKabaddi } from "@mui/icons-material";
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";
import img01 from "../assets/imgs/inside/001.jpg";
import img02 from "../assets/imgs/inside/002.jpg";
import img03 from "../assets/imgs/inside/003.jpg";
import img04 from "../assets/imgs/inside/004.jpg";
import img05 from "../assets/imgs/inside/005.jpg";
import img06 from "../assets/imgs/inside/006.jpg";
import img07 from "../assets/imgs/inside/007.jpg";
import img08 from "../assets/imgs/inside/008.jpg";
import img09 from "../assets/imgs/inside/009.jpg";
import img10 from "../assets/imgs/inside/010.jpg";
import img11 from "../assets/imgs/inside/011.jpg";
import img12 from "../assets/imgs/inside/012.jpg";
import img13 from "../assets/imgs/inside/013.jpg";
import img14 from "../assets/imgs/inside/014.jpg";
import img15 from "../assets/imgs/inside/015.jpg";
import img16 from "../assets/imgs/inside/016.jpg";
import img17 from "../assets/imgs/inside/017.jpg";
import img18 from "../assets/imgs/inside/018.jpg";
import img19 from "../assets/imgs/inside/019.jpg";
import img20 from "../assets/imgs/inside/020.jpg";
import img21 from "../assets/imgs/inside/021.jpg";
import img22 from "../assets/imgs/inside/022.jpg";
import img23 from "../assets/imgs/inside/023.jpg";
import img24 from "../assets/imgs/inside/024.jpg";
import img25 from "../assets/imgs/inside/025.jpg";
import img26 from "../assets/imgs/inside/026.jpg";
import img27 from "../assets/imgs/inside/027.jpg";
import img28 from "../assets/imgs/inside/028.jpg";
import img29 from "../assets/imgs/inside/029.jpg";
import img30 from "../assets/imgs/inside/030.jpg";
import img31 from "../assets/imgs/inside/031.jpg";
import img32 from "../assets/imgs/inside/032.jpg";
import img33 from "../assets/imgs/inside/033.jpg";
import img34 from "../assets/imgs/inside/034.jpg";
import img35 from "../assets/imgs/inside/035.jpg";
import img36 from "../assets/imgs/inside/036.jpg";
import img37 from "../assets/imgs/inside/037.jpg";
import img38 from "../assets/imgs/inside/038.jpg";
import img39 from "../assets/imgs/inside/039.jpg";
import img40 from "../assets/imgs/inside/040.jpg";
import img41 from "../assets/imgs/inside/041.jpg";
import img42 from "../assets/imgs/inside/042.jpg";
import img43 from "../assets/imgs/inside/043.jpg";
import img44 from "../assets/imgs/inside/044.jpg";
import arrayShuffle from "array-shuffle";

const images: ReactImageGalleryProps["items"] = arrayShuffle([
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
]).map((img) => ({
  original: img,
}));

const LandingPage: React.FC = function () {
  return (
    <>
      <HeroImage
        img={revitaDukla}
        text="Niepubliczny Zakład Opieki Zdrowotnej Revita Dukla"
      />
      <Container maxWidth="md">
        <ProminentText>
          N .Z.O.Z. Revita Dukla to renomowany ośrodek specjalizujący się w
          rehabilitacji. Nasza oferta zabiegów, terapii i masaży jest dedykowana
          zarówno dla osób dorosłych, jak i dzieci. W naszej siedzibie spotkają
          Państwo zespół wykwalifikowanych specjalistów, którzy posiadają bogate
          doświadczenie w różnych dziedzinach, m.in. fizjoterapii, wczesnego
          wspomagania rozwoju, rehabilitacji pourazowej, terapii SI, a także
          pedagogiki i neurologopedii. Nasza praktyka oparta jest na
          nowoczesnych i globalnie uznanych metodach medycyny. Każdy pacjent
          otrzymuje spersonalizowany plan terapii, dostosowany do jego
          konkretnych problemów i potrzeb. Dzięki temu możemy realnie wspierać
          Państwa w powrocie do zdrowia, poprawie sprawności, redukcji
          dolegliwości bólowych oraz leczeniu różnorodnych schorzeń.
        </ProminentText>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack spacing={4}>
          <Card>
            <CardActionArea component={Link} to="/rehabilitacja-dzieci">
              <CardMedia
                component="img"
                height="300px"
                image={rehabilitacjaDzieci}
                alt="Rehabilitacja Dzieci"
              />
              <CardHeader
                title={
                  <Typography variant="h4">Rehabilitacja Dzieci</Typography>
                }
              />
            </CardActionArea>
            <CardContent>
              <Typography>
                Specjalizujemy się w rehabilitacji dzieci. Nasi terapeuci
                ukończyli liczne kursy i szkolenia, dzięki którym są
                wykwalifikowani w pracy z najmłodszymi pacjentami. Stosujemy
                uznane i skuteczne metody rehabilitacji, takie jak:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Metoda Vojty"
                    secondary="Innowacyjna terapia stymulująca rozwój ruchowy u dzieci."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Metoda NDT-Bobath"
                    secondary="Skoncentrowana na korygowaniu zaburzeń neuromotorycznych u dzieci."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Metoda PNF"
                    secondary="Wzmacniająca mięśnie i poprawiająca koordynację ruchową."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Terapia mięśniowo-powięziowa"
                    secondary="Łagodząca bóle i naprężenia mięśniowe."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Terapia manualna"
                    secondary="Terapeutyczne manipulacje wspomagające rozwój dziecka."
                  />
                </ListItem>
              </List>
              <Typography>
                Nasz ośrodek wyposażony jest w specjalistyczne urządzenia, takie
                jak urządzenie Forbrain, podkolanowe gipsowe opatrunki hamujące
                oraz splinty, które pomagają uzyskać najlepsze efekty
                terapeutyczne u dzieci.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardActionArea component={Link} to="/rehabilitacja-doroslych">
              <CardMedia
                component="img"
                height="300px"
                image={rehabilitacjaDoroslych}
                alt="Rehabilitacja Dorosłych"
              />
              <CardHeader
                title={
                  <Typography variant="h4">Rehabilitacja Dorosłych</Typography>
                }
              />
            </CardActionArea>
            <CardContent>
              <Typography>
                Niezależnie od aktywności i stylu życia, wszyscy jesteśmy
                narażeni na urazy kręgosłupa, uszkodzenia narządu ruchu czy
                długotrwałe dolegliwości bólowe. Nasz wykwalifikowany zespół
                specjalistów oferuje kompleksową i skuteczną rehabilitację
                dorosłych, korzystając z uznanych metod terapeutycznych, w tym:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Terapia Mulligana"
                    secondary="Innowacyjna metoda terapeutyczna, która skutecznie łagodzi bóle i poprawia funkcje stawów i kręgosłupa."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Terapia manualna"
                    secondary="Specjalistyczne manipulacje ręczne, które redukują napięcia mięśniowe i poprawiają zakres ruchu."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Kinesiology Taping"
                    secondary="Technika tapingu, która wspomaga pracę mięśni, zmniejsza ból i wspiera gojenie się tkanek."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Fizykoterapia "
                    secondary="Wykorzystujemy zaawansowane technologie fizykalne, takie jak laseroterapia, ultradźwięki czy elektrostymulacja, aby przyspieszyć proces rehabilitacji."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ćwiczenia czynne"
                    secondary="Indywidualnie dostosowane ćwiczenia wzmacniające i rehabilitacyjne."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText
                    primary="Masaże "
                    secondary="Terapeutyczne masaże, które redukują napięcie mięśniowe i przynoszą ulgę w dolegliwościach."
                  />
                </ListItem>
              </List>
              <Typography>
                Nasz zespół przed rozpoczęciem terapii przeprowadza szczegółowy
                wywiad medyczny, analizuje wyniki badań i bieżące dolegliwości,
                aby opracować najskuteczniejszy indywidualny program leczenia.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardActionArea component={Link} to="/rehabilitacja-domowa">
              <CardMedia
                component="img"
                height="300px"
                image={rehabilitacjaDomowa}
                alt="Rehabilitacja Domowa"
              />
              <CardHeader
                title={
                  <Typography variant="h4">Rehabilitacja Domowa</Typography>
                }
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom>
                Dla osób o ograniczonej mobilności priorytetem jest skuteczna i
                wygodna opieka. Wychodząc naprzeciw tym potrzebom, oferujemy
                rehabilitację w zaciszu domu. Specjaliści dojeżdżają do
                mieszkańców Dukli i okolic, zapewniając terapię na miejscu.
              </Typography>
              <Typography gutterBottom>
                Doświadczeni specjaliści zapewniają kompleksową i profesjonalną
                opiekę. Terapia jest dostosowana do stanu zdrowia, możliwości i
                celów rehabilitacyjnych pacjenta, umożliwiając skuteczny proces
                zdrowienia w komfortowym otoczeniu domowym.
              </Typography>
              <Typography>
                Wszystkie wizyty są wcześniej umawiane telefonicznie,
                dostosowując się do grafiku i preferencji pacjenta. Dążymy do
                kompleksowej opieki, skupiającej się na potrzebach naszych
                pacjentów. Dołącz do zaufanych naszym specjalistom i popraw
                swoją jakość życia dzięki profesjonalnej rehabilitacji domowej.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
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

export default LandingPage;
