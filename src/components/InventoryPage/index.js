// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import from MATERIAL-UI
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LeftMenu from 'src/containers/LeftMenu';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import ModalAddProduct from 'src/components/ModalAddProduct';

// Import COMPONENTS
import InventoryTable from 'src/containers/Tables/PharmacyPageTable';

// Import CSS
import './styles.scss';

const InventoryPage = ({ inventoryData, handleAddArticle }) => {
  const handleAddArticleBtn = () => {
    handleAddArticle();
  };
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
              display="flex"
              width="80%"
              mb={4}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="h4" gutterBottom className="main-title">
                Votre inventaire
              </Typography>
              <Button
                variant="contained"
                onClick={handleAddArticleBtn}
                color="primary"
                size="large"
                startIcon={<AddCircleOutlineIcon />}
              >
                Ajouter un article
              </Button>
            </Box>
            {inventoryData.length !== 0 ? (
              <InventoryTable />
            ) : (
              <div className="up-arrow">
                <p>Votre inventaire est vide.</p>
                <p>Commencer à la remplir</p>
              </div>
            )}
          </Box>
        </Box>
        <ModalAddProduct />
        <Footer />
      </Box>
    </>
  );
};

InventoryPage.propTypes = {
  inventoryData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddArticle: PropTypes.func.isRequired,
};

export default InventoryPage;
