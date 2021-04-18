import { CLOSE_POP_LIST_API, OPEN_POP_LIST_API } from 'src/actions/drugsApi';

const initialState = {
  activePopList: false,
  result: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CLOSE_POP_LIST_API:
      return {
        ...state,
        activePopList: false,
      };
    case OPEN_POP_LIST_API:
      return {
        ...state,
        activePopList: true,
      };
    default:
      return state;
  }
};
