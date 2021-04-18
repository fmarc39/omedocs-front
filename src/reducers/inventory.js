import /* actions */ 'src/actions/dataApi';

export const initialState = {
  drugs: [
    {
      drugName: 'doliprane',
      cis: 17,
      quantity: 36,
      price: 10,
    },
    {
      drugName: 'doliprane',
      cis: 36,
      quantity: 36,
      price: 10,
    },
    {
      drugName: 'doliprane',
      cis: 36,
      quantity: 36,
      price: 10,
    },
    {
      drugName: 'doliprane',
      cis: 36,
      quantity: 36,
      price: 10,
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
