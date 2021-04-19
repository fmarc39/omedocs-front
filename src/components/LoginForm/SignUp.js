/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function SimpleAccordion() {
  const classes = useStyles();

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
          <Typography>
            <form className={classes.body}>
              <label>
                Email :
                <input type="text" name="email" />
                Confirmer l'email :
                <input type="text" name="emailchecked" />
                Mot de passe :
                <input type="password" name="password" />
                Confirmer le mot de passe :
                <input type="password" name="passwordchecked" />
                Nom de l'établissement :
                <input type="text" name="establishement" />
                Ville :
                <input type="text" name="city" />
                Adresse :
                <input type="texte" name="adress" />
                Code postal :
                <input type="texte" name="zip" />
                RPPS :
                <input type="text" name="rpps" />
                Numéro de téléphone :
                <input type="texte" name="phone" />
              </label>
              <FormControl className="radio" component="fieldset">
                <FormLabel component="legend">Vous souhaitez vous inscrire en tant que :</FormLabel>
                <RadioGroup>
                  <FormControlLabel value="buyer" control={<Radio />} label="Acheteur" />
                  <FormControlLabel value="seller" control={<Radio />} label="Vendeur" />
                </RadioGroup>
              </FormControl>
              <input type="submit" value="Envoyer" />
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
