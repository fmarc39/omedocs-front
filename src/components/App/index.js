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

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    {/* <HomePage /> */}
    {/* <SearchProduct /> */}
    {/* <SearchPharmachy /> */}
    {/* <ModalAddProduct />
      <ProfilPage />
      <Footer />
      <LoginForm /> */}
    {/* <InventoryPage /> */}
    <PharmacyPage />
  </div>
);

// == Export
export default App;
