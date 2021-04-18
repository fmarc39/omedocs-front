import { connect } from 'react-redux';
import Table from 'src/components/SearchPharmacy/SearchPharmacyResultTable';
import {} from 'src/actions/utils';

const mapStateToProps = (state) => ({
  pharmacyResultsData: state.search.searchPharmacyResult,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
