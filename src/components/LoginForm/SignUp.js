/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: 'auto',
    borderRadius: '10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    borderRadius: '10px',
    borderColor: 'grey',
    backgroundColor: '#303F9F',
    margin: '1em',
    padding: '10px',
    width: '35%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  body: {
    margin: '2em',
    verticalAlign: 'baseline',
    columns: '3',
    textAlign: 'center',
  },
}));

export default function SimpleAccordion(
  email,
  confirmEmail,
  password,
  confirmPassword,
  establishment,
  adress,
  zipCode,
  city,
  region,
  phoneNumber,
  rpps,
  radio,
  handlerChange,
  submitSubscribe,
) {
  const classes = useStyles();
  const handlerOnChange = (event) => {
    handlerChange(event.target.value, event.target.name);
  };
  const handlerOnSubmit = (event) => {
    event.preventdefault();
    submitSubscribe();
  };
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Inscription</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className={classes.body} onSubmit={handlerOnSubmit}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Email"
              name="email"
              value={email}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Valider l'email"
              name="confirmEmail"
              value={confirmEmail}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Mot de passe"
              name="password"
              value={password}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Confirmer le mot de passe"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Etablisement"
              name="establishment"
              value={establishment}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Adresse"
              name="adress"
              value={adress}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Code postal"
              name="zipCode"
              value={zipCode}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Ville"
              name="city"
              value={city}
              onChange={handlerOnChange}
              required
            />
            <FormControl
              size="medium"
              style={{ width: '300px' }}
            >
              <InputLabel id="typeSelect">Region</InputLabel>
              <Select
                className={classes.textField}
                variant="outlined"
                label="Région"
                name="region"
                value={region}
                onChange={handlerOnChange}
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
                <MenuItem value="provence alpes cote d azur">
                  Provence-Alpes-Côte d’Azur
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              className={classes.textField}
              variant="outlined"
              label="Numéro de téléphone"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlerOnChange}
              required
            />
            <TextField
              className={classes.textField}
              variant="outlined"
              label="RPPS"
              name="rpps"
              value={rpps}
              onChange={handlerOnChange}
              required
            />

            <FormControl className="radio" component="fieldset">
              <FormLabel component="legend">Vous souhaitez vous inscrire en tant que :</FormLabel>
              <RadioGroup
                value={radio}
                onChange={handlerOnChange}
                required
              >
                <FormControlLabel value="buyer" control={<Radio />} label="Acheteur" name="type" />
                <FormControlLabel value="seller" control={<Radio />} label="Vendeur" name="type" />
              </RadioGroup>
            </FormControl>
            <input value={submitSubscribe} type="submit" label="Envoyer" />
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
