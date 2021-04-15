import { CLOSE_MODAL_PRODUCT, OPEN_MODAL_PRODUCT, ADD_PRODUCT } from 'src/actions/utils';
import { APPLY_INFO_DRUGS_API } from 'src/actions/drugsApi';
import parseInputNumber from 'src/hooks';

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
    case APPLY_INFO_DRUGS_API:
      return {
        ...state,
        product: {
          ...state.product,
          name: action.name,
          cis: action.cis,
          pathology: action.pathology,
        },
      };
    default:
      return state;
  }
};
