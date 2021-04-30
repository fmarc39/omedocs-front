import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import GoogleMap from 'src/components/GoogleMap';

import './styles.scss';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {},
}));

const MapModal = ({
  open, // open modal
  setOpen,
  lat,
  lng,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      className={classes.modal}
      disablePortal
      disableEnforceFocus
    >
      <GoogleMap lat={lat} lng={lng} />
    </Modal>
  );
};

MapModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

MapModal.defaultProps = {
  lat: null,
  lng: null,
};

export default MapModal;
