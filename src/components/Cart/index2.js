// Import REACT
import React from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import CartTable from './';

// Import MATERIAL UI

import { makeStyles } from '@material-ui/core/styles';

// Import CSS
import './styles.scss';

// Mise en place du style material-UI
const useStyles = makeStyles(() => ({
  btn: {
    background: '#0368A3',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
    borderRadius: '15px',
  },
}));

const SearchPharmacy = ({}) => {
  const classes = useStyles();
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
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <h1>Ok</h1>
            <CartTable />
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default SearchPharmacy;
