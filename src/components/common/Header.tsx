import { Box, Stack, Typography } from "@mui/material";
import LogoIcon from "../../assets/logo.svg";
import PhoneIcon from "@mui/icons-material/Phone";

export default function page() {
  return (
    <Stack direction="row" alignItems="center" spacing={50}>
      <Box paddingLeft={1} sx={{ display: "flex" }} alignItems="center">
        <object type="image/svg+xml" aria-label="logo" data={LogoIcon}></object>
        <Box marginLeft={2}>
          <Typography variant="h3">Andrew Lougheed</Typography>
          <Typography variant="body1">Dip CDT RCSEd</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <PhoneIcon fontSize="large" />
        <Box>
          <Typography variant="body1">07969503244</Typography>
          <Typography variant="body1">alougheedCDT@gmail.com</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
