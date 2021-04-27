import {
  ADD_ARTICLE_TO_CART,
  DELETE_ARTICLE_FROM_CART,
  CLOSE_DIALOG_BOX,
  OPEN_DIALOG_BOX,
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
      id: 10,
    },
    {
      pharmacyname: 'Pharmacie de la gare',
      price: '10',
      productid: '6 000 228 5',
      productname: 'FENOFIBRATE TEVA 100 mg',
      quantity: '99',
      quantityToBuy: '39',
      id: 21,
    },
    {
      pharmacyname: 'Pharmacie de la gare',
      price: '10',
      productid: '6 000 228 5',
      productname: 'FENOFIBRATE TEVA 100 mg',
      quantity: '99',
      quantityToBuy: '11',
      id: 34,
    },
  ],
  validationBox: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ARTICLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_ARTICLE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (article) => Number(article.id) !== Number(action.articleId)
          ),
        ],
      };
    case CLOSE_DIALOG_BOX:
      return {
        ...state,
        validationBox: false,
      };
    case OPEN_DIALOG_BOX:
      return {
        ...state,
        validationBox: true,
      };
    default:
      return state;
  }
};

export default reducer;
