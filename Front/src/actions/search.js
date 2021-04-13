export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_SELECT_INPUT_VALUE = 'CHANGE_SELECT_INPUT_VALUE';

export const changeInputValue = (fieldValue, fieldName) => ({
  type: CHANGE_INPUT_VALUE,
  fieldValue,
  fieldName,
});

export const changeSelectInputValue = (fieldValue, fieldName) => ({
  type: CHANGE_SELECT_INPUT_VALUE,
  fieldValue,
  fieldName,
});
