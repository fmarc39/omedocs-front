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

const DialogChangeInformationsModal = ({
  isOpen,
  handleClose,
  handleChangeInfo,
}) => {
  const handleCloseBtn = () => {
    handleClose();
  };
  const handleValidation = (event) => {
    console.log(event.target.closest('button').name);
    handleChangeInfo();
  };

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
          Souhaitez vous sauvegarder le changement ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleValidation} color="primary">
            Valider
          </Button>
          <Button onClick={handleCloseBtn} color="primary">
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogChangeInformationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleChangeInfo: PropTypes.func.isRequired,
};

export default DialogChangeInformationsModal;
