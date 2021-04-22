// action list
export const DELETE_ROW_FROM_INVENTORY = 'DELETE_ROW_FROM_INVENTORY';
export const SAVE_NEW_QUANTITY_FROM_INVENTORY =
  'SAVE_NEW_QUANTITY_FROM_INVENTORY';

// action creators

export const deleteRowFromInventory = () => ({
  type: DELETE_ROW_FROM_INVENTORY,
});

export const saveNewQuantityFromInventory = (quantity) => ({
  type: SAVE_NEW_QUANTITY_FROM_INVENTORY,
  quantity,
});
