// Actions list
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SEND_MAIL = 'SEND_MAIL';

// Action creators
export const changeInputValue = (name, value) => ({
  type: CHANGE_INPUT_VALUE,
  name,
  value,
});

export const sendMail = () => ({
  type: SEND_MAIL,
});
