import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

// The function that toggles between themes
const useStyles = makeStyles(() => ({
  btn: {
    background: '#0368A3',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
    borderRadius: '15px',
    marginBottom: '1.5rem',
  },
  logoutBtn: {
    color: '#0368A3',
    marginBottom: '1.5rem',
    marginTop: '1.5rem',
    borderRadius: '15px',
    '&:hover': {
      background: '#0368A3',
      color: 'white',
    },
  },
}));

function DarkMode() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  };
  const classes = useStyles();
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Button>
          <div className={classes.btn}>
            <button type="button" onClick={toggleTheme}>Dark Mode</button>
          </div>
        </Button>
      </>
    </ThemeProvider>
  );
}

export default DarkMode;
