import { connect } from 'react-redux';
import PopListApi from 'src/components/ModalAddProduct/PopListApi';
import { closePopListApi, applyInfoDrugsApi } from 'src/actions/drugsApi';

const mapStateToProps = (state) => ({
  result: state.drugsApi.result,
});

const mapDispatchToProps = (dispatch) => ({
  closePopList: () => dispatch(closePopListApi()),
  recoverInfoListItem: (name, cis, pathology) => {
    dispatch(applyInfoDrugsApi(name, cis, pathology));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopListApi);
