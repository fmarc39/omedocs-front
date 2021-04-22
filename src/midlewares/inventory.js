import api from 'src/api/api';

import {
  DELETE_ROW_FROM_INVENTORY,
  deleteRowFromState,
  saveNewProductInInventory,
  SUBMIT_ADD_PRODUCT,
} from 'src/actions/inventory';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_ROW_FROM_INVENTORY: {
      api
        .delete(`/deletefromInventory/${action.rowId}`)
        .then((result) => {
          console.log(result);
          store.dispatch(deleteRowFromState(result.id));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    case SUBMIT_ADD_PRODUCT: {
      // A la soumisison de formulaire addProduct
      // on fait une requête pour ajouter le produit en back

      // On récupère l'id de l'user pour l'envoyer au back
      const { user_id } = store.getState.user;
      // On récupère les champs du form dans le state pour les envoyers au back
      const {
        name,
        cis,
        quantity,
        price,
        expiration,
      } = store.getState().utils.product;
      api
        .post('/addproduct', {
          name,
          cis,
          quantity,
          price,
          expiration,
          user_id,
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
