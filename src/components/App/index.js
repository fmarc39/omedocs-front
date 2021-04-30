// Import React
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import store from 'src/store';
import { saveState } from 'src/locaStorage';
// Import react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';

// Import COMPONENTS
import HomePage from 'src/components/HomePage';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ProfilPage from 'src/containers/ProfilPage';
import InventoryPage from 'src/containers/InventoryPage';
import PharmacyPage from 'src/containers/PharmacyPage';
import LoginForm from 'src/containers/LoginForm';
import TeamPage from 'src/components/TeamPage';
import Cart from 'src/containers/CartPage';
import Page404 from 'src/components/404';
import SnackBar from 'src/containers/SnackBar';
import Home from 'src/components/Home';

import './styles.scss';
import { DonutLargeSharp } from '@material-ui/icons';

const App = ({ isLoading, logged, rehydrate }) => {
  useEffect(() => {
    rehydrate();
    // const cartFromLocalStorage = localStorage.getItem('cart');
    // if (!cartFromLocalStorage) {
    //   localStorage.setItem('cart', []);
    // }
  }, []);

  // Sauvegarde du state dans le local storage pour pouvoir faire perssisté le panier
  store.subscribe(() => {
    saveState({
      cart: store.getState().cart.cart,
      pharmacyToOrder: store.getState().cart.pharmacyToOrder,
    });
  });

  return (
    <div className="app">
      <SnackBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/teampage">
          <TeamPage />
        </Route>

        <Route exact path="/login">
          {logged ? <Redirect to="/home" /> : <LoginForm />}
        </Route>

        {logged && (
          <>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profil">
              <ProfilPage />
            </Route>
            <Route path="/inventory">
              <InventoryPage />
            </Route>
            <Route path="/establishment/:id">
              <PharmacyPage />
            </Route>
            <Route path="/searchproduct">
              <SearchProduct />
            </Route>
            <Route path="/searchestablishement">
              <SearchPharmachy />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </>
        )}

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
