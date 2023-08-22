import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import jpg from "../assets//rehabilitacja-doroslych.jpg";
import { ListCard } from "../types";
import zabieg from "../assets/zabieg.jpg";
import zabieg2 from "../assets/zabieg2.jpg";
import specjalista from "../assets/specjalista.jpg";
import HeroImage from "../components/HeroImage";
import ProminentText from "../components/ProminentText";

const metody: ListCard = {
  title:
    "W ramach rehabilitacji dla dorosłych oferujemy następujące metody terapeutyczne",
  items: [
    {
      primary: "Terapia McKenzie",
      secondary:
        "Skupia się na terapii dysfunkcji kręgosłupa poprzez odpowiednie ćwiczenia i podejście diagnostyczne.",
    },
    {
      primary: "Terapia PNF",
      secondary:
        "Metoda oparta na pracy z wzorcami ruchowymi w celu poprawy funkcji motorycznych i koordynacji ciała.",
    },
    {
      primary: "Elementy terapii NDT-Bobath dla dorosłych",
      secondary:
        "Skierowane do pacjentów z zaburzeniami neurologicznymi w celu poprawy funkcji ruchowych.",
    },
    {
      primary: "Terapia manualna",
      secondary:
        "Wykorzystuje manipulacje ręczne do łagodzenia bólu i poprawy ruchomości stawów i tkanek.",
    },
    {
      primary: "Terapia kinesiology taping",
      secondary: "Technika tapingu, która wspomaga wsparcie mięśni i stawów.",
    },
    {
      primary: "Terapia Mulligana",
      secondary:
        "Diagnostyczno-terapeutyczna metoda, wykorzystująca bezbolesne ćwiczenia mobilizacyjne na stawy, mięśnie i nerwy. Skuteczna w leczeniu bólu kręgosłupa, dysfunkcji stawów i migren.",
    },
    {
      primary: "Fizykoterapia ",
      secondary:
        "Obejmuje różnorodne techniki, takie jak elektrolecznictwo, laseroterapia, magnetoterapia, EEG biofeedback, magnetostymulacja, krioterapia, ultradźwięki, ciepłolecznictwo i światłolecznictwo.",
    },
    {
      primary: "Ćwiczenia ",
      secondary:
        "W tym ćwiczenia czynne, odciążające, z obciążeniem w UGUL-u, czynno-bierne, bierne, oporowe, samowspomagane, wspomagane, redresje, wyciągi, ćwiczenia oddechowe, relaksacyjne oraz czynności samoobsługowe.",
    },
    {
      primary: "Nauka chodzenia i pionizacji",
      secondary:
        "Indywidualne podejście do nauki chodzenia i wspomagania pionizacji pacjentów.",
    },
    {
      primary: "Ćwiczenia manualne dłoni",
      secondary: "Terapia skupiająca się na poprawie funkcji rąk.",
    },
    {
      primary: "Masaż",
      secondary: "Dbałość o relaks i poprawę krążenia.",
    },
    {
      primary: "Urządzenia",
      secondary:
        "Skorzystaj z zaawansowanych urządzeń, takich jak wyciągi szyjny i lędźwiowy typu ComforTrac, urządzenie rotor czy maszyna Viofor JPS.",
    },
  ],
};

const cennik: ListCard = {
  title: "Poniższy cennik przedstawia ceny usług wykonywanych prywatnie",
  items: [
    {
      primary: "Laseroterapia",
      secondary: "30 zł",
    },
    {
      primary: "Pole magnetyczne",
      secondary: "30 zł",
    },
    {
      primary: "Galwanizacja",
      secondary: "30 zł",
    },
    {
      primary: "Jonoforeza",
      secondary: "30 zł",
    },
    {
      primary: "Prądy diadynamiczne",
      secondary: "30 zł",
    },
    {
      primary: "Prądy interferencyjne",
      secondary: "30 zł",
    },
    {
      primary: "Prądy Tens",
      secondary: "30 zł",
    },
    {
      primary: "Prądy Treberta",
      secondary: "30 zł",
    },
    {
      primary: "Prądy Kotza",
      secondary: "30 zł",
    },
    {
      primary: "Ultradźwięki miejscowe",
      secondary: "30 zł",
    },
    {
      primary: "Ultrafonoforeza",
      secondary: "30 zł",
    },
    {
      primary: "Elektrostymulacja",
      secondary: "30 zł",
    },
    {
      primary: "Kąpiel wirowa kończyn",
      secondary: "40 zł",
    },
    {
      primary: "Lampla sollux",
      secondary: "naświetlanie IR miejscowe - 25 zł",
    },
    {
      primary: "Krioterapia miejscowa",
      secondary: "30 zł",
    },
    {
      primary: "Plastry borowinowe",
      secondary: "30 zł",
    },
    {
      primary: "Masaż ręczny częściowy",
      secondary: "50 zł",
    },
    {
      primary: "Masaż ręczny - cały kręgosłup",
      secondary: "100 zł",
    },
    {
      primary: "Masaż limfatyczny ręczny",
      secondary: "60 zł",
    },
    {
      primary:
        "Ćwiczenia bierne, czynno- bierne, wspomagane- indywidualna praca z pacjentem",
      secondary: "60 zł",
    },
    {
      primary: "Plastrowania (tapping)",
      secondary: "od 35 zł",
    },
    {
      primary:
        "Usprawnienie wg metod neurofizjologicznych, metod reedukacji nerwowo- mięśniowej PNF",
      secondary: "75 zł",
    },
    {
      primary: "Ćwiczenia indywidualne wad postawy",
      secondary: "75 zł",
    },
    {
      primary: "Wyciąg",
      secondary: "20 zł",
    },
    {
      primary: "Bierznia",
      secondary: "20 zł",
    },
    {
      primary: "Fotel masujący",
      secondary: "20 zł za 15min",
    },
    {
      primary: "Rezonas stochastyczny (SRT)",
      secondary: "60 zł, pakiet 5 zabiegów 270 zł",
    },
    {
      primary:
        "Laser wysokoenergetyczny BTL 30W-najmocniejszy (zrobotyzowany laser z termoskanerem)",
      secondary: "100 zł, pakiet 3 zabiegów 270zł",
    },
    {
      primary: "Normobaria",
      secondary: "pakiet 5 zabiegów 350zł, 10 zabiegów 650 zł",
    },
    {
      primary: "Drenaż limfatyczny (mechaniczny) kończyny górnej",
      secondary: "130 zł, pakiet 5 zabiegów 600 zł",
    },
    {
      primary: "Drenaż limfatyczny (mechaniczny) kończyny dolnej",
      secondary: "160 zł, pakiet 5 zabiegów 750 zł",
    },
  ],
};

