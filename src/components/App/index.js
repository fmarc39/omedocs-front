import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'src/components/HomePage';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
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
      <Route path="/profil">
        <ProfilPage />
      </Route>
      <Route path="/inventory">
        <InventoryPage />
      </Route>
      <Route path="/products">
        <PharmacyPage />
      </Route>
      <Route path="/searchproduct">
        <SearchProduct />
      </Route>
      <Route path="/searchpharmacy">
        <SearchPharmachy />
      </Route>
      <Route exact path="/teampage">
        <TeamPage />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
