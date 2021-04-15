import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const columns = [
  { id: 'name', label: 'Nom', minWidth: 300 },
  { id: 'cis', label: 'CIS', minWidth: 100 },
  { id: 'quantity', label: 'Quantité disponible', minWidth: 100 },
  { id: 'price', label: 'Prix unitaire H.T', minWidth: 100 },
  { id: 'quantityToBuy', label: 'Quantité', minWidth: 100 },
  { id: 'addToCart', minWidth: 200 },
];

function createData(name, cis, quantity, price, quantityToBuy, addToCart) {
  return {
    name,
    cis,
    quantity,
    price,
    quantityToBuy,
    addToCart,
  };
}

const rows = [
  createData(
    'FENOFIBRATE TEVA 100 mg',
    '6 000 228 5',
    18,
    '3€',
    <TextField id="standard-basic" label="quantité" type="number" />,
    'ajouter au panier'
  ),
  createData(
    'FENOFIBRATE TEVA 100 mg',
    '6 000 228 5',
    18,
    '3€',
    <TextField id="standard-basic" label="quantité" type="number" />,
    'ajouter au panier'
  ),
  createData(
    'FENOFIBRATE TEVA 100 mg',
    '6 000 228 5',
    18,
    '3€',
    <TextField id="standard-basic" label="quantité" type="number" />,
    'ajouter au panier'
  ),
  createData(
    'FENOFIBRATE TEVA 100 mg',
    '6 000 228 5',
    18,
    '3€',
    <TextField id="standard-basic" label="quantité" type="number" />,
    'ajouter au panier'
  ),
  createData(
    'FENOFIBRATE TEVA 100 mg',
    '6 000 228 5',
    18,
    '3€',
    <TextField id="standard-basic" label="quantité" type="number" />,
    'ajouter au panier'
  ),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'hidden',
  },
  container: {
    minHeight: 350,
    minWidth: 700,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, { value: -1, label: 'Tous' }]}
        labelRowsPerPage="Résultats par page"
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
