import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';
import { setUserFieldValue, submitLogin, logout, lauchInscriptionForm } from 'src/actions/user';

const mapStateToProps = (state) => ({
  emailValue: state.user.email,
  passwordValue: state.user.password,
  emailSubscribeValue: state.user.emailSubscribe,
  emailcheckSubscribeValue: state.user.emailcheckSubscribe,
  passwordSubscribeValue: state.user.passwordSubscribe,
  passwordcheckSubscribeValue: state.user.passwordcheckSubscribe,
  orgaValue: state.user.type,
  cityValue: state.user.city,
  adressValue: state.user.adress,
  rppsValue: state.user.rpps,
  zipValue: state.user.zip,
  phoneValue: state.user.phone,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(setUserFieldValue(name, value)),
  handleLogin: () => dispatch(submitLogin()),
  handleLogout: () => dispatch(logout()),
  submitForm: () => dispatch(lauchInscriptionForm()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
