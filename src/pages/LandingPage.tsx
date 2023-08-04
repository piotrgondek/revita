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
} from "@mui/material";
import { Link as LinkIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LandingPage: React.FC = function () {
  return (
    <Container maxWidth="md" sx={{ my: 2 }}>
      <Stack gap={2}>
        <Card elevation={2}>
          <CardMedia
            component="img"
            height="400px"
            image={revitaDukla}
            alt="Revita Dukla"
          />
          <CardHeader
            title={
              <Typography variant="h4">
                Niepubliczny Zakład Opieki Zdrowotnej Revita Dukla
              </Typography>
            }
          />
          <CardContent>
            <Typography>
              N.Z.O.Z. Revita Dukla to renomowany ośrodek specjalizujący się w
              rehabilitacji. Nasza oferta zabiegów, terapii i masaży jest
              dedykowana zarówno dla osób dorosłych, jak i dzieci. W naszej
              siedzibie spotkają Państwo zespół wykwalifikowanych specjalistów,
              którzy posiadają bogate doświadczenie w różnych dziedzinach, m.in.
              fizjoterapii, wczesnego wspomagania rozwoju, rehabilitacji
              pourazowej, terapii SI, a także pedagogiki i neurologopedii. Nasza
              praktyka oparta jest na nowoczesnych i globalnie uznanych metodach
              medycyny. Każdy pacjent otrzymuje spersonalizowany plan terapii,
              dostosowany do jego konkretnych problemów i potrzeb. Dzięki temu
              możemy realnie wspierać Państwa w powrocie do zdrowia, poprawie
              sprawności, redukcji dolegliwości bólowych oraz leczeniu
              różnorodnych schorzeń.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            height="300px"
            image={rehabilitacjaDzieci}
            alt="Rehabilitacja Dzieci"
          />
          <CardHeader
            action={
              <IconButton component={Link} to="/rehabilitacja-dzieci">
                <LinkIcon />
              </IconButton>
            }
            title={<Typography variant="h4">Rehabilitacja Dzieci</Typography>}
          />
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
          <CardMedia
            component="img"
            height="300px"
            image={rehabilitacjaDoroslych}
            alt="Rehabilitacja Dorosłych"
          />
          <CardHeader
            action={
              <IconButton component={Link} to="/rehabilitacja-doroslych">
                <LinkIcon />
              </IconButton>
            }
            title={
              <Typography variant="h4">Rehabilitacja Dorosłych</Typography>
            }
          />
          <CardContent>
            <Typography>
              Niezależnie od aktywności i stylu życia, wszyscy jesteśmy narażeni
              na urazy kręgosłupa, uszkodzenia narządu ruchu czy długotrwałe
              dolegliwości bólowe. Nasz wykwalifikowany zespół specjalistów
              oferuje kompleksową i skuteczną rehabilitację dorosłych,
              korzystając z uznanych metod terapeutycznych, w tym:
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
          <CardMedia
            component="img"
            height="300px"
            image={rehabilitacjaDomowa}
            alt="Rehabilitacja Domowa"
          />
          <CardHeader
            action={
              <IconButton component={Link} to="/rehabilitacja-domowa">
                <LinkIcon />
              </IconButton>
            }
            title={<Typography variant="h4">Rehabilitacja Domowa</Typography>}
          />
          <CardContent>
            <Typography>
              W celu zapewnienia wsparcia dla osób mniej mobilnych, oferujemy
              również rehabilitację domową. Nasi specjaliści docierają do
              pacjentów w Dukli i okolicznych miejscowościach, zapewniając
              profesjonalną terapię w wygodnym dla nich otoczeniu. Wizyty są
              wcześniej umawiane drogą telefoniczną.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default LandingPage;
