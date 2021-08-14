import React from 'react';
import './styles/App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Section from './common/Section';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Section />
      <Footer />
    </React.Fragment>
  );
}

export default App;
