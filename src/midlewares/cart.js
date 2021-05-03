import api from 'src/api/api';
import {
  SAVE_ORDER_IN_DB,
  FETCH_ORDER_HISTORY,
  FECTH_SALES_HISTORY,
} from 'src/actions/cart';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_ORDER_IN_DB:
      api.post(`/saveOrder/${store.getState().user.user_id}`, {
        totalPrice: action.totalPrice,
        pharmacyId: store.getState().cart.pharmacyToOrder,
      });
      return next(action);
    case FETCH_ORDER_HISTORY:
      api.get(`/orders/${store.getState().user.user_id}`);
      return next(action);
    case FECTH_SALES_HISTORY:
      api.get(`/sales/${store.getState().user.user_id}`);
      return next(action);

    default:
      return next(action);
  }
};
