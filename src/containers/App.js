import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
