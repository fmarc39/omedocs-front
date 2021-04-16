import { connect } from 'react-redux';
import AccordionsPharmacyDetails from 'src/components/PharmacyPage/accordion';
import {} from 'src/actions/drugsApi';

const mapStateToProps = (state) => ({
  establishment: state.user.establishment,
  adress: state.user.adress,
  city: state.user.city,
  zipCode: state.user.zipCode,
  email: state.user.email,
  phoneNumer: state.user.phoneNumer,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccordionsPharmacyDetails);
