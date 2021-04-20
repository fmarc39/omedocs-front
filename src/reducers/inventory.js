import /* actions */ 'src/actions/dataApi';

export const initialState = {
  drugs: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
