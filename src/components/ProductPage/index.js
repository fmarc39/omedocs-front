import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ProductTable from 'src/containers/Tables/ProductPageTable';

const ProductPage = ({ products }) => {
  // filter on result of search drugs
  const { id } = useParams;
  const filterProduct = products.filter((product) => product.id === id);
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
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
            <Box bgcolor="#FFF" p={2} mb={2} borderRadius="10px" align="center" boxShadow={4}>
              <Typography variant="h5">{filterProduct.name}</Typography>
              <Typography variant="subtitle1">{filterProduct.cis_code}</Typography>
            </Box>
            <ProductTable />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductPage;
