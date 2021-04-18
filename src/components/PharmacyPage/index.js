import React from 'react';
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import Accordion from 'src/containers/AccordionsPharmacyDetails';
import InventoryTable from 'src/containers/Tables/PharmacyPageTable';

const PharmacyPage = () => {
  const manger = 'cest super cool';
  return (
    <div>
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
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Accordion />
              <InventoryTable />
            </Box>
          </Box>
          <Footer />
        </Box>
      </>
    </div>
  );
};

export default PharmacyPage;
