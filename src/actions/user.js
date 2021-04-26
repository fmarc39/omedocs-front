// action list
export const CHANGE_USER_INFORMATIONS = 'CHANGE_USER_INFORMATIONS';
export const REHYDRATE = 'REHYDRATE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LAUCH_INSCRIPTION_FORM = ' LAUCH_INSCRIPTION_FORM';
export const LOGIN_FROM_REHYDRATE = 'LOGIN_FROM_REHYDRATE';
export const CHANGE_USER_MAIL = 'CHANGE_USER_MAIL';
export const CHANGE_USER_PHONE = 'CHANGE_USER_PHONE';
export const SAVE_NEW_MAIL = 'SAVE_NEW_MAIL';
export const SAVE_NEW_PHONE = 'SAVE_NEW_PHONE';

// action creators
export const changeUserInformations = (value, name) => ({
  type: CHANGE_USER_INFORMATIONS,
  value,
  name,
});

export const rehydrate = () => ({
  type: REHYDRATE,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const login = (user, accessToken) => ({
  type: LOGIN,
  user,
  accessToken,
});

export const logout = () => ({
  type: LOGOUT,
});

export const lauchInscriptionForm = () => ({
  type: LAUCH_INSCRIPTION_FORM,
});

export const changeUserMail = () => ({
  type: CHANGE_USER_MAIL,
});

export const changeUserPhone = () => ({
  type: CHANGE_USER_PHONE,
});

export const saveNewMail = (mail) => ({
  type: SAVE_NEW_MAIL,
  mail,
});

export const saveNewPhone = (phone) => ({
  type: SAVE_NEW_PHONE,
  phone,
});

export const loginFromRehydrate = (
  accessToken,
  establishment,
  email,
  phoneNumber,
  rpps,
  city,
  address,
  zipCode,
  userType,
  user_id
) => ({
  type: LOGIN_FROM_REHYDRATE,
  accessToken,
  establishment,
  email,
  phoneNumber,
  rpps,
  address,
  city,
  zipCode,
  userType,
  user_id,
});
