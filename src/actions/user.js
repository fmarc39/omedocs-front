export const SET_USER_FIELD_VALUE = 'SET_USER_FIELD_VALUE';

export const setUserFieldValue = (name, value) => ({
  type: SET_USER_FIELD_VALUE,
  name,
  value,
});

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,
});

export const LOGIN = 'LOGIN';

export const login = (pseudo, token) => ({
  type: LOGIN,
  pseudo,
  token,
});
