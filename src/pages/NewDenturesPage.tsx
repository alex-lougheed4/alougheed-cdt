import { Grid, Paper, Typography } from "@mui/material";
import { DentureCard } from "../components/DentureCard";
import chromeFullOne from "../assets/CarouselImages/chromeFull1.png";
import chromePartial from "../assets/CarouselImages/chromePartial.png";
import implantFullOne from "../assets/CarouselImages/implantFull1.png";

export default function page() {
  return (
    <>
      <Paper sx={{ paddingBottom: 1 }}>
        <Typography variant="h4">New Dentures</Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={4}>
            <DentureCard
              name="Full"
              image={chromeFullOne}
              description="A full denture consists of a full array of false teeth with a wide variety of shades to suit your preference."
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Partial"
              image={chromePartial}
              description="A full denture consists of a partial set of false teeth with a wide variety of shades to suit your preference to match existing teeth as closely as possible. There are a number of methods of attaching these dentures to your existing teeth, please ask to find out more."
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Implant"
              image={implantFullOne}
              description="An implant-supported denture is an oral appliance that replaces several teeth at once. It’s similar to a traditional denture. But instead of resting on top of your gums, an implant-supported denture attaches directly to your jawbone using dental implants."
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Copy"
              image={implantFullOne}
              description="A copy denture is a denture made from an existing denture in-case you need a new one or spare"
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Chrome - Full"
              image={chromeFullOne}
              description="Chrome Dentures are lightweight, strong, hard wearing and can last 10 or more years. Chrome dentures can be used in both the upper and lower jaw.

              They fit in place over the teeth which prevents movement and irritation."
            />
          </Grid>
          <Grid item xs={4}>
            <DentureCard
              name="Chrome - Partial"
              image={chromePartial}
              description="Chrome Dentures are lightweight, strong, hard wearing and can last 10 or more years. Chrome dentures can be used in both the upper and lower jaw.

              They fit in place using a metal clasp which prevents movement and irritation. "
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ marginTop: 0.5 }}>
        <Typography textAlign="center" variant="h4">
          General Prices as follow, please book a free consultation for more
          tailored treatment and pricing.
        </Typography>
      </Paper>
    </>
  );
}
