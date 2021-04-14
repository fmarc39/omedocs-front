import { connect } from 'react-redux';
import ModalAddProduct from 'src/components/ModalAddProduct';
import { closeModalProduct } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  open: state.utils.openModalProduct,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeModalProduct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddProduct);
