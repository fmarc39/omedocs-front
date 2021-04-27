import {
  CHANGE_USER_INFORMATIONS,
  LOGIN,
  LOGOUT,
  LOGIN_FROM_REHYDRATE,
} from 'src/actions/user';
import {
  OPEN_VALIDATION_CHANGE_MODAL,
  CLOSE_VALIDATION_CHANGE_MODAL,
} from 'src/actions/utils';
import api from 'src/api/api';

export const initialState = {
  user_id: null,
  establishment: '',
  emailConnexion: '',
  email: '',
  confirmEmail: '',
  phoneNumber: '',
  newEmail: '',
  newPhoneNumber: '',
  rpps: '',
  userType: 'hospital',
  city: '',
  address: '',
  zipCode: '',
  region: '',
  passwordConnexion: '',
  password: '',
  confirmPassword: '',
  logged: true,
  accessToken: null,
  isLoading: false,
  changeInformationsModal: false,
  mailChangeDialogBox: false,
  phoneChangeDialogBox: false,
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
        user_id: action.user_id,
        logged: true,
      };
    case LOGIN: {
      // Je met le token dans les params de l'api
      api.defaults.headers.common.Authorization = `Bearer ${action.accesToken}`;
      const {
        id: user_id,
        email,
        establishment,
        rpps,
        city,
        region,
        address,
        zip_code: zipCode,
        phone_number: phoneNumber,
        user_type: userType,
      } = action.user;
      return {
        ...state,
        user_id,
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
        user_id: null,
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
