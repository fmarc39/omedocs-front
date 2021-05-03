import api from 'src/api/api';
import {
  SAVE_ORDER_IN_DB,
  FETCH_ORDER_HISTORY,
  FECTH_SALES_HISTORY,
  saveInOrderHistory,
  saveFetchedOrdersInState,
} from 'src/actions/cart';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_ORDER_IN_DB:
      api
        .post(`/saveOrder/${store.getState().user.user_id}`, {
          total_cost: action.totalPrice,
          pharmacyId: store.getState().cart.pharmacyToOrder,
        })
        .then((response) => {
          store.dispatch(saveInOrderHistory(response.data.newOrder));
        })
        .catch((error) => console.log(error));
      return next(action);
    case FETCH_ORDER_HISTORY:
      api
        .get(`/orders/${action.userId}`)
        .then((orders) => {
          store.dispatch(saveFetchedOrdersInState(orders.data.orders));
        })
        .catch((error) => console.log(error));
      return next(action);
    case FECTH_SALES_HISTORY:
      api.get(`/sales/${store.getState().user.user_id}`);
      return next(action);

    default:
      return next(action);
  }
};
