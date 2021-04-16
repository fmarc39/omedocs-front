import React from 'react';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ModalAddProduct from 'src/containers/ModalAddProduct';
import ProfilPage from 'src/containers/ProfilPage';
import Page404 from 'src/components/404';
import InventoryPage from 'src/components/InventoryPage';
import PharmacyPage from 'src/components/PharmacyPage';
import ProductPage from 'src/components/ProductPage';
import LoginForm from 'src/containers/LoginForm';
import TeamPage from 'src/components/TeamPage';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <LoginForm />
  </div>
);

// == Export
export default App;

// <div className="app">
//     <HomePage />
//     <ModalAddProduct />
//     <TeamPage />
//     <SearchProduct />
//     <SearchPharmachy />
//     <InventoryPage />
//     <ProductPage />
//     <PharmacyPage />
//     <ProfilPage />
//     <LoginForm />
//     <Page404 />
//     <Footer />
//   </div>