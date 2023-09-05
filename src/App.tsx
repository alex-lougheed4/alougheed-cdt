import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/common/Header";
import { CssBaseline, createTheme } from "@mui/material";
import HomePage from "./components/home/page";
import NavBar from "./components/common/NavBar";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#00c5ff",
        paper: "#03a9f4",
      },
      text: {
        primary: "rgba(255,255,255,0.87)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
