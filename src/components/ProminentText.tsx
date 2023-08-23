import { Typography, TypographyProps, styled } from "@mui/material";

const ProminentText = styled<
  React.FC<React.PropsWithChildren<TypographyProps>>
>(function ProminentTextInner({ children, ...rest }) {
  return (
    <Typography variant="h6" {...rest}>
      {children}
    </Typography>
  );
})({
  "&::first-letter": {
    initialLetter: "2 1",
  },
  textAlign: "justify",
  fontStyle: "italic",
  marginTop: "4rem",
  marginBottom: "4rem",
});

export default ProminentText;
