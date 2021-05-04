import { connect } from 'react-redux';
import CartPage from 'src/components/Cart/';
import {
  deleteArticleFromCart,
  increasesArticleQuantity,
  descreasesArticleQuantity,
  saveOrderInDb,
  clearCart,
} from 'src/actions/cart';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  cartData: state.cart.cart,
});

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: (productId) => {
    dispatch(deleteArticleFromCart(productId));
  },
  addQuantity: (productId) => {
    dispatch(increasesArticleQuantity(productId));
  },
  remmoveQuantity: (productId) => {
    dispatch(descreasesArticleQuantity(productId));
  },
  saveOrder: (totalPrice) => {
    dispatch(saveOrderInDb(totalPrice));
  },
  clearCart: () => dispatch(clearCart()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(CartPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
