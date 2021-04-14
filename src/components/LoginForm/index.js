// == Import npm
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
import LeftMenu from 'src/components/LeftMenu';

// == Import
import './styles.scss';

// == Composant
const LoginForm = ({ inputValue, onInputChange }) => (
  <form
    className="login"
    onSubmit={(event) => {
      event.preventDefault();
      alert('Soumission du formulaire');
    }}
  >
    <h1>Connexion</h1>
    <LeftMenu />
    <TextField
      className="login__email"
      required
      id="filled-required"
      label="Email"
      variant="filled"
      onChange={onInputChange}
      value={inputValue}
    />
    <TextField
      className="login__password"
      required
      id="filled-password-input"
      label="Mot de Passe"
      type="password"
      autoComplete="current-password"
      variant="filled"
    />
    <h2>Mot de passe oublié ?</h2>
    <Button variant="contained">Valider</Button>
    <div className="subscribe" />
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
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
        />
        <TextField
          className="subscribe__checkemail"
          required
          id="outlined-checkmail-required"
          label="Confirmer l'email"
          variant="outlined"
        />
        <TextField
          className="subscribe__password"
          required
          id="outlined-password-input"
          label="Mot de Passe"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          className="subscribe__checkpassword"
          required
          id="outlined-checkpassword-input"
          label="Confirmer le mot de passe"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          className="subscribe__orga"
          required
          id="outlined-orga-required"
          label="Nom de l'organisme"
          variant="outlined"
        />
        <TextField
          className="subscribe__city"
          required
          id="outlined-city-disable"
          label="Ville"
          variant="outlined"
        />
        <TextField
          className="subscribe__adress"
          required
          id="outlined-adress-required"
          label="Adresse"
          variant="outlined"
        />
        <TextField
          className="subscribe__rpps"
          required
          id="outlined-rpps-required"
          label="RPPS"
          variant="outlined"
        />
        <TextField
          className="subscribe__postal"
          required
          id="outlined-postal-required"
          label="Code Postal"
          variant="outlined"
        />
        <TextField
          className="subscribe__tel"
          required
          id="outlined-tel-required"
          label="Numéro de téléphone"
          variant="outlined"
        />
        <FormControl className="radio" component="fieldset">
          <FormLabel component="legend">Vous souhaitez vous inscrire en tant que :</FormLabel>
          <RadioGroup>
            <FormControlLabel value="buyer" control={<Radio />} label="Acheteur" />
            <FormControlLabel value="seller" control={<Radio />} label="Vendeur" />
          </RadioGroup>
        </FormControl>
        <Button className="myButton" variant="contained">
          Valider
        </Button>
      </AccordionDetails>
    </Accordion>
  </form>
);

LoginForm.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
};

LoginForm.defaultProps = {
  inputValue: '',
  onInputChange: () => {},
};
// == Export
export default LoginForm;
