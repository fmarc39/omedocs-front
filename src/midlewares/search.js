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
        api
          .get('/searchproduct', {
            searchProductInputValue,
            searchProductSelectValue,
          })
          .then((result) => result.data)
          .then(({ data }) => {
            console.log(data);
            store.dispatch(resultSearchProduct(data));
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

        console.log(searchEstablishmentInputValue, searchEstablishmentSelectValue);

        api
          .get('/searchestablishment', {
            searchEstablishmentInputValue,
            searchEstablishmentSelectValue,
          })
          .then((result) => result.data)
          .then(({ data }) => {
            console.log(data);
            store.dispatch(resultSearchEstablishment(data));
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
