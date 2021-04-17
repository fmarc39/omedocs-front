import { connect } from 'react-redux';
import App from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';
import {} from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(App);
const containerWithRouter = withRouter(container);
export default containerWithRouter;
