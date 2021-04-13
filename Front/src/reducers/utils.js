import { CLOSE_MODAL_PRODUCT, OPEN_MODAL_PRODUCT } from 'src/actions/utils';

const initialState = {
  openModalProduct: true,
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
    default:
      return state;
  }
};
