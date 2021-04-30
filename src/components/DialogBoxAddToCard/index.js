// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import NPM

import { Link, useHistory } from 'react-router-dom';

// Import from MATERIAL_UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Fonction qui va permettre l'annimation de la modal à l'ouverture
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  btn: {
    background: '#0368A3',
    color: 'white',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
    borderRadius: '15px',
    marginBottom: '1.5rem',
  },
});

const DialogChangeInformationsModal = ({ isOpen, handleClose }) => {
  // Je récupère l'url actuelle
  const path = useHistory();

  const handleCloseBtn = () => {
    handleClose();
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseBtn}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <p className="head-title">Que souhaitez vous faire ?</p>
        </DialogTitle>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleCloseBtn} className={classes.btn} Icon={<ShoppingCartIcon />}>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              Acceder à votre panier
            </Link>
          </Button>
          {/* Si je suis sur l'url d'un établissement, je n'affiche pas le bouton de redirection */}
          {!path.location.pathname.match('/establishment/') ? (
            <Button onClick={handleCloseBtn} className={classes.btn} Icon={<StorefrontIcon />}>
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                Acceder à la boutique de la pharmacie
              </Link>
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogChangeInformationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DialogChangeInformationsModal;