const specjalisci: ListCard = {
  title: "Zespół Fizjoterapeutów",
  items: [
    {
      primary: "mgr Barbara Konop",
    },
    {
      primary: "mgr Aleksandra Drozd",
    },
    {
      primary: "mgr Marlena Wiernasz",
    },
    {
      primary: "mgr Violetta Bąk",
    },
  ],
};

const RehabilitacjaDoroslych: React.FC = function () {
  return (
    <>
      <HeroImage
        img={jpg}
        text="Rehabilitacja dla dorosłych - Odkryj pełen zakres skutecznych metod terapeutycznych"
      />
      <Container maxWidth="md">
        <ProminentText>
          W ośrodku rehabilitacyjnym &quot;Revita&quot; oferujemy pacjentom
          szeroki wybór zabiegów z zakresu fizykoterapii, takich jak terapia
          ultradźwiękami. Ponadto, stosujemy różnorodne formy fizjoterapii,
          oparte na sprawdzonych i uznanymi na świecie metodach terapeutycznych,
          takich jak terapia McKenzie, terapia Mulligana czy ćwiczenia czynne.
          Nasi wykwalifikowani fizjoterapeuci pracują z pacjentami, aby zapewnić
          im kompleksową opiekę i efektywne rezultaty.
        </ProminentText>
      </Container>
      <Container maxWidth="xl">
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} lg={6}>
              <Card sx={{ height: 1 }}>
                <CardMedia
                  component="img"
                  height="200px"
                  image={zabieg}
                  alt="Zabieg"
                />
                <CardHeader title={metody.title} />
                <CardContent>
                  <List dense>
                    {metody.items.map(({ primary, secondary }) => (
                      <ListItem key={`${primary}-${secondary}`}>
                        <ListItemText primary={primary} secondary={secondary} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography textAlign="justify">
                    W naszym ośrodku rehabilitacyjnym znajdziesz także
                    różnorodne urządzenia do aktywności fizycznej, takie jak
                    rower, bieżnia, poręcze, wibromasaż i wiele innych. Nasz
                    zespół specjalistów jest gotowy, aby dostosować indywidualny
                    plan terapeutyczny i wspierać Cię w osiągnięciu optymalnych
                    wyników w procesie rehabilitacji.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Card sx={{ height: 1 }}>
                <CardMedia
                  component="img"
                  height="200px"
                  image={zabieg2}
                  alt="Zabieg"
                />
                <CardHeader title={cennik.title} />
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <List dense sx={{ flex: "0 0 50%" }}>
                      {cennik.items
                        .slice(0, Math.ceil(cennik.items.length / 2) + 1)
                        .map(({ primary, secondary }) => (
                          <ListItem key={`${primary}-${secondary}`}>
                            <ListItemText
                              primary={primary}
                              secondary={secondary}
                            />
                          </ListItem>
                        ))}
                    </List>
                    <List dense sx={{ flex: "0 0 50%" }}>
                      {cennik.items
                        .slice(Math.ceil(cennik.items.length / 2) + 1)
                        .map(({ primary, secondary }) => (
                          <ListItem key={`${primary}-${secondary}`}>
                            <ListItemText
                              primary={primary}
                              secondary={secondary}
                            />
                          </ListItem>
                        ))}
                    </List>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="md">
        <Stack spacing={2} sx={{ mt: 2, mb: 4 }}>
          <Card>
            <CardMedia
              component="img"
              height="200px"
              image={specjalista}
              alt="Specjalista"
            />
            <CardHeader title={specjalisci.title} />
            <CardContent>
              <List dense>
                {specjalisci.items.map(({ primary, secondary }) => (
                  <ListItem key={`${primary}-${secondary}`}>
                    <ListItemText primary={primary} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <ProminentText>
            Nasz zespół wciąż poszerza swoją wiedzę i umiejętności poprzez
            uczestnictwo w różnorodnych szkoleniach i kursach, aby zapewnić
            naszym pacjentom najwyższą jakość opieki. Każdy z naszych
            fizjoterapeutów jest zaangażowany w indywidualne podejście do
            pacjenta, dostosowując terapię do jego potrzeb i celów. Zaufaj
            naszym specjalistom i oddaj swoje zdrowie w nasze ręce!
          </ProminentText>
        </Stack>
      </Container>
    </>
  );
};

export default RehabilitacjaDoroslych;
