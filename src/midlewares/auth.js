import api from 'src/api/api';

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
      const { email, password } = store.getState().user;
      api
        .post('/login', {
          email,
          password,
        })
        .then((result) => result.data)
        // Voir ce que retourne l'api pour completer
        // ( penser à modif le reducer et l'action login en fonction)
        .then(({ accesToken }) => {
          localStorage.setItem('jwtoken', accesToken);
          store.dispatch(login(accesToken));
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
