import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './styles.scss';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textField: {
    marginTop: '16px',
    marginBottom: '16px',
    width: '260px',
  },
}));

const ModalAddProduct = ({
  open,
  closeModal,
  nameValue,
  cisValue,
  pathologyValue,
  quantityValue,
  priceValue,
  expirationValue,
  onChange,
}) => {
  const classes = useStyles();

  const handlerCloseModal = () => {
    closeModal();
  };

  const handlerOnChange = (evt) => {
    onChange(evt.target.value, evt.target.name);
  };

  console.log(nameValue, cisValue, pathologyValue, quantityValue, priceValue, expirationValue);

  return (
    <Modal
      open={open}
      onClose={handlerCloseModal}
      className={classes.modal}
      disableAutoFocus
      disablePortal
    >
      <Box
        bgcolor="#fff"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="400px"
        borderRadius="20px"
      >
        <Typography variant="h5" component="h5">
          Rajouter un produit
        </Typography>
        <form className={classes.form}>
          <TextField
            className={classes.textField}
            variant="outlined"
            label="Nom du médicament"
            name="name"
            value={nameValue}
            onChange={handlerOnChange}
            autoFocus
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="number"
            label="Numéro CIS"
            name="cis"
            value={cisValue}
            onChange={handlerOnChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            label="Pathologie"
            name="pathology"
            value={pathologyValue}
            onChange={handlerOnChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="number"
            label="Quantité"
            name="quantity"
            value={quantityValue}
            onChange={handlerOnChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="number"
            label="Prix unitaire"
            name="price"
            value={priceValue}
            onChange={handlerOnChange}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="date"
            name="expiration"
            value={expirationValue}
            onChange={handlerOnChange}
            label="Date d'expiration"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button color="primary" variant="contained">
            Ajouter
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

ModalAddProduct.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  onChange: PropTypes.func,
  nameValue: PropTypes.string,
  cisValue: PropTypes.number,
  pathologyValue: PropTypes.string,
  quantityValue: PropTypes.number,
  priceValue: PropTypes.number,
  expirationValue: PropTypes.string,
};

ModalAddProduct.defaultProps = {
  open: false,
  closeModal: () => {},
  onChange: () => {},
  nameValue: '',
  cisValue: null,
  pathologyValue: '',
  quantityValue: null,
  priceValue: null,
  expirationValue: '',
};

export default ModalAddProduct;
