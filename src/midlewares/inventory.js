import api from 'src/api/api';
import { openSnackBar, closeModalProduct } from 'src/actions/utils';
import {
  DELETE_ROW_FROM_INVENTORY,
  SUBMIT_ADD_PRODUCT,
  FETCH_INVENTORY,
  saveInventory,
  deleteRowFromState,
  saveNewProductInInventory,
} from 'src/actions/inventory';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // Récupérer l'inventaire
    case FETCH_INVENTORY:
      {
        const { user_id } = store.getState().user;
        api
          .get(`/inventory/${user_id}`)
          .then((result) => result.data)
          .then(({ userInventory }) => {
            console.log(userInventory);
            // sauvegarder l'inventaire dans le state
            store.dispatch(saveInventory(userInventory));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return next(action);
    case DELETE_ROW_FROM_INVENTORY: {
      api
        .delete(`/deleteProduct/${action.rowId}`)
        .then((result) => {
          console.log(result);
          store.dispatch(deleteRowFromState(result.product[0].id));
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
      const { user_id } = store.getState().user;
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
        .then((result) => result.data)
        .then(({ addedProduct }) => {
          console.log(addedProduct);
          // On dispatch l'action qui va sauvegarder le nouveau produit dans la state
          store.dispatch(saveNewProductInInventory(addedProduct[0]));
          store.dispatch(closeModalProduct());
          store.dispatch(
            openSnackBar(
              "Le produit a bien été rajouter à l'inventaire",
              'success'
            )
          );
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(
            openSnackBar(
              "Un souci est survenu lors de l'ajout d'un produit",
              'error'
            )
          );
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
