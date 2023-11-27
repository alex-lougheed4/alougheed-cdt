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
      primary: {
        main: "#5B85D9",
      },
      secondary: {
        main: "#F0E6CD",
      },
      background: {
        default: "#F0E6CD",
        paper: "#5B85D9",
      },
      text: {
        primary: "rgba(0,0,0,0.87)",
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
