import api from 'src/api/api';

import { REHYDRATE, SUBMIT_LOGIN, LOGOUT, login } from 'src/actions/user';

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
      const { email, password } = store.getState().user;
      api
        .post('/login', {
          email,
          password,
        })
        .then((result) => result.data)
        // Voir ce que retourne l'api pour completer
        // ( penser à modif le reducer et l'action login en fonction)
        .then((/* le user ici avec le token */) => {
          localStorage.setItem('jwtoken', token);
          store.dispatch(login(/* user + token */));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
