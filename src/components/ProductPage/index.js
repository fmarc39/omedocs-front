import React from 'react';
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from './Table';

const ProductPage = () => {
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
            <Box
              bgcolor="#FFF"
              p={2}
              mb={2}
              borderRadius="10px"
              align="center"
              boxShadow={4}
            >
              <Typography variant="h5">FENOFIBRATE TEVA 100 mg</Typography>
              <Typography variant="subtitle1">6 000 228 5</Typography>
            </Box>
            <Table />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ProductPage;
