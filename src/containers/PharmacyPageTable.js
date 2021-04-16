import { connect } from 'react-redux';
import Table from 'src/component/PharmacyPage/Table';
import {} from 'src/actions/utils';

const mapStateToProps = (state) => ({
  inventoryData: state.inventory.drugs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
