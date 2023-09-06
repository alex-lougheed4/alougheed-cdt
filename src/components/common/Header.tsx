import { Box, Stack, Typography } from "@mui/material";
import LogoIcon from "../../assets/logo.svg";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Header() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Box
        flexGrow={2}
        paddingLeft={1}
        sx={{ display: "flex" }}
        alignItems="center"
      >
        <object type="image/svg+xml" aria-label="logo" data={LogoIcon}></object>
        <Box marginLeft={2}>
          <Typography variant="h3">Andrew Lougheed</Typography>
          <Typography variant="body1">Dip CDT RCSEd</Typography>
        </Box>
      </Box>
      <Box
        flexGrow={1}
        paddingLeft={50}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <PhoneIcon fontSize="large" />
        <Box marginLeft={2}>
          <Typography variant="body1">07969503244</Typography>
          <Typography variant="body1">alougheedcdt@gmail.com</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
