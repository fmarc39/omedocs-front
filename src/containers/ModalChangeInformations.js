import { connect } from 'react-redux';
import DialogModal from 'src/components/ProfilPage/DialogModal';
import { closeValidationChangeModal } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  isOpen: state.user.changeInformationsModal,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeValidationChangeModal());
  },
  handleSubmit: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal);
