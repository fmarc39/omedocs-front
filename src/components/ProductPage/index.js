// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// Import FROM MATERIAL UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ProductTable from 'src/containers/Tables/ProductPageTable';
import Slide from '@material-ui/core/Slide';

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
                bgcolor="#FFF"
                p={2}
                mb={2}
                borderRadius="10px"
                align="center"
                boxShadow={4}
              >
                <Typography variant="h5">{productName}</Typography>
                <Typography variant="subtitle1">{productCis}</Typography>
              </Box>
            </Slide>
            <ProductTable productName={productName} productCis={productCis} />
          </Box>
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
