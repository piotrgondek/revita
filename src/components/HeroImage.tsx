import { Box, Typography, alpha } from "@mui/material";

export type HeroImageProps = {
  img: string;
  text: string;
};

const HeroImage: React.FC<HeroImageProps> = function ({ img, text }) {
  return (
    <Box
      sx={{
        height: "45vh",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Typography
        sx={(theme) => ({
          backgroundColor: alpha(
            theme.palette.getContrastText(theme.palette.primary.main),
            0.6,
          ),
          p: 2,
          display: "flex",
          position: "absolute",
          bottom: 0,
          color: theme.palette.primary.main,
        })}
        component="span"
        variant="h4"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default HeroImage;
