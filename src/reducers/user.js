import { CHANGE_USER_INFORMATIONS, LOGIN, LOGOUT } from 'src/actions/user';

export const initialState = {
  establishment: 'Hôpital Paris Saint-Joseph',
  email: 'hopitalsj@sante-paris.fr',
  phoneNumer: '0144123333',
  newEmail: '',
  newPhoneNumber: '',
  rpss: '680004546',
  type: 'hospital',
  city: 'Paris',
  adress: '185 Rue Raymond Losserand',
  zipCode: '75014',
  password: '',
  logged: false,
  token: null,
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
        // finir de coder après le midlware auth quand on sera connecter au back
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        logged: null,
      };
    default:
      return state;
  }
};

export default reducer;
