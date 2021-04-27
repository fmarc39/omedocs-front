/* eslint-disable no-nested-ternary */
// Import React
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Import CSS styles
import './styles.scss';

// Configuration des colones avec le nom, le label, la largeur
const columns = [
  { id: 'name', label: 'Nom', minWidth: 300 },
  { id: 'cis', label: 'CIS', minWidth: 100 },
  { id: 'quantity', label: 'Quantité disponible', minWidth: 100 },
  { id: 'price', label: 'Prix unitaire H.T', minWidth: 100 },
  { id: 'quantityToBuy', label: 'Quantité', minWidth: 100 },
  { id: 'addToCart', minWidth: 200 },
];

// Fonction qui va insérer les données dans le tableau
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

// Configuration des styles MATERIAL-UI
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

const InventoryTable = ({ fetchInventory, inventory, establishment }) => {
  console.log(inventory);
  //  fetch l'inventaire du user
  useState(() => {
    fetchInventory(establishment[0].id);
  }, []);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Gestion du nombre de pages dans le tableau
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // Gestion du nombre de pages
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // On récupere les resultats du state pour boucler dessus et les afficher dans le tableau

  //TODO: BOUCLER ICI SUR LES TABLEAU FILTRER A LA PLACE DE 'establishments'.

  const rows = inventory.map((row) =>
    createData(
      row.drugName,
      row.cis,
      row.quantity,
      row.price,
      <TextField id="standard-basic" label="quantité" type="number" />,
      <Button variant="contained" color="primary" endIcon={<AddShoppingCartIcon />}>
        Ajouter au panier
      </Button>,
    ),
  );

  // variable crée pour conditioner l'afficher du tableau
  let typeRender = '';
  if (establishment[0].user_type === 'hospital') {
    typeRender = 'hospital';
  } else if (establishment[0].user_type === 'pharmacy' && inventory.length === 0) {
    typeRender = 'pharmacyHasNoInventory';
  } else {
    typeRender = 'pharmacyHasInventory';
  }

  return (
    <div>
      {/* Si l'établissement est une pharmacie et qu'elle a des médicaments en stock on affiche le tableau */}
      {typeRender === 'pharmacyHasInventory' ? (
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
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
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
      ) : typeRender === 'pharmacyHasNoInventory' ? (
        // Si l'établissement est une pharmacie sans inventaire
        <h1>Cet pharmacie n'a pas de médicament en stock</h1>
      ) : (
        // Si l'établissement est un hôpital
        <h1> Pas de stock a afficher pour les hôpitaux</h1>
      )}
    </div>
  );
};

InventoryTable.propTypes = {
  fetchInventory: PropTypes.func.isRequired,
  inventory: PropTypes.array,
  establishment: PropTypes.array,
};

InventoryTable.defaultProps = {
  inventory: [],
  establishment: [],
};

export default InventoryTable;
