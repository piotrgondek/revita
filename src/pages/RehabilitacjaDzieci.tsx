import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemTextProps,
  Stack,
  Typography,
  alpha,
  Grid,
} from "@mui/material";
import jpg from "../../public/rehabilitacja-dzieci.jpg";
import { ListCard } from "../types";

const listaMetodTerap: Array<Pick<ListItemTextProps, "primary" | "secondary">> =
  [
    {
      primary: "Metoda Vojty",
      secondary:
        "Skuteczna terapia stymulująca rozwój ruchowy u dzieci w wieku rozwojowym.",
    },

    {
      primary: "Metoda NDT-Bobath",
      secondary:
        "Specjalistyczna technika wspomagająca korygowanie zaburzeń neuromotorycznych u najmłodszych pacjentów.",
    },
    {
      primary: "Metoda PNF",
      secondary:
        "Terapia wzmacniająca mięśnie i poprawiająca koordynację ruchową.",
    },
    {
      primary: "Terapia mięśniowo-powięziowa",
      secondary: "Pomocna w łagodzeniu bólów i napięć mięśniowych.",
    },
    {
      primary: "Metoda integracji sensorycznej (SI)",
      secondary:
        "Skierowana do dzieci z zaburzeniami sensorycznymi, aby wspomagać ich rozwój.",
    },
    {
      primary: "Kombinezony dynamiczne DUNAG 02",
      secondary:
        "Innowacyjne rozwiązanie wspierające poprawę funkcji ruchowych.",
    },
    {
      primary: "Kinesiology Taping",
      secondary: "Technika tapingu, która pomaga w pracy mięśni i stawów.",
    },
    {
      primary: "Terapia manualna",
      secondary:
        "Metoda terapeutyczna, która korzysta z manipulacji ręcznych dla osiągnięcia pozytywnych efektów.",
    },
    {
      primary: "Terapia ręki",
      secondary:
        "Specjalistyczne podejście do rehabilitacji rąk po urazach i urazach pourazowych.",
    },
    {
      primary: "Trójpłaszczyznowa manualna terapia stóp",
      secondary: "Skupia się na poprawie wad postawy stóp u dzieci.",
    },
  ];

const listaInnychMetod: Array<
  Pick<ListItemTextProps, "primary" | "secondary">
> = [
  {
    primary: "EEG-Biofeedback (Mind Plus)",
    secondary:
      "Zaawansowana technologia biofeedbacku, która umożliwia pracę z układem nerwowym dzieci.",
  },
  {
    primary: "Urządzenie Forbrain",
    secondary:
      "Słuchawki przewodnictwa kostnego z mikrofonem o wysokiej częstotliwości, wspomagające terapie logopedyczne oraz sensoryczne.",
  },
  {
    primary: "Podkolanowe gipsowe opatrunki hamujące",
    secondary:
      "Specjalistyczne rozwiązanie, wspomagające rehabilitację dzieci z mpdz.",
  },
  {
    primary:
      "Splinty - Jedno- lub dwukomorowe nadmuchiwane rękawy stosowane na kończynę dolną bądź górną, mające szerokie zastosowanie u dzieci z różnymi zaburzeniami.",
  },
];

const fizykoterapia: ListCard = {
  title: "Fizykoterapia",
  items: [
    {
      primary: "Laseroterapia",
      secondary: "10 zł",
    },
    {
      primary: "Pole magnetyczne",
      secondary: "10 zł",
    },
    {
      primary: "Galwanizacja",
      secondary: "10 zł",
    },
    {
      primary: "Ultradźwięki",
      secondary: "10 zł",
    },
    {
      primary: "Tonoliza",
      secondary: "10 zł",
    },
    {
      primary: "Światło spolaryzowane",
      secondary: "7 zł",
    },
    {
      primary: "Lampa SOLUX",
      secondary: "7 zł",
    },
    {
      primary: "Ciepłolecznictwo",
      secondary: "7 zł",
    },
    {
      primary: "Vibromasaż",
      secondary: "7 zł",
    },
    {
      primary: "Bieżnia",
      secondary: "7 zł",
    },
    {
      primary: "Hydromasaż",
      secondary: "15 - 20 zł",
    },
  ],
};

