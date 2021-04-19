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
  emailConnexion,
  passwordConnexion,
  submitLogin,
  handleChange,
  email,
  confirmEmail,
  password,
  confirmPassword,
  establishment,
  adress,
  zipCode,
  region,
  phoneNumber,
  rpps,
  radio,
  handlerChange,
  submitSubscribe,
}) => {
  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };
  const handlerOnSubmit = (event) => {
    event.preventDefault();
    submitLogin();
  };
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
        <Header />
        <Box width="100%" display="flex" id="body">
          <Box
            bgcolor="#95C2DE"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <h3>Connexion</h3>
            <form className="login" onSubmit={handlerOnSubmit}>
              <TextField
                className="login__email"
                required
                id="filled-required"
                label="Email"
                variant="filled"
                onChange={handleChangeInput}
                value={emailConnexion}
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
                value={passwordConnexion}
              />
            </form>
            <Button variant="contained" type="submit">
              Valider
            </Button>
            <h2>Mot de passe oublié ?</h2>
          </Box>
        </Box>
        <Accordion
          email={email}
          confirmEmail={confirmEmail}
          password={password}
          confirmPassword={confirmPassword}
          establishment={establishment}
          adress={adress}
          zipCode={zipCode}
          region={region}
          phoneNumber={phoneNumber}
          rpps={rpps}
          radio={radio}
          handlerChange={handlerChange}
          submitSubscribe={submitSubscribe}
        />
        <Footer />
      </Box>
    </>
  );
};

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  emailConnexion: PropTypes.string.isRequired,
  passwordConnexion: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmEmail: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  establishment: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  rpps: PropTypes.string.isRequired,
  radio: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
  submitSubscribe: PropTypes.func.isRequired,
};

// == Export
export default LoginForm;
