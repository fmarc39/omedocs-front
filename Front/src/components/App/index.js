// == Import npm
import React from 'react';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ModalAddProduct from 'src/containers/ModalAddProduct';

// == Import

// == Composant
const App = () => (
  <div className="app">
    <HomePage />
    <Footer />
    <SearchProduct />
    <SearchPharmachy />
    <ModalAddProduct />
  </div>
);

// == Export
export default App;
