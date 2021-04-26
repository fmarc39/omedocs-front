import { connect } from 'react-redux';
import AccordionsPharmacyDetails from 'src/components/PharmacyPage/accordion';

const mapStateToProps = (state) => ({
  establishments: state.search.searchEstablishmentResult,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AccordionsPharmacyDetails);
