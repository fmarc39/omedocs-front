import { connect } from 'react-redux';
import CartPage from 'src/components/Cart';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  cartData: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({});

const container = connect(mapStateToProps, mapDispatchToProps)(CartPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
