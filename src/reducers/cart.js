import { ADD_ARTICLE_TO_CART } from 'src/actions/cart';

export const initialState = {
  nbOfArticles: 1,
  cart: [],
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
