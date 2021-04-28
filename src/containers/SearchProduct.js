import { connect } from 'react-redux';
import SearchProduct from 'src/components/SearchProduct';
import { changeInputValue, searchProduct } from 'src/actions/search';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchProductInputValue,
  searchSelectValue: state.search.searchProductSelectValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeInputValue(fieldValue, fieldName));
  },
  submitForm: () => dispatch(searchProduct()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(SearchProduct);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
