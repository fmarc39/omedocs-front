import { connect } from 'react-redux';
import SearchPharmacy from 'src/components/SearchPharmacy';
import { changeInputValue } from 'src/actions/search';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchPharmacyInputValue,
  searchSelectValue: state.search.searchPharmacySelectValue,
  pharmacyResultsData: state.search.searchPharmacyResult,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeInputValue(fieldValue, fieldName));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(SearchPharmacy);
const containerWithRouter = withRouter(container);

export default containerWithRouter;
