import { connect } from 'react-redux';
import Table from 'src/components/ProductPage/ProductPageTable';
import { addArticleToCart, openDialogBoxAction } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  products: state.search.searchProductResult,
  cartData: state.cart.cart,
  pharmacyToOrder: state.cart.pharmacyToOrder,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data, pharmacyId) => {
    dispatch(addArticleToCart(data, pharmacyId));
  },
  openDialogBox: () => {
    dispatch(openDialogBoxAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
