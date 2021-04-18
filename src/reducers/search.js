import { CHANGE_INPUT_VALUE } from 'src/actions/search';

export const initialState = {
  searchProductInputValue: '',
  searchProductSelectValue: 'name',
  searchPharmacyInputValue: '',
  searchPharmacySelectValue: 'auvergne rhone alpes',
  searchPharmacyResult: [
    {
      name: 'pharmacie de la Gare',
      region: 'ile-de-France',
    },
  ],
  searchProductResult: [],
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
