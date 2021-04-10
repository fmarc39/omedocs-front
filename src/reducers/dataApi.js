import /* actions */ 'src/actions/dataApi';

export const initialState = {
  drugs: [
    {
      drug: 'doliprane',
      quantity: 36,
    },
    {
      drug: 'dafalgan',
      quantity: 12,
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
