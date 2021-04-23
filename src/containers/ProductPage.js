import { connect } from 'react-redux';
import ProductPage from 'src/components/ProductPage';

const mapStateToProps = (state) => ({
  productName: state.search.productName,
  productCis: state.search.productCis,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
