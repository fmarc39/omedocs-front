import { CHANGE_USER_INFORMATIONS, LOGIN, LOGOUT } from 'src/actions/user';
import { OPEN_VALIDATION_CHANGE_MODAL, CLOSE_VALIDATION_CHANGE_MODAL } from 'src/actions/utils';

export const initialState = {
  establishment: 'Hôpital Paris Saint-Joseph',
  emailConnexion: '',
  email: 'hopitalsj@sante-paris.fr',
  confirmEmail: '',
  phoneNumber: '0144123333',
  newEmail: '',
  newPhoneNumber: '',
  rpps: '680004546',
  type: 'hospital',
  city: 'Paris',
  adress: '185 Rue Raymond Losserand',
  zipCode: '75014',
  region: '',
  radio: '',
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
        [action.fieldName]: action.fieldValue,
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
        logged: null,
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
