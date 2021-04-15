import { CLOSE_POP_LIST_API, OPEN_POP_LIST_API } from 'src/actions/drugsApi';

const initialState = {
  activePopList: false,
  result: [
    {
      name: 'Doliprane 1000mg',
      cis: 5154851,
      pathology: 'Bobo à la Têtête',
    },
    {
      name: 'Doliprane 500mg',
      cis: 5154856,
      pathology: 'Bobo à la Têtête',
    },
    {
      name: 'Dolirhume',
      cis: 5154887,
      pathology: 'Bobo au neznez',
    },
  ],
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
