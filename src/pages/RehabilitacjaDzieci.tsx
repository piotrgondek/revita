import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";
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
  Grid,
  CardMedia,
  ListSubheader,
  ListItemIcon,
} from "@mui/material";
import webp from "../assets/imgs/kids/039.webp";
import { ListCard } from "../types";
import dzieci from "../assets/imgs/kids/001.webp";
import dzieci2 from "../assets/imgs/kids/010.webp";
import dzieci3 from "../assets/imgs/kids/007.webp";
import dzieci4 from "../assets/imgs/kids/024.webp";
import HeroImage from "../components/HeroImage";
import ProminentText from "../components/ProminentText";
import React from "react";
import { Badge, CreditCard, SportsKabaddi } from "@mui/icons-material";
import img01 from "../assets/imgs/kids/001.webp";
import img02 from "../assets/imgs/kids/002.webp";
import img03 from "../assets/imgs/kids/003.webp";
import img04 from "../assets/imgs/kids/004.webp";
import img05 from "../assets/imgs/kids/005.webp";
import img06 from "../assets/imgs/kids/006.webp";
import img07 from "../assets/imgs/kids/007.webp";
import img08 from "../assets/imgs/kids/008.webp";
import img09 from "../assets/imgs/kids/009.webp";
import img10 from "../assets/imgs/kids/010.webp";
import img11 from "../assets/imgs/kids/011.webp";
import img12 from "../assets/imgs/kids/012.webp";
import img13 from "../assets/imgs/kids/013.webp";
import img14 from "../assets/imgs/kids/014.webp";
import img15 from "../assets/imgs/kids/015.webp";
import img16 from "../assets/imgs/kids/016.webp";
import img17 from "../assets/imgs/kids/017.webp";
import img18 from "../assets/imgs/kids/018.webp";
import img19 from "../assets/imgs/kids/019.webp";
import img20 from "../assets/imgs/kids/020.webp";
import img21 from "../assets/imgs/kids/021.webp";
import img22 from "../assets/imgs/kids/022.webp";
import img23 from "../assets/imgs/kids/023.webp";
import img24 from "../assets/imgs/kids/024.webp";
import img25 from "../assets/imgs/kids/025.webp";
import img26 from "../assets/imgs/kids/026.webp";
import img27 from "../assets/imgs/kids/027.webp";
import img28 from "../assets/imgs/kids/028.webp";
import img29 from "../assets/imgs/kids/029.webp";
import img30 from "../assets/imgs/kids/030.webp";
import img31 from "../assets/imgs/kids/031.webp";
import img32 from "../assets/imgs/kids/032.webp";
import img33 from "../assets/imgs/kids/033.webp";
import img34 from "../assets/imgs/kids/034.webp";
import img35 from "../assets/imgs/kids/035.webp";
import img36 from "../assets/imgs/kids/036.webp";
import img37 from "../assets/imgs/kids/037.webp";
import img38 from "../assets/imgs/kids/038.webp";
import img39 from "../assets/imgs/kids/039.webp";
import img40 from "../assets/imgs/kids/040.webp";
import img41 from "../assets/imgs/kids/041.webp";
import img42 from "../assets/imgs/kids/042.webp";
import img43 from "../assets/imgs/kids/043.webp";
import img44 from "../assets/imgs/kids/044.webp";
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
  .filter((img) => ![webp, dzieci, dzieci2, dzieci3, dzieci4].includes(img))
  .map((img) => ({
    original: img,
  }));

const listaMetodTerap: Pick<ListItemTextProps, "primary" | "secondary">[] = [
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
    secondary: "Innowacyjne rozwiązanie wspierające poprawę funkcji ruchowych.",
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

const listaInnychMetod: Pick<ListItemTextProps, "primary" | "secondary">[] = [
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
    primary: "Splinty",
    secondary:
      "Jedno- lub dwukomorowe nadmuchiwane rękawy stosowane na kończynę dolną bądź górną, mające szerokie zastosowanie u dzieci z różnymi zaburzeniami.",
  },
];

const cennik: ListCard[][] = [
  [
    {
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
    },
    {
      title: "Neurologopeda/Psycholog",
      items: [
        {
          primary: "Porada neurologopedyczna/ psychologiczna",
          secondary: "100 zł",
        },
        {
          primary: "Wizyta neurologopedyczna/ psychologiczna",
          secondary: "120 zł",
        },
      ],
    },
  ],
  [
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
          primary: "Metody terapeutyczne z naszej oferty",
          secondary: "100 - 200 zł",
        },
        {
          primary: "Terapia zajęciowa/terapia ręki",
          secondary: "60 - 80 zł",
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
  ],
];

const personel: ListCard[][] = [
  [
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
  ],
  [
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
  ],
];

