import { connect } from 'react-redux';
import CartPage from 'src/components/Cart';
import { deleteArticleFromCart } from 'src/actions/cart';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  cartData: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: (productId) => {
    dispatch(deleteArticleFromCart(productId));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(CartPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
