import /* actions */ 'src/actions/dataApi';

export const initialState = {
  drugs: [
    {
      name: 'DOLIPRANE 500mg',
      cis: '515445',
      expirationDate: '05/06/2021',
      quantity: '12',
      price: '1',
    },
    {
      name: 'DOLIPRANE 500mg',
      cis: '515445',
      expirationDate: '05/06/2021',
      quantity: '12',
      price: '1',
    },
    {
      name: 'DOLIPRANE 500mg',
      cis: '515445',
      expirationDate: '05/06/2021',
      quantity: '12',
      price: '1',
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
