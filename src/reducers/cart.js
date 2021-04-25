import { ADD_ARTICLE_TO_CART } from 'src/actions/cart';

export const initialState = {
  cart: [
    {
      pharmacyname: 'Pharmacie de la gare',
      price: '10',
      productid: '6 000 228 5',
      productname: 'FENOFIBRATE TEVA 100 mg',
      quantity: '99',
      quantityToBuy: '11',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ARTICLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
