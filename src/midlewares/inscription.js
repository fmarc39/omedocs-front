import api from 'src/api/api';

import { LAUCH_INSCRIPTION_FORM } from 'src/actions/user';
import { openSnackBar, openErrorInputValidation } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LAUCH_INSCRIPTION_FORM:
      {
        const {
          establishment,
          email,
          confirmEmail,
          phoneNumber,
          rpss,
          type,
          city,
          adress,
          zipCode,
          password,
          confirmPassword,
        } = store.getState().user;

        if (email !== confirmEmail) {
          store.dispatch(openErrorInputValidation('Les emails doivent correspondres'));
        } else if (password !== confirmPassword) {
          store.dispatch(openErrorInputValidation('Les mots de passe doivent correspondres'));
        } else {
          api
            .post('/signup', {
              establishment,
              email,
              phoneNumber,
              rpss,
              type,
              city,
              adress,
              zipCode,
              password,
            })
            .then(() => {
              console.log('Inscription ok');
              store.dispatch(
                openSnackBar('Merci de vous être inscrit. Vous pouvez vous connectez', 'success'),
              );
            })
            .catch((error) => {
              console.error(error);
              store.dispatch(
                openSnackBar(
                  "Une erreur s'est produite lors de l'inscription, veuillez réessayer",
                  'error',
                ),
              );
            });
        }
      }
      return next(action);

    default:
      return next(action);
  }
};
