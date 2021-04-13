export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const changeInputValue = (fieldValue, fieldName) => ({
    type: CHANGE_INPUT_VALUE,
    fieldValue,
    fieldName,
});

