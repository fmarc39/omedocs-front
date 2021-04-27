import { connect } from 'react-redux';
import PharmacyPage from 'src/components/PharmacyPage';

const mapStateToProps = (state) => ({
  establishments: state.search.searchEstablishmentResult,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyPage);
