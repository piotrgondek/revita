import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import webp from "../assets/rehabilitacja-domowa.webp";
import { ListCard } from "../types";
import zabieg from "../assets/zabieg3.webp";
import zabieg2 from "../assets/zabieg4.webp";
import HeroImage from "../components/HeroImage";
import ProminentText from "../components/ProminentText";
import { Badge, CreditCard } from "@mui/icons-material";

const cennik: ListCard = {
  title: "Cennik Domowej Rehabilitacji",
  subheader:
    "Nasza placówka posiada umowę z NFZ. Poniżej przedstawiamy ceny usług wykonywanych prywatnie:",
  items: [
    {
      primary: "Wizyta fizjoterapeutyczna",
      secondary: "120 - 150 zł",
    },
    {
      primary: "Logopeda",
      secondary: "130 zł",
    },
    {
      primary: "Psycholog",
      secondary: "130 zł",
    },
    {
      primary: "Kinesiology Taping",
      secondary: "30 - 60 zł",
    },
  ],
};

const specjalisci: ListCard[] = [
  {
    title: "Fizjoterapeuci",
    items: [
      {
        primary: "mgr Średniawa Renata",
      },
      {
        primary: "mgr Katarzyna Zima",
      },
      {
        primary: "mgr Katarzyna Kandefer",
      },
      {
        primary: "mgr Barbara Fornal",
      },
      {
        primary: "mgr Damian Łysik",
      },
      {
        primary: "mgr Ewa Łysik",
      },
      {
        primary: "tech. masażysta Katarzyna Woźniak",
      },
      {
        primary: "tech. fizjoterapii Katarzyna Safin",
      },
    ],
  },
  {
    title: "Lekarz",
    items: [
      {
        primary: "lek. Andrzej Kaczmarczyk",
        secondary: "specjalista rehabilitacji medycznej",
      },
    ],
  },
];

const RehabilitacjaDomowa: React.FC = function () {
  return (
    <>
      <HeroImage
        img={webp}
        text="Rehabilitacja Domowa - Ćwiczenia czynne i terapie w zaciszu Twojego domu"
      />
      <Container maxWidth="md">
        <ProminentText>
          Zdajemy sobie sprawę, że niektórzy z naszych pacjentów z powodu złego
          stanu zdrowia nie mogą przybyć do naszego ośrodka na terapię Vojty,
          terapię dla dorosłych czy inne zajęcia rehabilitacyjne. Dlatego, aby
          sprostać Państwa potrzebom, nasz personel oferuje ćwiczenia czynne
          oraz masaże w domu.
        </ProminentText>
      </Container>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Card sx={{ height: 1 }}>
            <CardMedia
              component="img"
              height="200px"
              image={zabieg}
              alt="Zabieg"
            />
            <CardHeader title={cennik.title} subheader={cennik.subheader} />
            <CardContent>
              <List disablePadding>
                {cennik.items.map(({ primary, secondary }) => (
                  <ListItem
                    key={`${primary?.toString()}-${secondary?.toString()}`}
                  >
                    <ListItemIcon>
                      <CreditCard />
                    </ListItemIcon>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
          <Card>
            <CardMedia
              component="img"
              height="200px"
              image={zabieg2}
              alt="Zabieg"
            />
            <CardHeader
              title="Zespół Specjalistów ds. Rehabilitacji Domowej"
              subheader="Nasz wykwalifikowany zespół specjalistów oferuje rehabilitację, ćwiczenia czynne, kontrolę stanu zdrowia oraz wykonywanie masaży w domu. Prosimy o kontakt z osobami zainteresowanymi rehabilitacją domową."
            />
            <CardContent>
              <Grid container>
                {specjalisci.map(({ title, items }) => (
                  <Grid item xs={12} lg={6} key={title}>
                    <List disablePadding>
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
                            secondary={secondary}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Stack>
      </Container>
      <Container maxWidth="md">
        <ProminentText>
          Jesteśmy gotowi przyjść do Państwa domu, aby dostosować terapię
          indywidualnie do Państwa potrzeb i zapewnić pełną opiekę
          rehabilitacyjną w przyjemnej i komfortowej atmosferze. Zapraszamy do
          skorzystania z naszych usług i odzyskania pełni zdrowia w zaciszu
          własnego domu.
        </ProminentText>
      </Container>
    </>
  );
};

export default RehabilitacjaDomowa;
