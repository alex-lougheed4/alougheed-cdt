import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/common/Header";
import { CssBaseline, createTheme } from "@mui/material";
import NavBar from "./components/common/NavBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

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
        default: "#3383FF",
        paper: "#3f51b5",
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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
