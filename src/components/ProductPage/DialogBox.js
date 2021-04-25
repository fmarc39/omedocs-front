// Import React
import React from 'react';
import PropTypes from 'prop-types';

//Import from MATERIAL_UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

// Fonction qui va permettre l'annimation de la modal à l'ouverture
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogChangeInformationsModal = ({ isOpen, handleClose }) => {
  const handleCloseBtn = () => {
    handleClose();
  };
  const handleValidation = () => {};

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Que souhaitez vous faire ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleValidation} color="primary">
            Panier
          </Button>
          <Button onClick={handleCloseBtn} color="primary">
            Boutique
          </Button>
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
