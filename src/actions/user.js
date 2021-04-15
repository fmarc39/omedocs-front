export const CHANGE_USER_INFORMATIONS = 'CHANGE_USER_INFORMATIONS';

export const changeUserInformations = (fieldValue, fieldName) => ({
  type: CHANGE_USER_INFORMATIONS,
  fieldValue,
  fieldName,
});
