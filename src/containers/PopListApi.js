import { connect } from 'react-redux';
import PopListApi from 'src/components/ModalAddProduct/PopListApi';
import { closePopListApi, applyInfoDrugsApi } from 'src/actions/drugsApi';

const mapStateToProps = (state) => ({
  nameFormAddProduct: state.utils.product.name,
});

const mapDispatchToProps = (dispatch) => ({
  closePopList: () => dispatch(closePopListApi()),
  recoverInfoListItem: (name, cis) => {
    dispatch(applyInfoDrugsApi(name, cis));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopListApi);