const cennik: Array<ListCard> = [
  {
    title: "Porady lekarskie",
    items: [
      {
        primary: "Pediatra neurolog",
        secondary: "120 zł",
      },
      {
        primary: "Pediatra balneoklimatolog",
        secondary: "120 zł",
      },
      {
        primary: "Lekarz rehabilitacji",
        secondary: "120 zł",
      },
      {
        primary: "Chirurg dziecięcy",
        secondary: "150 zł",
      },
      {
        primary: "Dietetyk dziecięcy",
        secondary: "120 zł",
      },
      {
        primary: "Ortopeda dziecięcy",
        secondary: "120 zł",
      },
    ],
  },
  {
    title: "Kinezyterapia",
    items: [
      {
        primary: "Porada fizjoterapeutyczna",
        secondary: "120 zł",
      },
      {
        primary: "Terapia z fizjoterapeutą",
        secondary: "cenę ustala fizjoterapeuta w zależności od terapii",
      },
      {
        primary: "Metody terapeutyczne z naszej oferty więcej",
        secondary: "100 - 200 zł",
      },
      {
        primary: "Terapia zajęciowa/terapia ręki",
        secondary: "60 - 80 zł",
      },
    ],
  },
  {
    title: "Neurologopeda/Psycholog",
    items: [
      {
        primary: "Porada neurologopedyczna/psychologiczna",
        secondary: "100 zł",
      },
      {
        primary: "Wizyta neurologopedyczna/psychologiczna",
        secondary: "120 zł",
      },
    ],
  },
  {
    title: "Taping",
    items: [
      {
        primary: "Kinesiology taping",
        secondary: "30 - 60 zł",
      },
    ],
  },
];

const personel: ListCard[] = [
  {
    title: "Fizjoterapeuci:",
    items: [
      {
        primary: "mgr Violetta Bąk",
        secondary: "specjalista rehabilitacji ruchowej",
      },
      {
        primary: "mgr Agnieszka Jakieła",
      },
      {
        primary: "mgr Justyna Czerkiewicz",
      },
      {
        primary: "mgr Angelina Jurczak",
      },
      {
        primary: "mgr Małgorzata Ochałek",
      },
      {
        primary: "mgr Barbara Fornal",
      },
      {
        primary: "mgr Joanna Rozmus",
      },
    ],
  },
  {
    title: "Lekarze:",
    items: [
      {
        primary: "dr n. med. Joanna Kazanecka",
        secondary: "specjalista neurologii dziecięcej i pediatrii",
      },
      {
        primary: "lek. Anna Tuchowska",
        secondary: "specjalista pediatrii, balneolog",
      },
      {
        primary: "lek. Janusz Zima",
        secondary: "specjalista rehabilitacji medycznej i medycyny rodzinnej",
      },
    ],
  },
  {
    title: "Neurologopedzi:",
    items: [
      {
        primary: "mgr Anna Wajda",
      },
      {
        primary: "mgr Katarzyna Skrobek-Chmurska",
      },
      {
        primary: "mgr Joanna Paluch-Bożek",
      },
    ],
  },
  {
    title: "Psycholog:",
    items: [
      {
        primary: "mgr Katarzyna Pulnar",
      },
    ],
  },
  {
    title: "Wizyty prywatne:",
    items: [
      {
        primary: "dr n. med. Stanisław Zieliński",
        secondary:
          "specjalista chirurgii dziecięcej (rejestracja telefoniczna: 601-087-654)",
      },
      {
        primary: "dr. n. med. Joanna Kazanecka",
        secondary: "neurolog dziecięcy",
      },
      {
        primary: "lek. Piotr Szczerba",
        secondary: "ortopeda",
      },
      {
        primary: "dr n. med. Elżbieta Gabrowska",
        secondary: "dietetyk",
      },
    ],
  },
];

