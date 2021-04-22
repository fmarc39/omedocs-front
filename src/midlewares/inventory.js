import api from 'src/api/api';

import {
  DELETE_ROW_FROM_INVENTORY,
  deleteRowFromState,
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
    default:
      return next(action);
  }
};
