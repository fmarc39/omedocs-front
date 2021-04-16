import { connect } from 'react-redux';
import LeftMenu from 'src/components/LeftMenu/';
import {} from 'src/actions/drugsApi';

const mapStateToProps = (state) => ({
  userType: state.user.type,
  nbOfArticles: state.cart.nbOfArticles,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
