/* eslint-disable no-mixed-operators */
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import LeftMenu from 'src/components/LeftMenu';

// Import react-router-dom pour ajouter des links aux boutons
import { NavLink } from 'react-router-dom';

// IMPORT MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import PaymentIcon from '@material-ui/icons/Payment';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const TAX_RATE = 0.0;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createData(name, qty, unit, del) {
  const price = priceRow(qty, unit);
  return {
    name,
    qty,
    unit,
    del,
    price,
  };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createData('Doliprane 500mg', 12, 111.8325),
  createData('Gbobo', 10, 0.345),
  createData('Gmal-Partout', 15, 0.434),
  createData('Anti gueule-de-bois', 1, 14.11),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Nom du produit',
  },
  {
    id: 'qty',
    numeric: true,
    disablePadding: false,
    label: 'Quantité',
  },
  {
    id: 'unit',
    numeric: true,
    disablePadding: false,
    label: 'Prix unitaire',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Prix total',
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    height: '100%',
  },
  table: {
    minWidth: 750,
    maxHeight: 950,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const CartPage = ({ cartData }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows = cartData.map((article) => {
    createData(
      article.productname,
      <>
        <IconButton aria-label="delete" className={classes.margin}>
          <AddIcon fontSize="small" />
        </IconButton>
        {article.quantity}
        <IconButton aria-label="delete" className={classes.margin}>
          <AddIcon fontSize="small" />
        </IconButton>
      </>,
      article.price
    );
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Gestion du nombre de pages dans le tableau
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // Gestion du nombre de pages
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />

          <div className={classes.root}>
            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {stableSort(rows, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow hover tabIndex={-1} key={row.name}>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                            <TableCell align="right">
                              {ccyFormat(row.price)}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={1}>Sous-total</TableCell>
                      <TableCell align="right">
                        {ccyFormat(invoiceSubtotal)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TVA</TableCell>
                      <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                        0
                      )} %`}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={1}>Total</TableCell>
                      <TableCell align="right">
                        {ccyFormat(invoiceTotal)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Tooltip title="Procéder au paiement">
                <NavLink
                  to="/checkout"
                  style={{ textDecoration: 'none', position: 'right' }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<PaymentIcon />}
                    size="medium"
                    className="btn-checkout"
                    fullWidth
                  >
                    Payer :
                  </Button>
                </NavLink>
              </Tooltip>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CartPage;
