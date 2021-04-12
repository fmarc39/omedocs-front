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

const columns = [
    { id: 'title', label: 'Nom', minWidth: 180 },
    { id: 'code', label: 'code CIS', minWidth: 50 },
    { id: 'components', label: 'Composant', minWidth: 100 },
    { id: 'type', label: 'Type', minWidth: 80 },
    { id:  'link', label: 'Liens'}
    ];

    function createData(title, code, components, type, link = 'Liens vers la Pharmacie') {
    return { title, code, components, type, link };
    }

    
    const rows = [
    createData('ANASTROZOLE ACCORD 1 mg, comprimé pelliculé', '6 000 228 3', 1324171354, 3287263),
    createData('RANITIDINE BIOGARAN 150 mg, comprimé effervescent', '6 000 228 3', 1403500365, 9596961),
    createData('BECLOSPIN 800 microgrammes/2 ml, suspension pour inhalation par nébuliseur en récipient unidose', '6 000 228 3', 60483973, 301340),
    createData('FENOFIBRATE TEVA 100 mg, gélule', '6 000 228 3', 327167434, 9833520),
    createData('FAMOTIDINE EG 20 mg, comprimé pelliculé', '6 000 228 3', 37602103, 9984670),
    ];

    const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
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
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
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
            rowsPerPageOptions={[10, 25, 100]}
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
