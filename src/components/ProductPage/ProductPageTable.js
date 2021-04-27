// Import REACT
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// Import from MATERIAL-UI
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

// Import CSS
import './styles.scss';

// Configuration des colones avec le nom, le label, la largeur
const columns = [
  { id: 'name', label: 'Nom', minWidth: 300 },
  { id: 'quantity', label: 'Quantité disponible', minWidth: 100 },
  { id: 'price', label: 'Prix unitaire H.T', minWidth: 100 },
  { id: 'addToCart', minWidth: 100 },
];

// Fonction qui va insérer les données dans le tableau
function createData(name, quantity, price, quantityToBuy, addToCart) {
  return {
    name,
    quantity,
    price,
    quantityToBuy,
    addToCart,
  };
}

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

const ProductTable = ({ addToCart, products }) => {
  // filter on result of search drugs

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

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // On récupère les datas du form avec dataset
    const {
      dataset: { pharmacyname, price, quantity, productname, productid },
    } = event.target;
    // On récupère la quantité rentré par l'user
    const formData = new FormData(event.target);
    const quantityToBuy = formData.get('quantityToBuy');
    // On va vérifier que l'user n'entre pas une quantité supérieur à la quantité dispo de l'article
    if (Number(quantityToBuy) > Number(quantity) || Number(quantityToBuy) === 0) {
      event.target.classList.add('error');
      setTimeout(() => {
        event.target.classList.remove('error');
      }, 1000);
    } else {
      // On met toutes les datas dans un objet pour les envoyes dans le panier
      const dataToSendToCart = {
        pharmacyname,
        price,
        quantity,
        productname,
        productid,
        quantityToBuy,
      };
      // On envois les data dans le panier via un action
      addToCart(dataToSendToCart);
    }
  };

  // On récupere les resultats du state pour boucler dessus et les afficher dans le tableau
  const rows = filterProduct.map((pharmacy) =>
    createData(
      pharmacy.name,
      pharmacy.quantity,
      `${pharmacy.price}  €`,
      <TextField id="quantity" label="quantité" type="number" />,
      <Box display="flex" justifyContent="flex-end" alignItems="start">
        <form
          onSubmit={handleSubmitForm}
          data-pharmacyname={pharmacy.name}
          data-price={pharmacy.price}
          data-quantity={pharmacy.quantity}
          data-productname={filterProduct.name}
          data-productid={filterProduct.cis}
          name="addProduct"
          className="addProductToCart"
        >
          <TextField
            label="quantité"
            type="number"
            name="quantityToBuy"
            InputProps={{ inputProps: { min: 1, max: pharmacy.quantity } }}
          />
          <IconButton variant="contained" type="submit" color="primary">
            <AddShoppingCartIcon />
          </IconButton>
        </form>
      </Box>,
    ),
  );
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className="tableCell"
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover tabIndex={-1} key={row.code}>
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

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductTable;
