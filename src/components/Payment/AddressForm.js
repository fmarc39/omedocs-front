import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const handleChangeInput = (event) => {
  handleChange(event.target.value, event.target.name);
};
const handleOnSubmitAdress = (event) => {
  event.preventDefault();
  submitAdress();
};

export default function AddressForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Votre adresse
      </Typography>
      <Grid onSubmit={handleOnSubmitAdress} method="post" container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            onChange={handleChangeInput}
            label="Prénom"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            onChange={handleChangeInput}
            label="Nom"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="establishement"
            name="establishement"
            onChange={handleChangeInput}
            label="Nom de l'établissement"
            fullWidth
            autoComplete="establishement-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="service"
            name="service"
            onChange={handleChangeInput}
            label="Nom du service"
            fullWidth
            autoComplete="service-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            onChange={handleChangeInput}
            label="Addresse"
            fullWidth
            autoComplete="shipping address"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            onChange={handleChangeInput}
            label="Région"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            onChange={handleChangeInput}
            label="Ville"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            onChange={handleChangeInput}
            label="Code Postal"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Utiliser cette adresse pour la facturation"
          />
        </Grid>
      </Grid>
    </>
  );
}
