import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

const ListItems = ({ item, close, recoverInfo }) => {
  const { name, cis, pathology } = item;
  const handlerOnClick = () => {
    recoverInfo(name, cis, pathology);
    close();
  };

  return (
    <ListItem divider button onClick={handlerOnClick}>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  );
};

ListItems.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cis: PropTypes.number.isRequired,
      pathology: PropTypes.string.isRequired,
    }),
  ),
  close: PropTypes.func.isRequired,
  recoverInfo: PropTypes.func.isRequired,
};

ListItems.defaultProps = {
  item: '',
};

export default ListItems;
