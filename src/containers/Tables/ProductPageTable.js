import { connect } from 'react-redux';
import Table from 'src/components/ProductPage/ProductPageTable';
import { addArticleToCart } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  products: state.search.searchProductResult,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => {
    dispatch(addArticleToCart(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
