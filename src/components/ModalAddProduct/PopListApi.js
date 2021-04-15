import React from 'react';
import PropTypes from 'prop-types';
import { Box, List } from '@material-ui/core';
import ListItems from './ListItems';

const PopListApi = ({
  result, // data of drugsApi
  closePopList, // PopList closing function
  recoverInfoListItem, // ListItems data retrieval function
}) => (
  <Box
    width="260px"
    p="2"
    bgcolor="#FFF"
    border="1px solid #c4c4c4"
    borderRadius="5px"
    position="absolute"
    top="82px"
    left="335px"
    zIndex="10"
  >
    <List dense>
      {result.map((item) => (
        <ListItems
          key={item.cis}
          item={item}
          close={closePopList}
          recoverInfo={recoverInfoListItem}
        />
      ))}
    </List>
  </Box>
);

PopListApi.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      cis: PropTypes.number,
    }),
  ),
  closePopList: PropTypes.func,
  recoverInfoListItem: PropTypes.func,
};

PopListApi.defaultProps = {
  result: [],
  closePopList: () => {},
  recoverInfoListItem: () => {},
};

export default PopListApi;
