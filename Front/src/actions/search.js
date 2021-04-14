export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_SELECT_INPUT_VALUE = 'CHANGE_SELECT_INPUT_VALUE';

export const changeInputValue = (fieldValue) => ({
  type: CHANGE_INPUT_VALUE,
  fieldValue,
});

export const changeSelectInputValue = (fieldValue) => ({
  type: CHANGE_SELECT_INPUT_VALUE,
  fieldValue,
});
