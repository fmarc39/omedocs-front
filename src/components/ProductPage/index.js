import React from 'react';
import LeftMenu from 'src/components/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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
            <Box>
              <Typography>FENOFIBRATE TEVA 100 mg</Typography>
              <Typography>6 000 228 5</Typography>
            </Box>
            {/* content hear */}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ProductPage;
