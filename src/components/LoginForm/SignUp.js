/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
    maxWidth: '700px',
    borderRadius: '20px',
    marginBottom: '50px',
  },
  accordion: {
    border: 'none',
    boxShadow: 'none',
  },
  heading: {
    borderRadius: '10px',
    backgroundColor: '#2b88b4',
    margin: '.6em',
    marginLeft: '275px',
    padding: '10px',
    width: '35%',
    textAlign: 'center',
    display: 'block',
    fontWeight: 'bold',
  },
  textField: {
    width: '300px',
    margin: '16px',
  },
  button: {
    alignSelf: 'center',
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  radio: {
    marginLeft: '30px',
  },
  error: {
    color: 'red',
    width: '100%',
    textAlign: 'center',
  },
}));

const SignUp = ({
  email,
  confirmEmail,
  password,
  confirmPassword,
  establishment,
  address,
  zipCode,
  city,
  region,
  phoneNumber,
  rpps,
  userType,
  handleChange,
  submitSubscribe,
  errorMessage,
  errorMessageIsOpen,
  closeErrorMessage,
}) => {
  const classes = useStyles();
  const handleOnChange = (event) => {
    handleChange(event.target.value, event.target.name);
  };
  const handleOnSubmitSubscribe = (event) => {
    event.preventDefault();
    submitSubscribe();
  };
  useEffect(() => {
    setTimeout(() => {
      closeErrorMessage();
    }, 4000);
  });
  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box>
            <Typography className={classes.heading} variant="body">
              Inscription
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <form className={classes.form} onSubmit={handleOnSubmitSubscribe}>
            {errorMessageIsOpen && (
              <Box className={classes.error}>
                <Typography variant="body">{errorMessage}</Typography>
              </Box>
            )}
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Valider l'email"
              name="confirmEmail"
              autoComplete="none"
              type="email"
              value={confirmEmail}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Mot de passe"
              name="password"
              type="password"
              autoComplete="none"
              value={password}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Confirmer le mot de passe"
              name="confirmPassword"
              type="password"
              autoComplete="none"
              value={confirmPassword}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Etablisement"
              name="establishment"
              value={establishment}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Adresse"
              name="address"
              value={address}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Code postal"
              name="zipCode"
              type="number"
              value={zipCode}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Ville"
              name="city"
              value={city}
              onChange={handleOnChange}
              required
              size="small"
            />
            <FormControl size="medium" style={{ width: '300px', margin: '15px' }} size="small">
              <InputLabel id="typeSelect" style={{ padding: '0 0 10px 10px' }}>
                Region
              </InputLabel>
              <Select
                labelId="typeSelect"
                variant="outlined"
                name="region"
                value={region}
                onChange={handleOnChange}
                required
              >
                <MenuItem value="auvergne rhone alpes">Auvergne-Rhône-Alpes</MenuItem>
                <MenuItem value="bourgogne franche comte">Bourgogne-Franche-Comté</MenuItem>
                <MenuItem value="bretagne">Bretagne</MenuItem>
                <MenuItem value="centre val de loire">Centre-Val de Loire</MenuItem>
                <MenuItem value="corse">Corse</MenuItem>
                <MenuItem value="grand est">Grand Est</MenuItem>
                <MenuItem value="hauts de france">Hauts-de-France</MenuItem>
                <MenuItem value="ile de France">Ile-de-France</MenuItem>
                <MenuItem value="normandie">Normandie</MenuItem>
                <MenuItem value="nouvelle aquitaine">Nouvelle-Aquitaine</MenuItem>
                <MenuItem value="occitanie">Occitanie</MenuItem>
                <MenuItem value="pays de la loire">Pays de la Loire</MenuItem>
                <MenuItem value="provence alpes cote d azur">Provence-Alpes-Côte d’Azur</MenuItem>
              </Select>
            </FormControl>

            <TextField
              className={classes.textField}
              variant="outlined"
              label="Numéro de téléphone"
              name="phoneNumber"
              type="number"
              value={phoneNumber}
              onChange={handleOnChange}
              required
              size="small"
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="RPPS"
              name="rpps"
              value={rpps}
              autoComplete="none"
              onChange={handleOnChange}
              required
              size="small"
            />

            <FormControl component="fieldset" className={classes.radio}>
              <FormLabel component="legend">Vous souhaitez vous inscrire en tant que :</FormLabel>
              <RadioGroup name="userType" value={userType} onChange={handleOnChange} required row>
                <FormControlLabel
                  control={<Radio />}
                  label="Hôpital"
                  value="hospital"
                  labelPlacement="start"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Pharmacie"
                  value="pharmacy"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" type="submit" className={classes.button}>
              S'inscrire
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SignUp;
