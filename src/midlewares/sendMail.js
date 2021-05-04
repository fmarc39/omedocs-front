import emailjs, { init } from 'emailjs-com';
import { SEND_MAIL } from 'src/actions/contactUs';
import { openSnackBar } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MAIL:
      {
        const id = init('user_w2JrhnK7Zzk1BiTcPtkSN');
        const { message, email, firstName, lastName } = store.getState().contactUs;
        console.log(message, email, lastName, firstName);
        emailjs
          .send(
            'service_x6zecr7',
            'template_nxsu28q',
            {
              email,
              firstName,
              lastName,
              message,
            },
            id,
          )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            store.dispatch(
              openSnackBar(
                "Votre message est bien partis, merci d'avoir pris le temps de nous écrire",
                'success',
              ),
            );
          })
          .catch((error) => {
            console.error(error);
            store.dispatch(
              openSnackBar(
                "Il y a eu un problème lors de l'envoie du message, veuillez réessayer",
                'error',
              ),
            );
          });
      }
      return next(action);
    default:
      return next(action);
  }
};
