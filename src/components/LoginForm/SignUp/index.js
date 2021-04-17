import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import
import './styles.scss';

// == Composant
const LoginForm = ({
  handleChange,
  emailValue,
  passwordValue,
  emailSubscribeValue,
  emailcheckSubscribeValue,
  passwordSubscribeValue,
  passwordcheckSubscribeValue,
  orgaValue,
  cityValue,
  adressValue,
  rppsValue,
  zipValue,
  phoneValue,
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
            <body>
              <h3>Connexion</h3>
              <div className="login">
                <form>
                  <TextField
                    className="login__email"
                    required
                    id="filled-required"
                    label="Email"
                    variant="filled"
                    onChange={handleChangeInput}
                    value={emailValue}
                  />
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
              </div>
              <Button className="myButton" type="submit" variant="contained">Valider</Button>
              <h2>Mot de passe oublié ?</h2>
              <div className="subscribe">
                <form>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      background-color="#c6c6c6"
                    >
                      <Typography variant="h5">Inscription</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <TextField
                        className="subscribe__email"
                        required
                        id="outlined-mail-required"
                        label="Email"
                        variant="outlined"
                        width="50%"
                        columns-count="4"
                        onChange={handleChangeInput}
                        value={emailSubscribeValue}
                      />
                      <TextField
                        className="subscribe__checkemail"
                        required
                        id="outlined-checkmail-required"
                        label="Confirmer l'email"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={emailcheckSubscribeValue}
                      />
                      <TextField
                        className="subscribe__password"
                        required
                        id="outlined-password-input"
                        label="Mot de Passe"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={passwordSubscribeValue}
                      />
                      <TextField
                        className="subscribe__checkpassword"
                        required
                        id="outlined-checkpassword-input"
                        label="Confirmer le mot de passe"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={passwordcheckSubscribeValue}
                      />
                      <TextField
                        className="subscribe__orga"
                        required
                        id="outlined-orga-required"
                        label="Nom de l'organisme"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={orgaValue}
                      />
                      <TextField
                        className="subscribe__city"
                        required
                        id="outlined-city-disable"
                        label="Ville"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={cityValue}
                      />
                      <TextField
                        className="subscribe__adress"
                        required
                        id="outlined-adress-required"
                        label="Adresse"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={adressValue}
                      />
                      <TextField
                        className="subscribe__rpps"
                        required
                        id="outlined-rpps-required"
                        label="RPPS"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={rppsValue}
                      />
                      <TextField
                        className="subscribe__postal"
                        required
                        id="outlined-postal-required"
                        label="Code Postal"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={zipValue}
                      />
                      <TextField
                        className="subscribe__tel"
                        required
                        id="outlined-tel-required"
                        label="Numéro de téléphone"
                        variant="outlined"
                        onChange={handleChangeInput}
                        value={phoneValue}
                      />
                      <FormControl className="radio" component="fieldset">
                        <FormLabel component="legend">Vous souhaitez vous inscrire en tant que :</FormLabel>
                        <RadioGroup>
                          <FormControlLabel value="buyer" control={<Radio />} label="Acheteur" />
                          <FormControlLabel value="seller" control={<Radio />} label="Vendeur" />
                        </RadioGroup>
                      </FormControl>
                      <Button type="submit" className="myButton" variant="contained">
                        Valider
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </form>
              </div>
            </body>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>

  );
};

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  emailSubscribeValue: PropTypes.string.isRequired,
  emailcheckSubscribeValue: PropTypes.string.isRequired,
  passwordSubscribeValue: PropTypes.string.isRequired,
  passwordcheckSubscribeValue: PropTypes.string.isRequired,
  orgaValue: PropTypes.string.isRequired,
  cityValue: PropTypes.string.isRequired,
  adressValue: PropTypes.string.isRequired,
  rppsValue: PropTypes.string.isRequired,
  zipValue: PropTypes.string.isRequired,
  phoneValue: PropTypes.string.isRequired,
};

// == Export
export default LoginForm;
