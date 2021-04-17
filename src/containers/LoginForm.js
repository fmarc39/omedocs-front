import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';
import { setUserFieldValue, submitLogin, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  emailValue: state.user.emailValue,
  passwordValue: state.user.passwordValue,
  emailSubscribeValue: state.user.emailSubscribeValue,
  emailcheckSubscribeValue: state.user.emailcheckSubscribeValue,
  passwordSubscribeValue: state.user.passwordSubscribeValue,
  passwordcheckSubscribeValue: state.user.passwordcheckSubscribeValue,
  orgaValue: state.user.orgaValue,
  cityValue: state.user.cityValue,
  adressValue: state.user.adressValue,
  rppsValue: state.user.rppsValue,
  zipValue: state.user.zipValue,
  phoneValue: state.user.phoneValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(setUserFieldValue(name, value)),
  handleLogin: () => dispatch(submitLogin()),
  handleLogout: () => dispatch(logout()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
const containerWithRouter = withRouter(container);
export default containerWithRouter;
