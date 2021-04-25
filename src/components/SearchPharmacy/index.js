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
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import FormControl from '@material-ui/core/FormControl';
import PharmacyTable from 'src/containers/Tables/SearchPharmacyResultTable';

// Import CSS
import './styles.scss';

// Mise en place du style material-UI
const useStyles = makeStyles(() => ({
  btn: {
    background: '#0368A3',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
    borderRadius: '15px',
  },
}));

const SearchPharmacy = ({
  handleChange,
  searchInputValue,
  searchSelectValue,
  pharmacyResultsData,
}) => {
  // Gestion du 'onChange' de l'input search et lien avec le containers REDUX
  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };

  const classes = useStyles();
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
              borderRadius="40px"
              boxShadow={3}
            >
              <form autoComplete="off">
                <div>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Votre recherche ici
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    name="searchPharmacyInputValue"
                    onChange={handleChangeInput}
                    value={searchInputValue}
                    startAdornment={
                      // eslint-disable-next-line react/jsx-wrap-multilines
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
                    <MenuItem value="auvergne rhone alpes">
                      Auvergne-Rhône-Alpes
                    </MenuItem>
                    <MenuItem value="bourgogne franche comte">
                      Bourgogne-Franche-Comté
                    </MenuItem>
                    <MenuItem value="bretagne">Bretagne</MenuItem>
                    <MenuItem value="centre val de loire">
                      Centre-Val de Loire
                    </MenuItem>
                    <MenuItem value="corse">Corse</MenuItem>
                    <MenuItem value="grand est">Grand Est</MenuItem>
                    <MenuItem value="hauts de france">Hauts-de-France</MenuItem>
                    <MenuItem value="ile de France">Ile-de-France</MenuItem>
                    <MenuItem value="normandie">Normandie</MenuItem>
                    <MenuItem value="nouvelle aquitaine">
                      Nouvelle-Aquitaine
                    </MenuItem>
                    <MenuItem value="occitanie">Occitanie</MenuItem>
                    <MenuItem value="pays de la loire">
                      Pays de la Loire
                    </MenuItem>
                    <MenuItem value="provence alpes cote d azur">
                      Provence-Alpes-Côte d’Azur
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<CheckIcon />}
                  className={classes.btn}
                >
                  Valider
                </Button>
              </form>
            </Box>
            {/* Affichage conditionnel du tableau de résultat si
            la longueur du tableau est différente de 0  */}
            {pharmacyResultsData.length !== 0 && <PharmacyTable />}
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
  pharmacyResultsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchPharmacy;
