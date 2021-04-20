import { connect } from 'react-redux';
import Table from 'src/components/InventoryPage/InventoryTable';
import {} from 'src/actions/utils';

const mapStateToProps = (state) => ({
  inventoryData: state.inventory.drugs,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
