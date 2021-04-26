import {
  ADD_ARTICLE_TO_CART,
  DELETE_ARTICLE_FROM_CART,
} from 'src/actions/cart';

export const initialState = {
  cart: [
    {
      pharmacyname: 'Pharmacie de la gare',
      price: '10',
      productid: '6 000 228 5',
      productname: 'FENOFIBRATE TEVA 100 mg',
      quantity: '99',
      quantityToBuy: '11',
      id: 1,
    },
    {
      pharmacyname: 'Pharmacie de la gare',
      price: '10',
      productid: '6 000 228 5',
      productname: 'FENOFIBRATE TEVA 100 mg',
      quantity: '99',
      quantityToBuy: '39',
      id: 2,
    },
    {
      pharmacyname: 'Pharmacie de la gare',
      price: '10',
      productid: '6 000 228 5',
      productname: 'FENOFIBRATE TEVA 100 mg',
      quantity: '99',
      quantityToBuy: '11',
      id: 3,
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
    case DELETE_ARTICLE_FROM_CART:
      console.log(action.articleId);
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (article) => Number(article.id) !== Number(action.articleId)
          ),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
