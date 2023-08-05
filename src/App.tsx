import React from "react";
import "./App.css";

// project import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomePage } from "./pages/HomePage";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ElevateAppBar from "layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import FloatingButton from "layout/Footer/FloatingButton";

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevateAppBar />
      <QueryClientProvider client={queryClient}>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
        <FloatingButton />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
