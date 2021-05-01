// Import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import react-router-dom pour ajouter des links aux boutons
import { NavLink, Link } from 'react-router-dom';

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
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TableChartIcon from '@material-ui/icons/TableChart';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';

// Image
import pharmacy from 'src/assets/img/pharmacie.svg';
import hopital from 'src/assets/img/hopital.svg';

// Import CSS
import './styles.scss';

// Mise en place du style material-UI
const useStyles = makeStyles(() => ({
  btn: {
    transition: 'all 0.3s',
    paddingRight: 30,
    background: '#0368A3',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
    borderRadius: '15px',
    marginBottom: '2rem',
  },
  logoutBtn: {
    transition: 'all 0.3s',
    paddingRight: 24,
    color: '#0368A3',
    marginBottom: '2.5rem',
    marginTop: '1.5rem',
    borderRadius: '15px',
    '&:hover': {
      background: '#0368A3',
      color: 'white',
    },
  },
}));

const LeftMenu = ({
  userType,
  nbOfArticles,
  handleLogout,
  establishment,
  menuIsOpen,
  openCloseMenu,
}) => {
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
      width={menuIsOpen ? '250px' : '80px'}
      height="100%"
      color="primary.contrastText"
      bgcolor="#bfcee2"
      className="left-menu"
    >
      <IconButton style={{ marginLeft: 'auto' }}>
        <ExitToAppIcon
          size="large"
          style={{ color: ' #0368A3', transform: menuIsOpen ? 'rotate(180deg)' : null }}
          onClick={() => openCloseMenu()}
        />
      </IconButton>
      <Link to="/">
        <Avatar
          alt="avatarLogo"
          src={userType === 'pharmacy' ? pharmacy : hopital}
          className="left-menu__avatar"
          variant={menuIsOpen ? 'rounded' : 'circle'}
        />
      </Link>
      {menuIsOpen && (
        <Typography
          variant="h6"
          component="h6"
          className="left-menu__welcome-message"
          align="center"
        >
          {establishment}
        </Typography>
      )}
      <Box display="flex" flexDirection="column" textAlign="center" className="let-menu__btn-box">
        <Divider />
        <Button
          variant="outlined"
          onClick={handleLogoutBtn}
          color="primary"
          endIcon={<MeetingRoomIcon />}
          fullWidth
          className={classes.logoutBtn}
          style={{ width: !menuIsOpen ? '50px' : null }}
        >
          {menuIsOpen ? 'Se déconnecter' : ''}
        </Button>
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<HomeIcon />}
            className={classes.btn}
            fullWidth
            style={{ width: !menuIsOpen ? '50px' : null }}
          >
            {menuIsOpen ? 'Acceuil' : ''}
          </Button>
        </NavLink>
        <NavLink to="/profil" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<AccountCircleIcon />}
            className={classes.btn}
            fullWidth
            style={{ width: !menuIsOpen ? '50px' : null }}
          >
            {menuIsOpen ? 'Profil' : ''}
          </Button>
        </NavLink>
        <NavLink to="/searchproduct" style={{ textDecoration: 'none' }}>
          {userType === 'hospital' && (
            <Button
              variant="contained"
              color="primary"
              endIcon={<SearchIcon />}
              className={classes.btn}
              fullWidth
              style={{ width: !menuIsOpen ? '50px' : null }}
            >
              {menuIsOpen ? 'Rechercher un produit' : ''}
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
            fullWidth
            style={{ width: !menuIsOpen ? '50px' : null }}
          >
            {menuIsOpen ? ' Chercher un établissement' : ''}
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
              style={{ width: !menuIsOpen ? '50px' : null }}
              className={classes.btn}
            >
              {menuIsOpen ? 'Acceder au panier' : ''}
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
              style={{ width: !menuIsOpen ? '50px' : null }}
            >
              {menuIsOpen ? "Acceder a l'inventaire" : ''}
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
  menuIsOpen: PropTypes.bool.isRequired,
  openCloseMenu: PropTypes.func.isRequired,
};

LeftMenu.defaultProps = {
  nbOfArticles: null,
};

export default LeftMenu;
