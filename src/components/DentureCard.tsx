import { Box, Paper, Typography } from "@mui/material";

export type DentureCardProps = {
  image: string;
  name: string;
  description: string;
};

export const DentureCard = ({ image, name, description }: DentureCardProps) => (
  <Paper
    sx={{ backgroundColor: "#c1d8f0" }}
    component={Box}
    display="flex"
    flexDirection="column"
    alignItems="center"
    square
    elevation={5}
  >
    <Typography align="center" variant="h6">
      {name}
    </Typography>
    <Box
      component="img"
      sx={{
        height: 200,
        display: "block",
        maxWidth: 300,
        overflow: "hidden",
        width: "100%",
      }}
      src={image}
      alt={name}
    />
    <Typography textAlign="center" variant="body1">
      {description}
    </Typography>
  </Paper>
);
