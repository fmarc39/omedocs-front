import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  paper: {
    minWidth: '800èx',
    overflow: 'hidden',
    textAlign: 'center',
  },
});

function createData(orderNumber, orderDate, totalPrice, status) {
  return {
    orderNumber,
    orderDate,
    totalPrice,
    status,
  };
}

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {row.orderNumber}
        </TableCell>
        <TableCell align="left">{row.orderDate}</TableCell>
        <TableCell align="left">{row.totalPrice}</TableCell>
        <TableCell align="left">{row.status}</TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderNumber: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const HistoryPageTable = ({ orderHistory }) => {
  const rows = orderHistory.map((order) =>
    createData(
      `n° ${order.orderNumber}`,
      order.orderDate,
      `${order.totalPrice} €`,
      order.status
    )
  );
  const classes = useRowStyles();
  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h6"
        style={{ padding: '15px', backgroundColor: '#0368A3', color: '#FFF' }}
      >
        Historique de vos commandes
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="cells-title">Numéro de commande</p>
              </TableCell>
              <TableCell align="left">
                <p className="cells-title">Date de commande</p>
              </TableCell>
              <TableCell align="left">
                <p className="cells-title"> Montant total</p>
              </TableCell>
              <TableCell align="left">
                <p className="cells-title">Statut</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderNumber} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

HistoryPageTable.propTypes = {
  orderHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HistoryPageTable;
