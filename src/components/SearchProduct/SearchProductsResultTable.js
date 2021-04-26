// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import NPM
import { Link } from 'react-router-dom';

// Import from MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import StoreIcon from '@material-ui/icons/Store';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const columns = [
  { id: 'title', label: 'Nom', minWidth: 200 },
  { id: 'code', label: 'Code CIS', minWidth: 30 },
  { id: 'quantity', label: 'Quantity', minWidth: 30 },
  { id: 'link', minWidth: 50 },
];

function createData(title, code, quantity, link) {
  return { title, code, quantity, link };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    minHeight: 350,
    minWidth: 700,
  },
  head: { fontWeight: 'bo' },
  TableRow: {
    cursor: 'pointer',
  },
  btn: {
    color: 'white',
    borderRadius: '15px',
    background: '#0368A3',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
  },
});

const ProductTable = ({ productResultsData }) => {
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

  const rows = productResultsData.map((product) =>
    createData(
      product.title,
      product.code,
      product.quantity,
      <>
        <Link to={`product/${product.code}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" className={classes.btn} startIcon={<StoreIcon />}>
            Allez vers les vendeurs
          </Button>
        </Link>
      </>,
    ),
  );

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.head}>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                hover
                className={classes.TableRow}
                id="tableRow"
                data-id={row.code}
                tabIndex={-1}
                key={row.code}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
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
};

ProductTable.propTypes = {};

export default ProductTable;
