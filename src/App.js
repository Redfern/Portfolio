import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header.jsx';
import Jobs from './components/Jobs.jsx';
import Footer from './components/Footer.jsx';
import GlobalStyles from './components/styles/globalStyles.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Message from './components/Message.jsx';

const theme = {
  bootstrapBreakpoints: {
    small: '(min-width: 576px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 992px)',
    extraLarge: '(min-width: 1200px)'
  },
}

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
