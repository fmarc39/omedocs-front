import { connect } from 'react-redux';
import SearchProduct from 'src/components/SearchProduct';
import { changeInputValue } from 'src/actions/search';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchProductInputValue,
  searchSelectValue: state.search.searchProductSelectValue,
  productResultsData: state.search.searchProductResult,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeInputValue(fieldValue, fieldName));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
const containerWithRouter = withRouter(container);

export default containerWithRouter;
