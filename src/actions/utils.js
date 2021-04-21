// action list
export const CLOSE_MODAL_PRODUCT = 'CLOSE_MODAL_PRODUCT';
export const OPEN_MODAL_PRODUCT = 'OPEN_MODAL_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const OPEN_VALIDATION_CHANGE_MODAL = 'OPEN_VALIDATION_CHANGE_MODAL';
export const CLOSE_VALIDATION_CHANGE_MODAL = 'CLOSE_VALIDATION_CHANGE_MODAL';
export const OPEN_ERROR_INPUT_VALIDATION = 'OPEN_ERROR_INPUT_VALIDATION';
export const CLOSE_ERROR_INPUT_VALIDATION = 'CLOSE_ERROR_INPUT_VALIDATION';
export const SUBMIT_ADD_PRODUCT = 'SUBMIT_ADD_PRODUCT';
export const SAVE_NEW_PRODUCT_IN_INVENTORY = 'SAVE_NEW_PRODUCT_IN_INVENTORY';

// action creators
export const closeModalProduct = () => ({
  type: CLOSE_MODAL_PRODUCT,
});

export const openModalProduct = () => ({
  type: OPEN_MODAL_PRODUCT,
});

export const addProduct = (value, field) => ({
  type: ADD_PRODUCT,
  field,
  value,
});

export const saveNewProductInInventory = (value) => ({
  type: SAVE_NEW_PRODUCT_IN_INVENTORY,
  value,
});

export const submitAddProduct = () => ({
  type: SUBMIT_ADD_PRODUCT,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});

export const openSnackBar = (message, typeColor) => ({
  type: OPEN_SNACKBAR,
  message,
  typeColor,
});

export const openValidationChangeModal = () => ({
  type: OPEN_VALIDATION_CHANGE_MODAL,
});

export const closeValidationChangeModal = () => ({
  type: CLOSE_VALIDATION_CHANGE_MODAL,
});

export const openErrorInputValidation = (message) => ({
  type: OPEN_ERROR_INPUT_VALIDATION,
  message,
});

export const closeErrorInputValidation = () => ({
  type: CLOSE_ERROR_INPUT_VALIDATION,
});
