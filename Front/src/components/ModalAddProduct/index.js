import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './styles.scss';
import Modal from '@material-ui/core/Modal';

const ModalAddProduct = ({ open, closeModal }) => {
  const handlerCloseModal = () => {
    closeModal();
  };
  return (
    <Modal open={open} onClose={handlerCloseModal}>
      <Box>
        <Typography variant="h6" component="h6">
          Rajouter un produit
        </Typography>
      </Box>
    </Modal>
  );
};

ModalAddProduct.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
};

ModalAddProduct.defaultProps = {
  open: false,
  closeModal: () => {},
};

export default ModalAddProduct;
