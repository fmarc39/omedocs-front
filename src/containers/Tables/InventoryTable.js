import { connect } from 'react-redux';
import Table from 'src/components/InventoryPage/InventoryTableBeta';
import {
  deleteRowFromInventory,
  saveNewQuantityFromInventory,
  handleChangeQuantityValue,
} from 'src/actions/inventory';

const mapStateToProps = (state) => ({
  inventoryData: state.inventory.drugs,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteCLick: (rowId) => {
    dispatch(deleteRowFromInventory(rowId));
  },
  handleSaveClick: () => {
    dispatch(saveNewQuantityFromInventory());
  },
  handleChangeQuantity: (value, fieldName) => {
    dispatch(handleChangeQuantityValue(value, fieldName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
