import { SAVE_NEW_PRODUCT_IN_INVENTORY } from 'src/actions/utils';

export const initialState = {
  drugs: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_NEW_PRODUCT_IN_INVENTORY:
      return {
        ...state,
        drugs: [...state.drugs, action.value],
      };
    default:
      return state;
  }
};

export default reducer;
