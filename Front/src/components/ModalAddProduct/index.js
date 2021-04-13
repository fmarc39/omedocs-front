import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Modal from '@material-ui/core/Modal';

const ModalAddProduct = ({ open, handlerCloseModal }) => (
  <Modal
    open={open}
    onClose={() => {
      handlerCloseModal();
    }}
  >
    <h1>Ma modale</h1>
  </Modal>
);

ModalAddProduct.propTypes = {
  open: PropTypes.bool,
  handlerCloseModal: PropTypes.func,
};

ModalAddProduct.defaultProps = {
  open: false,
  handlerCloseModal: () => {},
};

export default ModalAddProduct;
