import {
  ADD_ARTICLE_TO_CART,
  DELETE_ARTICLE_FROM_CART,
  CLOSE_DIALOG_BOX,
  OPEN_DIALOG_BOX,
} from 'src/actions/cart';

import { loadState } from 'src/locaStorage';

const persistedState = loadState();

export const initialState = {
  cart: persistedState ? persistedState.cart : [],
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
