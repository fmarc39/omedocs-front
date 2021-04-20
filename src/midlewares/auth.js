import api from 'src/api/api';
import React from 'react'
import {Redirect} from 'react-router-dom';

import { REHYDRATE, SUBMIT_LOGIN, LOGOUT, login } from 'src/actions/user';
import { openSnackBar } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REHYDRATE: {
      const token = localStorage.getItem('jwtoken');
      if (token) {
        store.dispatch(login(token));
      }
      return next(action);
    }
    case LOGOUT: {
      // Au logout, on pense bien à supprimer les localstorage
      // Sinon on reste connecté au prochain refresh de la page
      localStorage.removeItem('jwtoken');
      return next(action);
    }
    case SUBMIT_LOGIN: {
      const { emailConnexion, passwordConnexion } = store.getState().user;
      api
        .post('/login', {
          emailConnexion,
          passwordConnexion,
        })
        .then((result) => result.data)
        .then(({user, accessToken}) => {
          console.log(user.user[0], accessToken)
          //Je stock le token et le user dans le localStorage
         localStorage.setItem('jwtoken', accessToken);
         localStorage.setItem('user', user.user[0]);
          // Je met le token dans les params de l'api
        api.defaults.headers.common.Authorization = `Bearer ${action.token}`;
         store.dispatch(login(user.user[0], accessToken));
            store.dispatch(
            openSnackBar(
              "Connexion réussi",
              'success',
            ),
          );
          <Redirect to="/profil" />
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(
            openSnackBar(
              "Une erreur s'est produite lors de la connexion, veuillez réessayer",
              'error',
            ),
          );
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
