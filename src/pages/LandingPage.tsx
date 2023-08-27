import revitaDukla from "../assets/imgs/outside/003.webp";
import rehabilitacjaDzieci from "../assets/imgs/kids/039.webp";
import rehabilitacjaDoroslych from "../assets/imgs/adults/004.webp";
import rehabilitacjaDomowa from "../assets/rehabilitacja-domowa.webp";
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
import img01 from "../assets/imgs/inside/001.webp";
import img02 from "../assets/imgs/inside/002.webp";
import img03 from "../assets/imgs/inside/003.webp";
import img04 from "../assets/imgs/inside/004.webp";
import img05 from "../assets/imgs/inside/005.webp";
import img06 from "../assets/imgs/inside/006.webp";
import img07 from "../assets/imgs/inside/007.webp";
import img08 from "../assets/imgs/inside/008.webp";
import img09 from "../assets/imgs/inside/009.webp";
import img10 from "../assets/imgs/inside/010.webp";
import img11 from "../assets/imgs/inside/011.webp";
import img12 from "../assets/imgs/inside/012.webp";
import img13 from "../assets/imgs/inside/013.webp";
import img14 from "../assets/imgs/inside/014.webp";
import img15 from "../assets/imgs/inside/015.webp";
import img16 from "../assets/imgs/inside/016.webp";
import img17 from "../assets/imgs/inside/017.webp";
import img18 from "../assets/imgs/inside/018.webp";
import img19 from "../assets/imgs/inside/019.webp";
import img20 from "../assets/imgs/inside/020.webp";
import img21 from "../assets/imgs/inside/021.webp";
import img22 from "../assets/imgs/inside/022.webp";
import img23 from "../assets/imgs/inside/023.webp";
import img24 from "../assets/imgs/inside/024.webp";
import img25 from "../assets/imgs/inside/025.webp";
import img26 from "../assets/imgs/inside/026.webp";
import img27 from "../assets/imgs/inside/027.webp";
import img28 from "../assets/imgs/inside/028.webp";
import img29 from "../assets/imgs/inside/029.webp";
import img30 from "../assets/imgs/inside/030.webp";
import img31 from "../assets/imgs/inside/031.webp";
import img32 from "../assets/imgs/inside/032.webp";
import img33 from "../assets/imgs/inside/033.webp";
import img34 from "../assets/imgs/inside/034.webp";
import img35 from "../assets/imgs/inside/035.webp";
import img36 from "../assets/imgs/inside/036.webp";
import img37 from "../assets/imgs/inside/037.webp";
import img38 from "../assets/imgs/inside/038.webp";
import img39 from "../assets/imgs/inside/039.webp";
import img40 from "../assets/imgs/inside/040.webp";
import img41 from "../assets/imgs/inside/041.webp";
import img42 from "../assets/imgs/inside/042.webp";
import img43 from "../assets/imgs/inside/043.webp";
import img44 from "../assets/imgs/inside/044.webp";
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
])
  .filter(
    (img) =>
      ![
        revitaDukla,
        rehabilitacjaDzieci,
        rehabilitacjaDoroslych,
        rehabilitacjaDomowa,
      ].includes(img),
  )
  .map((img) => ({
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
