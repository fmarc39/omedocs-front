import { CLOSE_MODAL_PRODUCT, OPEN_MODAL_PRODUCT, ADD_PRODUCT } from 'src/actions/utils';
import parseInputNumber from 'src/utils';

const initialState = {
  openModalProduct: true,
  product: {
    name: '',
    cis: '',
    pathology: '',
    quantity: '',
    price: '',
    expiration: '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_MODAL_PRODUCT:
      return {
        ...state,
        openModalProduct: false,
      };
    case OPEN_MODAL_PRODUCT:
      return {
        ...state,
        openModalProduct: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          // parsing input to number
          [action.field]: parseInputNumber(action.field, action.value),
        },
      };
    default:
      return state;
  }
};
