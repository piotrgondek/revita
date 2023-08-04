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
import jpg from "../assets/rehabilitacja-domowa.jpg";
import { ListCard } from "../types";
import zabieg from "../assets/zabieg3.jpg";
import zabieg2 from "../assets/zabieg4.jpg";

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

const RehabilitacjaDomowa: React.FC = function () {
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
          Rehabilitacja Domowa - Ćwiczenia czynne i terapie w zaciszu Twojego
          domu
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
          Zdajemy sobie sprawę, że niektórzy z naszych pacjentów z powodu złego
          stanu zdrowia nie mogą przybyć do naszego ośrodka na terapię Vojty,
          terapię dla dorosłych czy inne zajęcia rehabilitacyjne. Dlatego, aby
          sprostać Państwa potrzebom, nasz personel oferuje ćwiczenia czynne
          oraz masaże w domu.
        </Typography>
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
                <CardHeader title={cennik.title} subheader={cennik.subheader} />
                <CardContent>
                  <List dense>
                    {cennik.items.map(({ primary, secondary }) => (
                      <ListItem key={`${primary}-${secondary}`}>
                        <ListItemText primary={primary} secondary={secondary} />
                      </ListItem>
                    ))}
                  </List>
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
                <CardHeader
                  title="Zespół Specjalistów ds. Rehabilitacji Domowej"
                  subheader="Nasz wykwalifikowany zespół specjalistów oferuje rehabilitację, ćwiczenia czynne, kontrolę stanu zdrowia oraz wykonywanie masaży w domu. Prosimy o kontakt z osobami zainteresowanymi rehabilitacją domową."
                />
                <CardContent>
                  <Typography variant="h6">Nasi specjaliści</Typography>
                  <Stack direction="row" spacing={2}>
                    <Box flex="0 0 50%">
                      <Typography variant="subtitle1">
                        Fizjoterapeuci:
                      </Typography>
                      <List dense disablePadding>
                        <ListItem>
                          <ListItemText primary="mgr Średniawa Renata" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="mgr Katarzyna Zima" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="mgr Katarzyna Kandefer" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="mgr Barbara Fornal" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="mgr Damian Łysik" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="mgr Ewa Łysik" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="tech. masażysta Katarzyna Woźniak" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="tech. fizjoterapii Katarzyna Safin" />
                        </ListItem>
                      </List>
                    </Box>
                    <Box flex="0 0 50%">
                      <Typography variant="subtitle1">Lekarz:</Typography>
                      <List dense disablePadding>
                        <ListItem>
                          <ListItemText primary="lek. Andrzej Kaczmarczyk - specjalista rehabilitacji medycznej" />
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
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
          Jesteśmy gotowi przyjść do Państwa domu, aby dostosować terapię
          indywidualnie do Państwa potrzeb i zapewnić pełną opiekę
          rehabilitacyjną w przyjemnej i komfortowej atmosferze. Zapraszamy do
          skorzystania z naszych usług i odzyskania pełni zdrowia w zaciszu
          własnego domu.
        </Typography>
      </Container>
    </>
  );
};

export default RehabilitacjaDomowa;
