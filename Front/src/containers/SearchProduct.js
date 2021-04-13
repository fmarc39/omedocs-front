import { connect } from 'react-redux';
import SearchProduct from '../components/SearchProduct';
import { changeInputValue, changeSelectInputValue } from '../actions/search';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchProductInputValue,
  searchSelectValue: state.search.searchProductSelectValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeInputValue(fieldValue, fieldName));
  },
  handleChangeType: (fieldValue, fieldName) => {
    dispatch(changeSelectInputValue(fieldValue, fieldName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
