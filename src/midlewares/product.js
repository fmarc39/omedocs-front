import api from 'src/api/api';
import {
  openSnackBar,
  openErrorInputValidation,
  SUBMIT_ADD_PRODUCT,
  saveNewProductInInventory,
} from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_ADD_PRODUCT: {
      // A la soumisison de formulaire addProduct
      // on fait une requête pour ajouter le produit en back

      // On récupère l'id de l'user pour l'envoyer au back
      const { id } = store.getState.user;
      // On récupère les champs du form dans le state pour les envoyers au back
      const {
        name,
        cis,
        pathology,
        quantity,
        price,
        expiration,
      } = store.getState().utils.product;
      api
        .post('/addproduct', {
          name,
          cis,
          pathology,
          quantity,
          price,
          expiration,
          id,
        })
        .then((product) => {
          console.log(product);
          // On dispatch l'action qui va sauvegarder le nouveau produit dans la state
          store.dispatch(saveNewProductInInventory(product));
        })
        .catch((error) => console.log(error));
      break;
    }
    default:
      return next(action);
  }
};
