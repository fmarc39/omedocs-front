import {
  DELETE_ROW_FROM_STATE,
  SAVE_NEW_PRODUCT_IN_INVENTORY,
  SAVE_INVENTORY,
} from 'src/actions/inventory';

export const initialState = {
  drugs: [
    {
      name: 'DOLIPRANE 500mg',
      cis: '515445',
      expiration: '05/06/2021',
      quantity: '12',
      price: '1',
      id: 1548,
    },
    {
      name: 'DOLIPRANE 500mg',
      cis: '515445',
      expiration: '05/06/2021',
      quantity: '12',
      price: '1',
      id: 1544,
    },
    {
      name: 'DOLIPRANE 500mg',
      cis: '515445',
      expiration: '05/06/2021',
      quantity: '12',
      price: '1',
      id: 1585,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_INVENTORY:
      return {
        ...state,
        drugs: [...state.drugs, ...action.drugs],
      };
    case SAVE_NEW_PRODUCT_IN_INVENTORY:
      return {
        ...state,
        drugs: [...state.drugs, action.drug],
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
