const parseInputNumber = (field, value) => {
  switch (field) {
    case 'cis':
      return parseInt(value, 10);
    case 'quantity':
      return parseInt(value, 10);
    case 'price':
      return parseInt(value, 10);
    default:
      return value;
  }
};

export default parseInputNumber;
