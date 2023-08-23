import revitaDukla from "../assets/revita-dukla.jpg";
import rehabilitacjaDzieci from "../assets/rehabilitacja-dzieci.jpg";
import rehabilitacjaDoroslych from "../assets/rehabilitacja-doroslych.jpg";
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
  IconButton,
  CardActionArea,
} from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import HeroImage from "../components/HeroImage";
import ProminentText from "../components/ProminentText";

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
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Metoda Vojty"
                    secondary="Innowacyjna terapia stymulująca rozwój ruchowy u dzieci."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Metoda NDT-Bobath"
                    secondary="Skoncentrowana na korygowaniu zaburzeń neuromotorycznych u dzieci."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Metoda PNF"
                    secondary="Wzmacniająca mięśnie i poprawiająca koordynację ruchową."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Terapia mięśniowo-powięziowa"
                    secondary="Łagodząca bóle i naprężenia mięśniowe."
                  />
                </ListItem>
                <ListItem>
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
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Terapia Mulligana"
                    secondary="Innowacyjna metoda terapeutyczna, która skutecznie łagodzi bóle i poprawia funkcje stawów i kręgosłupa."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Terapia manualna"
                    secondary="Specjalistyczne manipulacje ręczne, które redukują napięcia mięśniowe i poprawiają zakres ruchu."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Kinesiology Taping"
                    secondary="Technika tapingu, która wspomaga pracę mięśni, zmniejsza ból i wspiera gojenie się tkanek."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Fizykoterapia "
                    secondary="Wykorzystujemy zaawansowane technologie fizykalne, takie jak laseroterapia, ultradźwięki czy elektrostymulacja, aby przyspieszyć proces rehabilitacji."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Ćwiczenia czynne"
                    secondary="Indywidualnie dostosowane ćwiczenia wzmacniające i rehabilitacyjne."
                  />
                </ListItem>
                <ListItem>
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
              <Typography mb={1}>
                Dla osób o ograniczonej mobilności priorytetem jest skuteczna i
                wygodna opieka. Wychodząc naprzeciw tym potrzebom, oferujemy
                rehabilitację w zaciszu domu. Specjaliści dojeżdżają do
                mieszkańców Dukli i okolic, zapewniając terapię na miejscu.
              </Typography>
              <Typography mb={1}>
                Doświadczeni specjaliści zapewniają kompleksową i profesjonalną
                opiekę. Terapia jest dostosowana do stanu zdrowia, możliwości i
                celów rehabilitacyjnych pacjenta, umożliwiając skuteczny proces
                zdrowienia w komfortowym otoczeniu domowym.
              </Typography>
              <Typography mb={1}>
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
    </>
  );
};

export default LandingPage;
