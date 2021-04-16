import React from 'react';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ModalAddProduct from 'src/containers/ModalAddProduct';
import ProfilPage from 'src/containers/ProfilPage';
import LoginForm from 'src/containers/LoginForm';
import TeamPage from 'src/components/TeamPage';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <HomePage />
    <TeamPage />
    <LoginForm />
    <SearchProduct />
    <SearchPharmachy />
    <ModalAddProduct />
    <ProfilPage />
    <Footer />
  </div>
);

// == Export
export default App;
