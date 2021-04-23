import {
  DELETE_ROW_FROM_STATE,
  SAVE_NEW_PRODUCT_IN_INVENTORY,
  SAVE_INVENTORY,
} from 'src/actions/inventory';

export const initialState = {
  drugs: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_INVENTORY:
      return {
        ...state,
        drugs: [...action.drugs],
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
