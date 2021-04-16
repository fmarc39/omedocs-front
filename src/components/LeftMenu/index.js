import React from 'react';
// Import MATERIAL UI

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import avatarImg from '../../assets/img_avatar.png';

// Import CSS
import './styles.scss';

const LeftMenu = () => (
  <Box
    boxShadow={1}
    p={2}
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    width="250px"
    color="primary.contrastText"
    bgcolor="#AAAAAA"
    className="left-menu"
  >
    <Avatar
      alt="Remy Sharp"
      src={avatarImg}
      className="left-menu__avatar"
      width="150px"
    />

    <Typography
      variant="h6"
      component="h6"
      className="left-menu__welcome-message"
      align="center"
    >
      Bienvenue <br />
      H.P O’clock
    </Typography>

    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      className="let-menu__btn-box"
    >
      <Button
        variant="contained"
        color="primary"
        endIcon={<AccountCircleIcon />}
        size="large"
        className="btn-box__btn"
      >
        Profil
      </Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<SearchIcon />}
        size="large"
        className="btn-box__btn"
      >
        Rechercher un produit
      </Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<LocalPharmacyIcon />}
        size="large"
        className="btn-box__btn"
      >
        Voire les pharmacies
      </Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<ShoppingCartIcon />}
        size="large"
        className="btn-box__btn"
      >
        Acceder au panier
      </Button>
    </Box>
  </Box>
);

export default LeftMenu;
