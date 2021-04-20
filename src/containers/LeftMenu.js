import { connect } from 'react-redux';
import LeftMenu from 'src/components/LeftMenu/';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  userType: state.user.userType,
  nbOfArticles: state.cart.nbOfArticles,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