const RehabilitacjaDzieci: React.FC = function () {
  return (
    <>
      <HeroImage
        img={webp}
        text="Rehabilitacja dzieci - Wspieramy pełen rozwój i zdrowie najmłodszych"
      />
      <Container maxWidth="md">
        <ProminentText>
          Celem rehabilitacji dzieci jest zapewnienie im optymalnych warunków do
          pełnego rozwoju oraz przywrócenie sprawności w przypadku ograniczeń.
          Ośrodek rehabilitacyjny „Revita” oferuje szeroki zakres terapii
          dostosowanych specjalnie do potrzeb naszych podopiecznych w różnym
          wieku.
        </ProminentText>
      </Container>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Box>
            <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12} lg={8}>
                <Card sx={{ height: 1 }}>
                  <CardMedia
                    component="img"
                    height="200px"
                    image={dzieci4}
                    alt="Zabieg"
                  />
                  <CardHeader title="Lista metod terapeutycznych dla dzieci" />
                  <CardContent>
                    <Typography>
                      Nasz zespół terapeutyczny posiada cenne kwalifikacje i
                      doświadczenie, dzięki którym korzystamy z różnorodnych
                      metod, takich jak:
                    </Typography>
                    <List>
                      {listaMetodTerap.map(({ primary, secondary }) => (
                        <ListItem
                          key={`${primary?.toString()}-${secondary?.toString()}`}
                        >
                          <ListItemIcon>
                            <SportsKabaddi />
                          </ListItemIcon>
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
              <Grid item xs={12} lg={4}>
                <Card sx={{ height: 1 }}>
                  <CardMedia
                    component="img"
                    height="200px"
                    image={dzieci}
                    alt="Zabieg"
                  />
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
                        <ListItem
                          key={`${primary?.toString()}-${secondary?.toString()}`}
                        >
                          <ListItemIcon>
                            <SportsKabaddi />
                          </ListItemIcon>
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
            <CardMedia
              component="img"
              height="200px"
              image={dzieci2}
              alt="Zabieg"
            />
            <CardHeader
              title="Cennik rehabilitacji dzieci"
              subheader="Współpracujemy z NFZ, co pozwala nam na świadczenie usług medycznych w ramach umowy. Poniższy cennik dotyczy oferty prywatnej dla naszych pacjentów."
            />
            <CardContent>
              <Grid container>
                {cennik.map((c, i) => (
                  <Grid key={i} item xs={12} md={6}>
                    <List disablePadding>
                      {c.map(({ title, items }) => (
                        <React.Fragment key={title}>
                          <ListSubheader>{title}</ListSubheader>
                          {items.map(({ primary, secondary }) => (
                            <ListItem
                              key={`${primary?.toString()}-${secondary?.toString()}`}
                            >
                              <ListItemIcon>
                                <CreditCard />
                              </ListItemIcon>
                              <ListItemText
                                primary={primary}
                                secondary={secondary ?? " "}
                              />
                            </ListItem>
                          ))}
                        </React.Fragment>
                      ))}
                    </List>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              component="img"
              height="200px"
              image={dzieci3}
              alt="Zabieg"
            />
            <CardHeader
              title="Zespół Specjalistów ds. Rehabilitacji Dzieci"
              subheader="Nasza kadra składa się z wykwalifikowanych specjalistów, których głównym celem jest zapewnienie wszechstronnej opieki rehabilitacyjnej dzieciom. Oto nasi eksperci:"
            ></CardHeader>
            <CardContent>
              <Grid container>
                {personel.map((c, i) => (
                  <Grid key={i} item xs={12} md={6}>
                    <List disablePadding>
                      {c.map(({ title, items }) => (
                        <React.Fragment key={title}>
                          <ListSubheader>{title}</ListSubheader>
                          {items.map(({ primary, secondary }) => (
                            <ListItem
                              key={`${primary?.toString()}-${secondary?.toString()}`}
                            >
                              <ListItemIcon>
                                <Badge />
                              </ListItemIcon>
                              <ListItemText
                                primary={primary}
                                secondary={secondary ?? " "}
                              />
                            </ListItem>
                          ))}
                        </React.Fragment>
                      ))}
                    </List>
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
        <ProminentText>
          Zapraszamy do Niepublicznego Zakładu Opieki Zdrowotnej
          &quot;Revita&quot;, gdzie nasza zaangażowana kadra specjalistów z
          pasją i profesjonalizmem pracuje nad kompleksowym wsparciem rozwoju
          zdrowia dzieci. Naszym priorytetem jest indywidualne podejście do
          każdego podopiecznego, dzięki czemu osiągamy najlepsze rezultaty
          terapeutyczne.
        </ProminentText>
      </Container>
      <Box mt={2}>
        <ImageGallery
          items={images}
          lazyLoad
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </Box>{" "}
    </>
  );
};

export default RehabilitacjaDzieci;
