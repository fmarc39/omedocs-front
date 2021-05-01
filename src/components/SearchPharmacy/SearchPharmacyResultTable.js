// Import REACT
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
import { Typography, Box } from '@material-ui/core';

// Import Img
import noResultsLogo from 'src/assets/img/no-results.svg';

// Configuration des colones avec le nom, le label, la largeur
const columns = [
  { id: 'name', label: 'Nom de la Pharmacie', minWidth: 200 },
  { id: 'user_type', label: 'Etablissement', minWidth: 100 },
  { id: 'rpps', label: 'Rpps', minWidth: 100 },
  { id: 'region', label: 'Région', minWidth: 100 },
];

// Fonction qui va insérer les données dans le tableau
function createData(name, user_type, rpps, region, id) {
  return { name, user_type, rpps, region, id };
}

// Configuration des styles du tableau avec MATERIAL-UI
const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
  },
  container: {
    minHeight: 100,
    minWidth: 700,
  },
});

const PharmacyTable = ({ establishments }) => {
  // Récupération de l'id de l'établissement au clic sur la ligne du tableau
  console.log(establishments);
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
  const rows = establishments.map((pharmacy) =>
    createData(
      pharmacy.establishment,
      pharmacy.user_type,
      pharmacy.rpps,
      pharmacy.region,
      pharmacy.id
    )
  );

  return (
    <Paper className={classes.root}>
      <Typography
        variant="h6"
        style={{ padding: '10px', backgroundColor: '#A8C1E2' }}
      >
        Liste des établissements
      </Typography>
      {establishments.length !== 0 ? (
        <>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
                      style={{ minWidth: column.minWidth }}
                    >
                      <p className="cells-title">{column.label}</p>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody style={{ cursor: 'pointer' }}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      data-rpps={row.id}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Link to={`establishment/${row.id}`}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </Link>
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
        </>
      ) : (
        <Box p={4}>
          <h1
            style={{ padding: '5px', fontWeight: '700', marginBottom: '2rem' }}
          >
            Il n'y a aucun établissement de ce nom présent sur le site
          </h1>
          <img
            style={{ width: '150px' }}
            src={noResultsLogo}
            alt="no-results-logo"
          />
        </Box>
      )}
    </Paper>
  );
};

PharmacyTable.propTypes = {
  establishments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PharmacyTable;
