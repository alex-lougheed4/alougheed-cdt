import { Box, Paper } from "@mui/material";
import ImageCarousel from "../components/ImageCarousel";

export default function page() {
  return (
    <>
      <Paper>
        <Box display="flex" alignItems="center" justifyContent="center">
          <ImageCarousel />
        </Box>
      </Paper>
    </>
  );
}
