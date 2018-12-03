import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Jobs from './components/Jobs.jsx';
import Footer from './components/Footer.jsx';
import GlobalSyles from './components/styles/globalStyles.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalSyles />
        <Header />
        <Introduction />
        <Jobs />
        <Footer />
      </div>
    );
  }
}

export default App;
