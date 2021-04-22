import api from 'src/api/api';

import { DELETE_ROW_FROM_INVENTORY } from 'src/actions/inventory';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_ROW_FROM_INVENTORY: {
    }
    default:
      return next(action);
  }
};
