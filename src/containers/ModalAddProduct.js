import { connect } from 'react-redux';
import ModalAddProduct from 'src/components/ModalAddProduct';
import {
  closeModalProduct,
  addProduct,
  submitAddProduct,
} from 'src/actions/utils';
import { openPopListApi } from 'src/actions/drugsApi';

const mapStateToProps = (state) => ({
  open: state.utils.openModalProduct,
  nameValue: state.utils.product.name,
  cisValue: state.utils.product.cis,
  pathologyValue: state.utils.product.pathology,
  quantityValue: state.utils.product.quantity,
  priceValue: state.utils.product.price,
  expirationValue: state.utils.product.expiration,
  activePopList: state.drugsApi.activePopList,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeModalProduct());
  },
  onChange: (value, field) => {
    dispatch(addProduct(value, field));
  },
  openPopList: () => dispatch(openPopListApi()),
  onSubmit: () => {
    dispatch(submitAddProduct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddProduct);
