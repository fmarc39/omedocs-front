import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
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
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/profil">
        <ProfilPage />
      </Route>
      <Route exact path="/inventory">
        <InventoryPage />
      </Route>
      <Route exact path="/products">
        <PharmacyPage />
      </Route>
      <Route exact path="/searchproduct">
        <SearchProduct />
      </Route>
      <Route exact path="/searchpharmacy">
        <SearchPharmachy />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
