import { connect } from 'react-redux';
import SearchProduct from 'src/components/SearchPharmacy';
import { changeInputValue, changeSelectInputValue } from '../actions/search';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchInputValue,
  searchSelectValue: state.search.searchSelectValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeInputValue(fieldValue, fieldName));
  },
  handleChangeType: (fieldValue) => {
    dispatch(changeSelectInputValue(fieldValue));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
