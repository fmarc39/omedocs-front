// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';

// Import COMPONENTS
import HomePage from 'src/components/HomePage';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ProfilPage from 'src/containers/ProfilPage';
import InventoryPage from 'src/containers/InventoryPage';
import PharmacyPage from 'src/components/PharmacyPage';
import ProductPage from 'src/components/ProductPage';
import LoginForm from 'src/containers/LoginForm';
import TeamPage from 'src/components/TeamPage';
import Cart from 'src/components/Cart';
import Payment from 'src/components/Payment/Checkout';
import Page404 from 'src/components/404';
import SnackBar from 'src/containers/SnackBar';

import './styles.scss';
// == Composant

// == Composant
const App = ({ isLoading, logged }) => (
  <div className="app">
    <SnackBar />
    {/* Mise en place du composant "Switch"
     de react-router-dom pour la mise en place du routing des pages */}
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        {logged ? <Redirect to="/profil" /> : <LoginForm />}
      </Route>
      <Route path="/profil">{!logged ? <Redirect to="/login" /> : <ProfilPage />}</Route>
      <Route path="/inventory">
        <InventoryPage />
      </Route>
      <Route path="/products">
        <PharmacyPage />
      </Route>
      <Route path="/product/id">
        <ProductPage />
      </Route>
      <Route path="/searchproduct">
        <SearchProduct />
      </Route>
      <Route path="/searchestablishement">
        <SearchPharmachy />
      </Route>
      <Route exact path="/teampage">
        <TeamPage />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route patch="/checkout">
        <Payment />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </div>
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

// == Export
export default App;
