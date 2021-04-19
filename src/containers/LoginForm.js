import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';
import { setUserFieldValue, submitLogin, lauchInscriptionForm } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  confirmEmail: state.user.confirmEmail,
  emailConnexion: state.user.emailConnexion,
  passwordConnexion: state.user.passwordConnexion,
  submitLogin: state.user.submitLogin,
  handleChange: state.user.handleChange,
  submitSubscribe: state.user.submitSubscribe,
  confirmPassword: state.user.confirmPassword,
  establishment: state.user.establishment,
  adress: state.user.adress,
  zipCode: state.user.zipCode,
  city: state.user.city,
  region: state.user.region,
  phoneNumber: state.user.phoneNumber,
  rpps: state.user.rpps,
  radio: state.user.radio,
  handlerChange: state.user.handlerChange,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(setUserFieldValue(name, value)),
  submitLogin: () => dispatch(submitLogin()),
  submitSubscribe: () => dispatch(lauchInscriptionForm()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
