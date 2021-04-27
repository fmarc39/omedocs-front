import { connect } from 'react-redux';
import DialogModal from 'src/components/ProfilPage/DialogModal';
import { closeValidationChangeModal } from 'src/actions/utils';
import { changeUserMail, changeUserPhone } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isOpen: state.user.changeInformationsModal,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeValidationChangeModal());
  },
  handleChangeInfo: () => {
    dispatch(changeUserMail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal);
