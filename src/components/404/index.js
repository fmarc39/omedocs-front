import React from 'react';
import './styles.scss';
import LeftMenu from 'src/components/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';

const index = () => (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
        <Header />
        <Box height="100%" width="100%" display="flex" id="body">
          <Box
            bgcolor="#C6C6C6"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            
          >

        <Box display="flex" mb={4}>
            <div className="err">4</div>
            <div className="fa-annim"><i className="far fa-question-circle fa-spin" /></div>
            <div className="err2">4</div>
        </Box>
        <div className="msg">
            <p>
            Peut-être que cette page a été déplacée?<br />
            Se cacher est-elle en quarantaine?<br />
            N'a jamais existé en premier lieu.<br />
            </p>
            <p>Allons à <a href="/">Accueil</a> et essayons à partir de là</p>
        </div>

          </Box>
        </Box>
        <Footer />
      </Box>
    </>
);

export default index;
