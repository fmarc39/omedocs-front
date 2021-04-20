import { CHANGE_USER_INFORMATIONS, LOGIN, LOGOUT } from 'src/actions/user';
import { OPEN_VALIDATION_CHANGE_MODAL, CLOSE_VALIDATION_CHANGE_MODAL } from 'src/actions/utils';

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
    case LOGIN: {
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
