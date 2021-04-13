import { CHANGE_INPUT_VALUE, CHANGE_SELECT_INPUT_VALUE } from '../actions/search'

export const initialState = {
  search: {
      searchInputValue: '',
      searchSelectValue: 'Nom',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
        return {
            ...state,
            searchInputValue: action.fieldValue
        }
    case CHANGE_SELECT_INPUT_VALUE:
        return {
            ...state,
            searchSelectValue: action.fieldValue,
        }
    default:
      return state;
  }
};

export default reducer;
