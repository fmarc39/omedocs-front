import { connect } from 'react-redux';
import ProductPage from 'src/components/ProductPage';

const mapStateToProps = (state) => ({
  products: state.search.searchProductResult,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
