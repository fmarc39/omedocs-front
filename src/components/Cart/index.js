import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LeftMenu from 'src/components/LeftMenu';

const TAX_RATE = 0.0;

const useStyles = makeStyles({
  tabletitle: {
    align: 'left',
    backgroundColor: '#2b88b4',
  },
  table: {
    maxWidth: 1300,
    margin: '20px',
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return {
    desc,
    qty,
    unit,
    price,
  };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Doliprane 500mg', 12, 0.8325),
  createRow('Gbobo', 10, 0.345),
  createRow('Gmal-Partout', 15, 0.434),
  createRow('Anti gueule-de-bois', 1, 14.11),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
        <Header />
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tabletitle}>Votre panier</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell align="right">Quantité</TableCell>
                  <TableCell align="right">Prix unitaire</TableCell>
                  <TableCell align="right">Prix total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.unit}</TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Sous-total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TVA</TableCell>
                  <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
