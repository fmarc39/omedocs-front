// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import react-router-dom pour ajouter des links aux boutons
import { NavLink } from 'react-router-dom';

// Import des composants depuis MATERIAL UI

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TableChartIcon from '@material-ui/icons/TableChart';

// Image
import pharmacy from 'src/assets/img/pharmacie.svg';
import hopital from 'src/assets/img/hopital.svg';

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
    marginBottom: '1.5rem',
  },
  logoutBtn: {
    color: '#0368A3',
    marginBottom: '1.5rem',
    marginTop: '1.5rem',
    borderRadius: '15px',
    '&:hover': {
      background: '#0368A3',
      color: 'white',
    },
  },
}));

const LeftMenu = ({ userType, nbOfArticles, handleLogout, establishment }) => {
  const handleLogoutBtn = () => {
    handleLogout();
  };

  const classes = useStyles();
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      width="250px"
      height="100%"
      color="primary.contrastText"
      bgcolor="#bfcee2"
      className="left-menu"
    >
      <Avatar
        alt="avatarLogo"
        src={userType === 'pharmacy' ? pharmacy : hopital}
        className="left-menu__avatar"
        variant="rounded"
      />

      <Typography variant="h5" component="h5" className="left-menu__welcome-message" align="center">
        Bienvenue <br />
        {establishment}
      </Typography>

      <Box display="flex" flexDirection="column" textAlign="center" className="let-menu__btn-box">
        <Button
          variant="outlined"
          onClick={handleLogoutBtn}
          color="primary"
          endIcon={<ExitToAppIcon />}
          size="small"
          fullWidth
          className={classes.logoutBtn}
        >
          Se déconnecter
        </Button>
        <NavLink to="/profil" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<AccountCircleIcon />}
            size="large"
            className={classes.btn}
            fullWidth
          >
            Profil
          </Button>
        </NavLink>
        <NavLink to="/searchproduct" style={{ textDecoration: 'none' }}>
          {userType === 'hospital' && (
            <Button
              variant="contained"
              color="primary"
              endIcon={<SearchIcon />}
              size="large"
              className={classes.btn}
            >
              Rechercher un produit
            </Button>
          )}
        </NavLink>
        <NavLink to="searchestablishement" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<LocalPharmacyIcon />}
            size="large"
            className={classes.btn}
          >
            Chercher un établissement
          </Button>
        </NavLink>
        <NavLink to="/cart" style={{ textDecoration: 'none' }}>
          {userType === 'hospital' && (
            <Button
              variant="contained"
              color="primary"
              endIcon={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Badge badgeContent={nbOfArticles} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              }
              size="large"
              className={classes.btn}
            >
              Acceder au panier
            </Button>
          )}
        </NavLink>
        <NavLink to="/inventory" style={{ textDecoration: 'none' }}>
          {userType === 'pharmacy' && (
            <Button
              variant="contained"
              color="primary"
              endIcon={<TableChartIcon />}
              size="large"
              className={classes.btn}
            >
              Acceder a l'inventaire
            </Button>
          )}
        </NavLink>
      </Box>
    </Box>
  );
};

LeftMenu.propTypes = {
  userType: PropTypes.string.isRequired,
  nbOfArticles: PropTypes.number,
  handleLogout: PropTypes.func.isRequired,
  establishment: PropTypes.string.isRequired,
};

LeftMenu.defaultProps = {
  nbOfArticles: null,
};

export default LeftMenu;
