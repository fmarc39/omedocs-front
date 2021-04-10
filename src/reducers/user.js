import /* actions */ 'src/actions/user';

export const initialState = {
  user: {
    establishment: '',
    email: '',
    password: '',
    logged: false,
    token: null,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
