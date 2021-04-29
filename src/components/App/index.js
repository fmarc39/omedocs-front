// Import React
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import react-router-dom
import {
  Switch, Route, Redirect,
} from 'react-router-dom';

// Import COMPONENTS
import HomePage from 'src/components/HomePage';
import DarkMode from 'src/components/DarkMode/';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ProfilPage from 'src/containers/ProfilPage';
import InventoryPage from 'src/containers/InventoryPage';
import PharmacyPage from 'src/components/PharmacyPage';
import LoginForm from 'src/containers/LoginForm';
import ResetPassword from 'src/components/LoginForm/ResetPassword/';
import TeamPage from 'src/components/TeamPage';
import Cart from 'src/containers/CartPage';
import Page404 from 'src/components/404';
import SnackBar from 'src/containers/SnackBar';

import './styles.scss';
import { DonutLargeSharp } from '@material-ui/icons';

const App = ({ isLoading, logged, rehydrate }) => {
  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <div className="app">
      <SnackBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/darkmode">
          <DarkMode />
        </Route>
        <Route exact path="/login">
          {logged ? <Redirect to="/profil" /> : <LoginForm />}
        </Route>
        <Route exact path="/login/reset">
          <ResetPassword />
        </Route>
        <Route path="/profil">{!logged ? <Redirect to="/" /> : <ProfilPage />}</Route>
        <Route path="/inventory">{!logged ? <Redirect to="/" /> : <InventoryPage />}</Route>
        <Route path="/establishment/:id">
          <PharmacyPage />
        </Route>
        <Route path="/searchproduct">{!logged ? <Redirect to="/" /> : <SearchProduct />}</Route>
        <Route path="/searchestablishement">
          {!logged ? <Redirect to="/" /> : <SearchPharmachy />}
        </Route>
        <Route exact path="/cart">
          {!logged ? <Redirect to="/" /> : <Cart />}
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
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  rehydrate: PropTypes.func.isRequired,
};

// == Export
export default App;
