/* eslint-disable no-mixed-operators */
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import LeftMenu from 'src/containers/LeftMenu';

// Import react-router-dom pour ajouter des links aux boutons
import { NavLink, Link } from 'react-router-dom';

// Icons
import ShoppingCart from 'src/assets/img/shopping-cart.svg';

// IMPORT MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Slide from '@material-ui/core/Slide';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
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

// Import CSS
import './styles.scss';

// Configuration des colones avec le nom, le label, la largeur
const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Nom du produit',
  },
  {
    id: 'qty',
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

  {
    id: 'del',
    minWidth: 50,
  },
];

// Taux de TVA
const TAX_RATE = 0.0;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

// Fonction qui va crer les lignes à insserer dans le tableau
function createData(name, qty, unit, dellRow) {
  const price = priceRow(qty, unit);
  return {
    name,
    qty: Number(qty),
    unit: Number(unit),
    price: Number(price),
    dellRow,
  };
}

let rows = [];

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

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="default"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <p className="cells-title">{headCell.label}</p>
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
  btn: {
    marginRight: 'auto',
    marginLeft: 'auto',
    background: '#0368A3',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
    borderRadius: '15px',
  },
  delBtn: {
    color: '#0368A3',
  },
}));

const CartPage = ({ cartData, deleteArticle }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Gestion du btn delete pour gerer la supression d'un article du panier
  const handleDeleteCLickBtn = (event) => {
    deleteArticle(event.target.closest('button').name);
  };

  rows = cartData.map((article) =>
    createData(
      article.productname,
      article.quantityToBuy,
      article.price,
      <IconButton
        aria-label="delete"
        onClick={handleDeleteCLickBtn}
        name={article.id}
        className={classes.delBtn}
      >
        <DeleteIcon />
      </IconButton>
    )
  );

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Header />
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />
          <Box
            bgcolor="#C6C6C6"
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {cartData.length === 0 && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                className="empty-cart"
                boxShadow={4}
              >
                <p className="empty-cart__head">
                  Votre panier est tristement
                  <span className="empty-cart__head-span"> vide</span>
                </p>
                <img
                  src={ShoppingCart}
                  alt="shopping-cart-icon"
                  className="empty-cart__img"
                />
                <p className="empty-cart__text">
                  Cliquez
                  <Link to="/searchproduct" className="empty-cart__link">
                    ici
                  </Link>
                  pour rechercher un produit
                </p>
              </Box>
            )}
            {cartData.length !== 0 && (
              <Slide direction="down" in="true" mountOnEnter unmountOnExit>
                <Box
                  className="cart-box"
                  p={2}
                  mb={2}
                  borderRadius="10px"
                  align="center"
                  boxShadow={4}
                >
                  <h4 className="cart-box__title"> Votre panier </h4>
                </Box>
              </Slide>
            )}

            <div className={classes.root}>
              {cartData.length !== 0 && (
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
                                  padding="default"
                                >
                                  {row.name}
                                </TableCell>
                                <TableCell align="left">{row.qty}</TableCell>
                                <TableCell align="left">{row.unit}</TableCell>
                                <TableCell align="left">
                                  {ccyFormat(row.price)}
                                </TableCell>
                                <TableCell align="left">
                                  {row.dellRow}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        <TableRow>
                          <TableCell rowSpan={3} />
                          <TableCell colSpan={1}>Sous-total</TableCell>
                          <TableCell align="right">
                            {ccyFormat(invoiceSubtotal)} €
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
                            <p className="total-price">
                              {ccyFormat(invoiceTotal)} €
                            </p>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Tooltip
                    title="Procéder au paiement"
                    placement="'bottom-right'"
                  >
                    <NavLink
                      to="/checkout"
                      style={{ textDecoration: 'none', position: 'right' }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<PaymentIcon />}
                        size="large"
                        className={classes.btn}
                      >
                        Payer
                      </Button>
                    </NavLink>
                  </Tooltip>
                </Paper>
              )}
            </div>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

CartPage.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
};

export default CartPage;
