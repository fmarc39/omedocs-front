import { connect } from 'react-redux';
import ProfilPage from 'src/components/ProfilPage';
import { withRouter } from 'react-router-dom';
import { changeUserInformations } from 'src/actions/user';
import { openValidationChangeModal } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  phoneNumer: state.user.phoneNumer,
  establishment: state.user.establishment,
  email: state.user.email,
  rpss: state.user.rpss,
  city: state.user.city,
  adress: state.user.adress,
  zipCode: state.user.zipCode,
  newEmail: state.user.newEmail,
  newPhoneNumber: state.user.newPhoneNumber,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeUserInformations(fieldValue, fieldName));
  },

  handleSave: () => {
    dispatch(openValidationChangeModal());
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
const containerWithRouter = withRouter(container);
export default containerWithRouter;