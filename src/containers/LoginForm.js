import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';
import { setUserFieldValue, submitLogin, lauchInscriptionForm } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  confirmEmail: state.user.confirmEmail,
  emailConnexion: state.user.emailConnexion,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(setUserFieldValue(name, value)),
  submitLogin: () => dispatch(submitLogin()),
  submitSubscribe: () => dispatch(lauchInscriptionForm()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
