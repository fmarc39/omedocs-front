import api from 'src/api/api';
import { SAVE_ORDER_IN_DB, CLEAR_CART } from 'src/actions/cart';
import { openSnackBar } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CLEAR_CART:
      store.dispatch(openSnackBar('Merci pour votre achat', 'success'));
      return next(action);
    case SAVE_ORDER_IN_DB:
      api.post(`/saveOrder/${store.getState().user.user_id}`);

      return next(action);
    default:
      return next(action);
  }
};
