// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import ConfirmationBox from './DialogBox';
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Import IMG

import medicaementImg from 'src/assets/img/product-page-bg.jpg';

// Import FROM MATERIAL UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ProductTable from 'src/containers/Tables/ProductPageTable';
import Slide from '@material-ui/core/Slide';

// Import CSS

import './styles.scss';

const ProductPage = ({ productName, productCis }) => {
  const leCode = 'cest super cool';
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Header />
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />
          <Box
            bgcolor="#C6C6C6"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Slide direction="down" in="true" mountOnEnter unmountOnExit>
              <Box
                className="medicaement-box"
                p={2}
                mb={2}
                borderRadius="10px"
                align="center"
                boxShadow={4}
              >
                <h4 className="medicaement-box__title">{productName} </h4>
                <p className="medicaement-box__text">{productCis}</p>
              </Box>
            </Slide>
            <ProductTable productName={productName} productCis={productCis} />
          </Box>
          <ConfirmationBox />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

ProductPage.propTypes = {
  productCis: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};

export default ProductPage;
