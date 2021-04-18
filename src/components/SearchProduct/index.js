// Import REACT
import React from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Import from MATERIAL-UI
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import FormControl from '@material-ui/core/FormControl';
import ProductTable from 'src/containers/Tables/SearchProductsResultTable';

// Import CSS
import './styles.scss';

const SearchProduct = ({
  handleChange,
  searchInputValue,
  searchSelectValue,
}) => {
  // Gestion du 'onChange' de l'input search et lien avec le containers REDUX
  const handleChangeSearchInput = (event) => {
    // Au 'onChange' on récupère la valeur de l'input et son nom
    handleChange(event.target.value, event.target.name);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Header />
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />
          <Box
            bgcolor="#C6C6C6"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              p={3}
              mb={4}
              bgcolor="white"
              borderRadius="10px"
              boxShadow={3}
            >
              <form>
                <div>
                  <InputLabel htmlFor="search-product-input">
                    Votre recherche ici
                  </InputLabel>
                  <Input
                    id="search-product-input"
                    onChange={handleChangeSearchInput}
                    value={searchInputValue}
                    name="searchProductInputValue"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <FormControl size="medium" style={{ width: '200px' }}>
                  <InputLabel id="typeSelect">Type</InputLabel>
                  <Select
                    labelId="typeSelect"
                    id="typeSelectBtn"
                    value={searchSelectValue}
                    name="searchProductSelectValue"
                    onChange={handleChangeSearchInput}
                  >
                    <MenuItem value="name">Nom</MenuItem>
                    <MenuItem value="cis">CIS</MenuItem>
                    <MenuItem value="pathology">Pathologie</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<CheckIcon />}
                >
                  Valider
                </Button>
              </form>
            </Box>
            <ProductTable />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

SearchProduct.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  searchSelectValue: PropTypes.string.isRequired,
};

export default SearchProduct;
