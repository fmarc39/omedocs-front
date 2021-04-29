import React from 'react';
import Header from 'src/components/Header';
import LeftMenu from 'src/containers/LeftMenu';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';

import './styles.scss';

const Home = () => (
  <>
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
      <Header />
      <Box height="100%" width="100%" display="flex" id="body">
        <LeftMenu />
        <div className="container">
          <div className="image kenburns-top-right">
            <div className="title-animation">
              <div className="tracking-in-expand-fwd-top">BIENVENUE </div>
              <div className="tracking-in-contract-bck-bottom"> SUR O'MEDOCS</div>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </Box>
  </>
);

export default Home;
