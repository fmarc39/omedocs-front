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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Grow from '@material-ui/core/Grow';

// Import CSS styles

import './styles.scss';

// Configuration des colones avec le nom, le label, la largeur
const columns = [
  { id: 'name', label: 'Nom', minWidth: 300, type: 'string' },
  { id: 'cis', label: 'CIS', minWidth: 100, type: 'number' },
  {
    id: 'expirationDate',
    label: 'Date limite de consommation',
    minWidth: 200,
    type: 'date',
  },
  { id: 'quantity', label: 'Quantité', minWidth: 50 },
  { id: 'price', label: 'Prix H.T', minWidth: 50, type: 'number' },
  { id: 'dellRow', minWidth: 50 },
];

// Fonction qui va insérer les données dans le tableau
function createData(name, cis, expirationDate, quantity, price, dellRow) {
  return {
    name,
    cis,
    expirationDate,
    quantity,
    price,
    dellRow,
  };
}

// Configuration des styles MATERIAL-UI
const useStyles = makeStyles({
  root: {
    width: '100%',
  },

  container: {
    minHeight: 350,
    minWidth: 700,
  },
});

const InventoryTable = ({
  inventoryData,
  handleDeleteCLick,
  handleSaveClick,
}) => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Gestion de l'ouverture et de la fermeture des forms de modification de mail et du phoneNumber
  const [editQuantityInputIsOpen, setQuantityMailInputIsOpen] = useState(true);

  // Gestion du nombre de pages dans le tableau
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // Gestion du nombre de pages
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // Gestion du click sur le btn delete
  const handleDeleteCLickBtn = () => {
    handleDeleteCLick();
  };

  // Gestion du click sur le btn edit
  const handleEditClickBtn = () => {
    setQuantityMailInputIsOpen(!editQuantityInputIsOpen);
  };

  // Gestion du click sur le btn de sauvegarde
  const handleSaveClickBtn = (event) => {
    console.log(event.target.closest('.save-btn').previousElementSibling);
    handleSaveClick();
  };

  // On récupere les resultats du state pour boucler dessus et les afficher dans le tableau
  const rows = inventoryData.map((article) =>
    createData(
      article.name,
      article.cis,
      article.expirationDate,
      <Box>
        {editQuantityInputIsOpen && article.quantity}
        <IconButton aria-label="edit" onClick={handleEditClickBtn}>
          <EditIcon />
        </IconButton>
        {!editQuantityInputIsOpen && (
          <>
            <Grow
              in={!editQuantityInputIsOpen}
              style={{ transformOrigin: '0 200 0' }}
            >
              <TextField
                className="quantity-input"
                label="quantité"
                variant="outlined"
                size="small"
                type="number"
                id={article.cis}
              />
            </Grow>
            <IconButton
              color="primary"
              onClick={handleSaveClickBtn}
              className="save-btn"
            >
              <SaveIcon />
            </IconButton>
          </>
        )}
      </Box>,
      article.price,
      <IconButton aria-label="delete" onClick={handleDeleteCLickBtn}>
        <DeleteIcon />
      </IconButton>
    )
  );

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
              .map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  className={classes.tableRow}
                >
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
  );
};

InventoryTable.propTypes = {
  inventoryData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteCLick: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
};

export default InventoryTable;
