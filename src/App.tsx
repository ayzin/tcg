import React from "react";
import "./App.css";

// project import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./pages/HomePage";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ElevateAppBar from "layout/Header/Header";
import { Route, Routes } from "react-router-dom";

const THEME = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={THEME}>
        <CssBaseline />
        <ElevateAppBar />
        <QueryClientProvider client={queryClient}>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
          
        </QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
