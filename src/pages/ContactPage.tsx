import { Paper, Typography } from "@mui/material";

export default function page() {
  return (
    <Paper elevation={10} sx={{ marginTop: 1 }}>
      <Typography variant="h4">Contact Details</Typography>
      <Typography variant="body2">
        For Inquiries please call: <strong>07969503244</strong> or email
        <strong>alougheedcdt@gmail.com</strong>
      </Typography>
    </Paper>
  );
}
