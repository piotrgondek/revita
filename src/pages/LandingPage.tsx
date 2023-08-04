import revitaDukla from "../../public/revita-dukla.jpg";
import rehabilitacjaDzieci from "../../public/rehabilitacja-dzieci.jpg";
import rehabilitacjaDoroslych from "../../public/rehabilitacja-doroslych.jpg";
import rehabilitacjaDomowa from "../../public/rehabilitacja-domowa.jpg";
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
} from "@mui/material";

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
          <CardContent>
            <Typography variant="h4">
              Niepubliczny Zakład Opieki Zdrowotnej Revita Dukla
            </Typography>
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
          <CardContent>
            <Typography variant="h4">Rehabilitacja Dzieci</Typography>
            <Typography>
              Specjalizujemy się w rehabilitacji dzieci. Nasi terapeuci
              ukończyli liczne kursy i szkolenia, dzięki którym są
              wykwalifikowani w pracy z najmłodszymi pacjentami. Stosujemy
              uznane i skuteczne metody rehabilitacji, takie jak:
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Metoda Vojty - Innowacyjna terapia stymulująca rozwój ruchowy
                  u dzieci.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Metoda NDT-Bobath - Skoncentrowana na korygowaniu zaburzeń
                  neuromotorycznych u dzieci.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Metoda PNF - Wzmacniająca mięśnie i poprawiająca koordynację
                  ruchową.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Terapia mięśniowo-powięziowa - Łagodząca bóle i naprężenia
                  mięśniowe.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Terapia manualna - Terapeutyczne manipulacje wspomagające
                  rozwój dziecka.
                </ListItemText>
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
          <CardContent>
            <Typography variant="h4">Rehabilitacja Dorosłych</Typography>
            <Typography>
              Niezależnie od aktywności i stylu życia, wszyscy jesteśmy narażeni
              na urazy kręgosłupa, uszkodzenia narządu ruchu czy długotrwałe
              dolegliwości bólowe. Nasz wykwalifikowany zespół specjalistów
              oferuje kompleksową i skuteczną rehabilitację dorosłych,
              korzystając z uznanych metod terapeutycznych, w tym:
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Terapia Mulligana - Innowacyjna metoda terapeutyczna, która
                  skutecznie łagodzi bóle i poprawia funkcje stawów i
                  kręgosłupa.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Terapia manualna - Specjalistyczne manipulacje ręczne, które
                  redukują napięcia mięśniowe i poprawiają zakres ruchu.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Kinesiology Taping - Technika tapingu, która wspomaga pracę
                  mięśni, zmniejsza ból i wspiera gojenie się tkanek.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Fizykoterapia - Wykorzystujemy zaawansowane technologie
                  fizykalne, takie jak laseroterapia, ultradźwięki czy
                  elektrostymulacja, aby przyspieszyć proces rehabilitacji.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Ćwiczenia czynne - Indywidualnie dostosowane ćwiczenia
                  wzmacniające i rehabilitacyjne.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Masaże - Terapeutyczne masaże, które redukują napięcie
                  mięśniowe i przynoszą ulgę w dolegliwościach.
                </ListItemText>
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
          <CardContent>
            <Typography variant="h4">Rehabilitacja Domowa</Typography>
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
