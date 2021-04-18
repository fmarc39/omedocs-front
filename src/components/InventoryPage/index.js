import React from 'react';
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LeftMenu from 'src/containers/LeftMenu';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import Table from './Table';

const InventoryPage = () => {
  const bonjour = 'salut';
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
            <Box
              display="flex"
              width="80%"
              mb={4}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="h4" gutterBottom>
                Votre inventaire
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddCircleOutlineIcon />}
              >
                Ajouter un article
              </Button>
            </Box>
            <Table />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default InventoryPage;
