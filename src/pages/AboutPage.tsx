import { Paper, Stack, Typography } from "@mui/material";
import image from "../assets/aboutimage.png";

export default function page() {
  return (
    <>
      <Paper>
        <Typography variant="h4">About Andrew</Typography>
        <Stack direction="row" spacing={5}>
          <img alt="Andrew Lougheed" src={image}></img>

          <Typography variant="body1">
            Andrew is a qualified CDT with over 30 of denture experience running
            his own dental lab, producing high quality dentures putting patient
            care and comfort first.
          </Typography>
        </Stack>
      </Paper>
    </>
  );
}
