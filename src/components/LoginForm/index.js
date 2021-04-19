import React from 'react';
import PropTypes from 'prop-types';
import logo from 'src/assets/img/logo.svg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Accordion from './SignUp';

// == Import
import './styles.scss';

const useStyles = makeStyles({
  input: {
    width: '300px',
    marginBottom: '10px ',
  },
  button: {
    backgroudColor: '#004fb1',
    border: 'none',
    outlined: 'none',
    boxShadow: 'none',
  },
});

// == Composant
const LoginForm = ({
  emailConnexion,
  passwordConnexion,
  submitLogin,
  handleChange,
  submitSubscribe,
  email,
  confimEmail,
  password,
}) => {
  const classes = useStyles();

  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };
  const handlerOnSubmit = (event) => {
    event.preventDefault();
    submitLogin();
  };
  return (
    <>
      <Header />
      <Box display="flex" flexDirection="column" justifyContent="center" minHeight="100vh">
        <Box
          width="100%"
          display="flex"
          id="body"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            bgcolor="#fff"
            height="400px"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="10px"
            marginBottom="20px"
          >
            <Box textAlign="center">
              <img className="logo__img" src={logo} alt="logo" style={{ width: '50px' }} />
              <Typography variant="h5">Connectez vous</Typography>
            </Box>

            <form className="form-login" onSubmit={handlerOnSubmit}>
              <TextField
                className={classes.input}
                required
                id="filled-required"
                label="Email"
                variant="filled"
                onChange={handleChangeInput}
                value={emailConnexion}
              />
              <p />
              <TextField
                className={classes.input}
                required
                id="filled-password-input"
                label="Mot de Passe"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={handleChangeInput}
                value={passwordConnexion}
              />
              <Button variant="contained" type="submit" className={classes.button}>
                Connexion
              </Button>
            </form>
            <Typography variant="body2">Mot de passe oublié ?</Typography>
          </Box>
          <Accordion email={email} password={password} />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  // emailSubscribeValue: PropTypes.string.isRequired,
  // emailcheckSubscribeValue: PropTypes.string.isRequired,
  // passwordSubscribeValue: PropTypes.string.isRequired,
  // passwordcheckSubscribeValue: PropTypes.string.isRequired,
  // establishementValue: PropTypes.string.isRequired,
  // cityValue: PropTypes.string.isRequired,
  // adressValue: PropTypes.string.isRequired,
  // rppsValue: PropTypes.string.isRequired,
  // zipValue: PropTypes.string.isRequired,
  // phoneValue: PropTypes.string.isRequired,
};

// == Export
export default LoginForm;
