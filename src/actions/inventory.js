// action list
export const DELETE_ROW_FROM_INVENTORY = 'DELETE_ROW_FROM_INVENTORY';
export const SAVE_NEW_QUANTITY_FROM_INVENTORY =
  'SAVE_NEW_QUANTITY_FROM_INVENTORY';
export const HANDLE_CHANGE_QUANTITY_VALUE = 'HANDLE_CHANGE_QUANTITY_VALUE';
export const DELETE_ROW_FROM_STATE = 'DELETE_ROW_FROM_STATE';

// action creators

export const deleteRowFromInventory = (rowId) => ({
  type: DELETE_ROW_FROM_INVENTORY,
  rowId,
});

export const saveNewQuantityFromInventory = (quantity) => ({
  type: SAVE_NEW_QUANTITY_FROM_INVENTORY,
  quantity,
});

export const handleChangeQuantityValue = (value, fieldName) => ({
  type: HANDLE_CHANGE_QUANTITY_VALUE,
  value,
  fieldName,
});

export const deleteRowFromState = (rowId) => ({
  type: DELETE_ROW_FROM_STATE,
  rowId,
});
