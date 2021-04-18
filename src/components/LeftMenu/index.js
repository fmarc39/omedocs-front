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
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TableChartIcon from '@material-ui/icons/TableChart';
import avatarImg from '../../assets/img_avatar.png';

// Import CSS
import './styles.scss';

const LeftMenu = ({ userType, nbOfArticles }) => (
  <Box
    boxShadow={1}
    p={2}
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width="250px"
    height="100%"
    color="primary.contrastText"
    bgcolor="#AAAAAA"
    className="left-menu"
  >
    <Avatar alt="avatarLogo" src={avatarImg} className="left-menu__avatar" />

    <Typography
      variant="h5"
      component="h5"
      className="left-menu__welcome-message"
      align="center"
    >
      Bienvenue <br />
      H.P O’clock
    </Typography>

    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      className="let-menu__btn-box"
    >
      <NavLink to="/profil" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AccountCircleIcon />}
          size="large"
          className="btn-box__btn"
          fullWidth="true"
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
            className="btn-box__btn"
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
          className="btn-box__btn"
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
              <Badge badgeContent={nbOfArticles} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            }
            size="large"
            className="btn-box__btn"
          >
            Acceder au panier
          </Button>
        )}
      </NavLink>
      <NavLink to="/cart" style={{ textDecoration: 'none' }}>
        {userType === 'pharmacy' && (
          <Button
            variant="contained"
            color="primary"
            endIcon={<TableChartIcon />}
            size="large"
            className="btn-box__btn"
          >
            Acceder a l'inventaire
          </Button>
        )}
      </NavLink>
    </Box>
  </Box>
);

LeftMenu.propTypes = {
  userType: PropTypes.string.isRequired,
  nbOfArticles: PropTypes.string.isRequired,
};

export default LeftMenu;
