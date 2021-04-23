import { CHANGE_INPUT_VALUE } from 'src/actions/search';

export const initialState = {
  searchProductInputValue: '',
  searchProductSelectValue: 'name',
  searchPharmacyInputValue: '',
  searchPharmacySelectValue: 'auvergne rhone alpes',
  searchPharmacyResult: [],
  searchProductResult: [],
  productName: 'FENOFIBRATE TEVA 100 mg',
  productCis: '6 000 228 5',
  productByPharmacyResults: [
    { name: 'Pharmacie de la gare', quantity: 99, price: 10 },
    { name: 'Pharmacie du panier', quantity: 17, price: 3 },
    { name: 'Pharacie de la drogue', quantity: 39, price: 3 },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    default:
      return state;
  }
};

export default reducer;
