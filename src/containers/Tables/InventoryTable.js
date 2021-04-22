import { connect } from 'react-redux';
import Table from 'src/components/InventoryPage/InventoryTableBeta';
import {
  deleteRowFromInventory,
  saveNewQuantityFromInventory,
} from 'src/actions/inventory';

const mapStateToProps = (state) => ({
  inventoryData: state.inventory.drugs,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteCLick: () => {
    dispatch(deleteRowFromInventory());
  },
  handleSaveClick: () => {
    dispatch(saveNewQuantityFromInventory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
