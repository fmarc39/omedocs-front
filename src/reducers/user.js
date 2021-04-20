import { CHANGE_USER_INFORMATIONS, LOGIN, LOGOUT } from 'src/actions/user';
import {
  OPEN_VALIDATION_CHANGE_MODAL,
  CLOSE_VALIDATION_CHANGE_MODAL,
} from 'src/actions/utils';

export const initialState = {
  establishment: '',
  emailConnexion: '',
  email: '',
  confirmEmail: '',
  phoneNumber: '',
  newEmail: '',
  newPhoneNumber: '',
  rpps: '',
  type: 'pharmacy',
  city: '',
  adress: '',
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
    case LOGIN:
      return {
        ...state,
        logged: true,
        accessToken: action.accessToken,
      };
    case LOGOUT:
      return {
        ...state,
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
