import { connect } from 'react-redux';
import Table from 'src/components/ProductPage/ProductPageTable';
import { addArticleToCart } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  productResultsData: state.search.productByPharmacyResults,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => {
    dispatch(addArticleToCart(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
