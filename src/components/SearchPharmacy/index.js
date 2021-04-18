// Import REACT
import React from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';

// Import MATERIAL UI
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import FormControl from '@material-ui/core/FormControl';
import PharmacyTable from './Table';

// Import CSS
import './styles.scss';

const SearchPharmacy = ({ handleChange, searchInputValue, searchSelectValue }) => {
  // Gestion du 'onChange' de l'input search et lien avec le containers REDUX
  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
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
                  <InputLabel htmlFor="input-with-icon-adornment">Votre recherche ici</InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    name="searchPharmacyInputValue"
                    onChange={handleChangeInput}
                    value={searchInputValue}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <FormControl size="medium" style={{ width: '300px' }}>
                  <InputLabel id="typeSelect">Region</InputLabel>
                  <Select
                    labelId="typeSelect"
                    id="typeSelectBtn"
                    name="searchPharmacySelectValue"
                    value={searchSelectValue}
                    onChange={handleChangeInput}
                  >
                    <MenuItem value="auvergne rhone alpes">Auvergne-Rhône-Alpes</MenuItem>
                    <MenuItem value="bourgogne franche comte">Bourgogne-Franche-Comté</MenuItem>
                    <MenuItem value="bretagne">Bretagne</MenuItem>
                    <MenuItem value="centre val de loire">Centre-Val de Loire</MenuItem>
                    <MenuItem value="corse">Corse</MenuItem>
                    <MenuItem value="grand est">Grand Est</MenuItem>
                    <MenuItem value="hauts de france">Hauts-de-France</MenuItem>
                    <MenuItem value="ile de France">Ile-de-France</MenuItem>
                    <MenuItem value="normandie">Normandie</MenuItem>
                    <MenuItem value="nouvelle aquitaine">Nouvelle-Aquitaine</MenuItem>
                    <MenuItem value="occitanie">Occitanie</MenuItem>
                    <MenuItem value="pays de la loire">Pays de la Loire</MenuItem>
                    <MenuItem value="provence alpes cote d azur">
                      Provence-Alpes-Côte d’Azur
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" color="primary" endIcon={<CheckIcon />}>
                  Valider
                </Button>
              </form>
            </Box>
            <PharmacyTable />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

SearchPharmacy.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  searchSelectValue: PropTypes.string.isRequired,
};

export default SearchPharmacy;
