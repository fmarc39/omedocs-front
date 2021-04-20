import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Produit 1', desc: 'Doliprane 500mg (12 boites)', price: '9.99€' },
  { name: 'Produit 2', desc: 'Gbobo (10 boites)', price: '3.45€' },
  { name: 'Produit 3', desc: 'Gmal-Partout (15 boites)', price: '6.51€' },
  { name: 'Produit 4', desc: 'Anti gueule-de-bois (1 boite)', price: '14.11€' },
  { name: 'Livraison', desc: '', price: 'Gratuite' },
];
const addresses = ['Hôpital Hôtel-Dieu AP-HP', '1 Parvis Notre-Dame - Pl. Jean-Paul II', 'Paris', '75004 '];
const payments = [
  { name: 'Type de carte', detail: 'Visa' },
  { name: 'Propriétaire', detail: 'Dr John Doe' },
  { name: 'Numéro de carte', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: "Date d'expiration", detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Récapitulatif
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            34.06€
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envoi
          </Typography>
          <Typography gutterBottom>Dr John Doe</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Détails du paiement
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
