import api from 'src/api/api';
import { SAVE_ORDER_IN_DB } from 'src/actions/cart';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_ORDER_IN_DB:
      api.post(`/saveOrder/${store.getState().user.user_id}`);

      return next(action);
    default:
      return next(action);
  }
};
