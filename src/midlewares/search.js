import {
  SEARCH_PRODUCT,
  SEARCH_ESTABLISHMENT,
  resultSearchEstablishment,
  resultSearchProduct,
} from 'src/actions/search';
import { openSnackBar } from 'src/actions/utils';
import api from 'src/api/api';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      {
        const { searchProductInputValue } = store.getState().search;
        const { searchProductSelectValue } = store.getState().search;

        // Requête par name ou cis selon la valeur du select
        let searchRequest = '';

        if (searchProductSelectValue === 'name') {
          searchRequest = '/productsbyname';
        } else {
          searchRequest = '/productsbycis';
        }

        api
          .get(searchRequest, { params: { value: searchProductInputValue } })
          .then((result) => result.data)
          .then(({ products }) => {
            console.log(products);
            store.dispatch(resultSearchProduct(products));
          })
          .catch((error) => {
            console.error(error);
            store.dispatch(openSnackBar('Une erreur est survenue', 'error'));
          });
      }
      return next(action);
    case SEARCH_ESTABLISHMENT:
      {
        const { searchEstablishmentInputValue } = store.getState().search;
        const { searchEstablishmentSelectValue } = store.getState().search;

        api
          .get('/searchestablishments', {
            params: {
              value: searchEstablishmentInputValue,
              region: searchEstablishmentSelectValue,
            },
          })
          .then((result) => result.data)
          .then(({ establishments }) => {
            store.dispatch(resultSearchEstablishment(establishments));
          })
          .catch((error) => {
            console.error(error);
            store.dispatch(openSnackBar('Une erreur est survenue', 'error'));
          });
      }
      return next(action);

    default:
      return next(action);
  }
};
