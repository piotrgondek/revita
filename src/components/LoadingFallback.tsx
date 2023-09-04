import { Box, CircularProgress } from "@mui/material";

const LoadingFallback: React.FC = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 64px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingFallback;