const RehabilitacjaDzieci: React.FC = function () {
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
          Rehabilitacja dzieci - Wspieramy pełen rozwój i zdrowie najmłodszych
        </Typography>
      </Box>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          textAlign="justify"
          fontStyle="italic"
          mt={2}
          sx={{
            "&::first-letter": {
              initialLetter: "2 1",
            },
          }}
        >
          Celem rehabilitacji dzieci jest zapewnienie im optymalnych warunków do
          pełnego rozwoju oraz przywrócenie sprawności w przypadku ograniczeń.
          Ośrodek rehabilitacyjny „Revita” oferuje szeroki zakres terapii
          dostosowanych specjalnie do potrzeb naszych podopiecznych w różnym
          wieku.
        </Typography>
      </Container>
      <Container maxWidth="xl">
        <Stack spacing={2} mt={2}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card>
                  <CardHeader title="Lista metod terapeutycznych dla dzieci" />
                  <CardContent>
                    <Typography>
                      Nasz zespół terapeutyczny posiada cenne kwalifikacje i
                      doświadczenie, dzięki którym korzystamy z różnorodnych
                      metod, takich jak:
                    </Typography>
                    <List>
                      {listaMetodTerap.map(({ primary, secondary }) => (
                        <ListItem key={`${primary}-${secondary}`}>
                          <ListItemText
                            primary={primary}
                            secondary={secondary}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card>
                  <CardHeader title="Wspieramy terapie innymi metodami" />
                  <CardContent>
                    <Typography>
                      W celu zapewnienia jeszcze lepszych efektów
                      terapeutycznych i pełnego rozwoju naszych podopiecznych,
                      nasz ośrodek korzysta także z innowacyjnych metod, takich
                      jak:
                    </Typography>
                    <List>
                      {listaInnychMetod.map(({ primary, secondary }) => (
                        <ListItem key={`${primary}-${secondary}`}>
                          <ListItemText
                            primary={primary}
                            secondary={secondary}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Typography>
                      Ponadto, oferujemy Viofor JPS system, masaż oraz
                      fizykoterapię jako dodatkowe wsparcie w osiągnięciu
                      optymalnych efektów terapeutycznych.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Card>
            <CardHeader
              title="Cennik rehabilitacji dzieci"
              subheader="Posiadamy umowę z NFZ. Poniższy cennik przedstawia ceny usług wykonywanych prywatnie."
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card>
                    <CardHeader title={fizykoterapia.title} />
                    <List dense>
                      {fizykoterapia.items.map(({ primary, secondary }) => (
                        <ListItem key={`${primary}-${secondary}`}>
                          <ListItemText
                            primary={primary}
                            secondary={secondary}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={2}>
                    {cennik.map(({ title, items }) => (
                      <Grid item key={title} xs={12} lg={6}>
                        <Card>
                          <CardHeader title={title} />
                          <List dense>
                            {items.map(({ primary, secondary }) => (
                              <ListItem key={`${primary}-${secondary}`}>
                                <ListItemText
                                  primary={primary}
                                  secondary={secondary}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              title="Zespół Specjalistów ds. Rehabilitacji Dzieci"
              subheader="Nasza kadra składa się z wykwalifikowanych specjalistów, których głównym celem jest zapewnienie wszechstronnej opieki rehabilitacyjnej dzieciom. Oto nasi eksperci:"
            ></CardHeader>
            <CardContent>
              <Grid spacing={2} container justifyContent="center">
                {personel.map(({ title, items }) => (
                  <Grid item key={title} xs={12} md={6} lg={2}>
                    <Card>
                      <CardHeader title={title} />
                      <List dense>
                        {items.map(({ primary, secondary }) => (
                          <ListItem key={`${primary}-${secondary}`}>
                            <ListItemText
                              primary={primary}
                              secondary={secondary}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Container maxWidth="md" sx={{ mt: 2 }}>
                <Typography>
                  Dodatkowo, z radością informujemy o możliwości konsultacji z
                  renomowanymi specjalistami w zakresie ortopedii dziecięcej -{" "}
                  <Typography component="span" fontWeight="bold" noWrap>
                    Dr. Kotulski oraz Dr. Artur Oberc
                  </Typography>
                  . Wizyty dostępne raz w miesiącu, zapisy pod{" "}
                  <Typography component="span" fontWeight="bold" noWrap>
                    nr 660-596-511
                  </Typography>
                  .
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Stack>
      </Container>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          textAlign="justify"
          fontStyle="italic"
          my={2}
          sx={{
            "&::first-letter": {
              initialLetter: "2 1",
            },
          }}
        >
          Zapraszamy do Niepublicznego Zakładu Opieki Zdrowotnej
          &quot;Revita&quot;, gdzie nasza zaangażowana kadra specjalistów z
          pasją i profesjonalizmem pracuje nad kompleksowym wsparciem rozwoju
          zdrowia dzieci. Naszym priorytetem jest indywidualne podejście do
          każdego podopiecznego, dzięki czemu osiągamy najlepsze rezultaty
          terapeutyczne.
        </Typography>
      </Container>
    </>
  );
};

export default RehabilitacjaDzieci;
