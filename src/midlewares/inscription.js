import api from 'src/api/api';

import { LAUCH_INSCRIPTION_FORM } from 'src/actions/user';
import { openSnackBar } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LAUCH_INSCRIPTION_FORM:
      {
        const {
          establishment,
          email,
          phoneNumber,
          rpss,
          type,
          city,
          adress,
          zipCode,
          password,
        } = store.getState().user;
        api.post('/signup', {
          establishment,
          email,
          phoneNumber,
          rpss,
          type,
          city,
          adress,
          zipCode,
          password,
        });
        /* .then
          // Gérer les succés de l'inscription ici ( bool open snackBar à true )
          (); */
      }
      console.log('passage dans le midleware login');
      store.dispatch(openSnackBar(true, 'test message', 'success'));
      return next(action);
    default:
      return next(action);
  }
};
