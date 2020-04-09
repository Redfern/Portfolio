import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header.jsx";
import Jobs from "./components/Jobs.jsx";
import Footer from "./components/Footer.jsx";
import GlobalStyles from "./components/styles/globalStyles.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Message from "./components/Message.jsx";
import theme from "./theme";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyles />
            <Header />
            <Skills />
            <Jobs />
            <Projects />
            <Footer />
            <Message />
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
