import { SAVE_NEW_PRODUCT_IN_INVENTORY } from 'src/actions/utils';
import {
  HANDLE_CHANGE_QUANTITY_VALUE,
  DELETE_ROW_FROM_STATE,
} from 'src/actions/inventory';

export const initialState = {
  drugs: [
    {
      name: 'doliprane',
      cis: '101010',
      expirationDate: '10/09/2020',
      quantity: '19',
      price: '10',
    },
    {
      name: 'doliprane',
      cis: '202020',
      expirationDate: '10/09/2020',
      quantity: '19',
      price: '10',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_NEW_PRODUCT_IN_INVENTORY:
      return {
        ...state,
        drugs: [...state.drugs, action.value],
      };
    case HANDLE_CHANGE_QUANTITY_VALUE:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case DELETE_ROW_FROM_STATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
