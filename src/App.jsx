import React, { Component } from "react";
import { ThemeProvider, styled, StyleSheetManager } from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router";
import Header from "./components/Header.jsx";
import GlobalStyles from "./components/styles/globalStyles.jsx";
import theme from "./theme.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import CV from "./pages/CV.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`;

const queryClient = new QueryClient();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyles />
              <Header />
              <Container>
                <BrowserRouter
                  future={{
                    v7_relativeSplatPath: true,
                  }}
                >
                  <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/cv" element={<CV />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </Container>
            </React.Fragment>
          </ThemeProvider>
        </QueryClientProvider>
      </React.Fragment>
    );
  }
}

export default App;
