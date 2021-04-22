import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, List, Typography } from '@material-ui/core';
import ListItems from './ListItems';
import drugsData from 'src/data/drugs.json';

const PopListApi = ({
  closePopList, // PopList closing function
  recoverInfoListItem, // ListItems data retrieval function
  nameFormAddProduct, // input name from componant modalAddProduct
}) => {
  const [drugs, setDrugs] = useState([]);

  // Commencer le filtre à partir de 4 caractères sinon le nombre de résultats est trop grand et l'application plante

  useEffect(() => {
    if (nameFormAddProduct.length >= 4) {
      setDrugs(drugsData.filter((drug) => drug.title.toLowerCase().match(nameFormAddProduct)));
    }
  }, [nameFormAddProduct]);

  return (
    <Box
      width="260px"
      maxHeight="400px"
      overflow="auto"
      p="2"
      bgcolor="#FFF"
      border="1px solid #c4c4c4"
      borderRadius="5px"
      position="absolute"
      top="82px"
      left="335px"
      zIndex="10"
    >
      {/* Si il n'y a pas de résultat j'affiche un message d'erreur à la place de la liste*/}
      {drugs.length === 0 ? (
        <Typography variant="body1">Pas de résultat...</Typography>
      ) : (
        <List dense>
          {drugs.map((drug) => (
            <ListItems
              key={drug.cis_code}
              drug={drug}
              close={closePopList}
              recoverInfo={recoverInfoListItem}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

PopListApi.propTypes = {
 
  closePopList: PropTypes.func.isRequired,
  recoverInfoListItem: PropTypes.func.isRequired,
 nameFormAddProduct: PropTypes.string,
};

PopListApi.defaultProps = {
 nameFormAddProduct: '',
};

export default PopListApi;
