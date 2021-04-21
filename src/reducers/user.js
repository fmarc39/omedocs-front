import { CHANGE_USER_INFORMATIONS, LOGIN, LOGOUT, LOGIN_FROM_REHYDRATE } from 'src/actions/user';
import { OPEN_VALIDATION_CHANGE_MODAL, CLOSE_VALIDATION_CHANGE_MODAL } from 'src/actions/utils';
import api from 'src/api/api';

export const initialState = {
  establishment: '',
  emailConnexion: '',
  email: '',
  confirmEmail: '',
  phoneNumber: '',
  newEmail: '',
  newPhoneNumber: '',
  rpps: '',
  userType: '',
  city: '',
  address: '',
  zipCode: '',
  region: '',
  passwordConnexion: '',
  password: '',
  confirmPassword: '',
  logged: false,
  accessToken: null,
  isLoading: false,
  changeInformationsModal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_INFORMATIONS:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_FROM_REHYDRATE:
      return {
        ...state,
        accessToken: action.accessToken,
        establishment: action.establishment,
        email: action.email,
        phoneNumber: action.phoneNumber,
        rpps: action.rpps,
        city: action.city,
        address: action.address,
        zipCode: action.zipCode,
        userType: action.userType,
        logged: true,
      };
    case LOGIN: {
      // Je met le token dans les params de l'api
      api.defaults.headers.common.Authorization = `Bearer ${action.accesToken}`;
      const {
        email,
        establishment,
        rpps,
        city,
        region,
        address,
        zipcode: zipCode,
        phonenumber: phoneNumber,
        usertype: userType,
      } = action.user;
      return {
        ...state,
        email,
        establishment,
        rpps,
        city,
        region,
        address,
        zipCode,
        phoneNumber,
        userType,
        logged: true,
        accessToken: action.accessToken,
      };
    }

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        establishment: '',
        emailConnexion: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        newEmail: '',
        newPhoneNumber: '',
        rpps: '',
        userType: '',
        city: '',
        address: '',
        zipCode: '',
        region: '',
        passwordConnexion: '',
        password: '',
        confirmPassword: '',
        token: null,
        logged: false,
      };
    case OPEN_VALIDATION_CHANGE_MODAL:
      return {
        ...state,
        changeInformationsModal: true,
      };
    case CLOSE_VALIDATION_CHANGE_MODAL:
      return {
        ...state,
        changeInformationsModal: false,
        newEmail: '',
        newPhoneNumber: '',
      };
    default:
      return state;
  }
};

export default reducer;
