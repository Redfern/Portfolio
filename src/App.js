import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Jobs from './components/Jobs.jsx';
import Footer from './components/Footer.jsx';
import GlobalSyles from './components/styles/globalStyles.jsx';
import Skills from './components/Skills.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalSyles />
        <Header />
        <Introduction />
        <Skills />
        <Jobs />
        <Footer />
      </div>
    );
  }
}

export default App;
