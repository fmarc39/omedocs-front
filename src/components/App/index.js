import React from 'react';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ModalAddProduct from 'src/containers/ModalAddProduct';
import ProfilPage from 'src/containers/ProfilPage';
import LoginForm from 'src/components/LoginForm';
import Page404 from 'src/components/404';
import InventoryPage from 'src/components/InventoryPage';
import PharmacyPage from 'src/components/PharmacyPage';
import ProductPage from 'src/components/ProductPage';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <ProfilPage />
  </div>
);

// == Export
export default App;
