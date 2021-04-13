// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';

// == Import

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <HomePage />
    <Footer />
  </div>
);

// == Export
export default App;
