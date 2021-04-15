// action list
export const CHANGE_USER_INFORMATIONS = 'CHANGE_USER_INFORMATIONS';
export const REHYDRATE = 'REHYDRATE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// action creators
export const changeUserInformations = (fieldValue, fieldName) => ({
  type: CHANGE_USER_INFORMATIONS,
  fieldValue,
  fieldName,
});

export const rehydrate = () => ({
  type: REHYDRATE,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (token) => ({
  type: LOGIN,
  token,
});
