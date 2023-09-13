import { Grid, Paper, Typography } from "@mui/material";
import { DentureCard } from "../components/DentureCard";
import chromeFullOne from "../assets/CarouselImages/chromeFull1.png";
import chromePartial from "../assets/CarouselImages/chromePartial.png";
import implantFullOne from "../assets/CarouselImages/implantFull1.png";

export default function page() {
  return (
    <>
      <Paper>
        <Typography variant="h4">New Dentures</Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={4}>
            <DentureCard
              name="Full"
              image={chromeFullOne}
              description="This is a Full Denture"
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Partial"
              image={chromePartial}
              description="This is a Partial Denture"
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Implant"
              image={implantFullOne}
              description="This is an Implant Denture"
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Copy"
              image={implantFullOne}
              description="This is a Copy Denture"
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Chrome - Full"
              image={chromeFullOne}
              description="This is a Chrome Denture"
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Chrome - Partial"
              image={chromePartial}
              description="This is a Chrome Denture"
            />
          </Grid>
        </Grid>
        <Typography variant="body1">
          General Prices as follow, please book a free consultation for more
          tailored treatment and pricing.
        </Typography>
      </Paper>
    </>
  );
}
