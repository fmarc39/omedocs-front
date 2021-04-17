import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Accordion from './SignUp';

// == Import
import './styles.scss';

// == Composant
const LoginForm = ({
  handleChange,
  emailValue,
  passwordValue,
}) => {
  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
        <Header />
        <Box width="100%" display="flex" id="body">
          <Box
            bgcolor="#C6C6C6"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <h3>Connexion</h3>
            <form className="login">
              <TextField
                className="login__email"
                required
                id="filled-required"
                label="Email"
                variant="filled"
                onChange={handleChangeInput}
                value={emailValue}
              />
              <p />
              <TextField
                className="login__password"
                required
                id="filled-password-input"
                label="Mot de Passe"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={handleChangeInput}
                value={passwordValue}
              />
            </form>
            <Button variant="contained" type="submit">Valider</Button>
            <h2>Mot de passe oublié ?</h2>
          </Box>
        </Box>
        <Accordion />
        <Footer />
      </Box>
    </>

  );
};

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
};

// == Export
export default LoginForm;
