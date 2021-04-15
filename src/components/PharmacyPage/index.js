import React from 'react';
import LeftMenu from 'src/components/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import Accordion from './accordion';
import Table from './Table';

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
              p={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Accordion />
              <Table />
            </Box>
          </Box>
          <Footer />
        </Box>
      </>
    </div>
  );
};

export default PharmacyPage;
