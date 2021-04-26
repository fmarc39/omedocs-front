import { connect } from 'react-redux';
import LeftMenu from 'src/components/LeftMenu/';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  userType: state.user.userType,
  establishment: state.user.establishment,
  id: state.user.id,
  nbOfArticles: state.cart.cart.length,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
