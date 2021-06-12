import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';


import Student from './student/Student';
import useStyles from './styles';

const Students = ({ setCurrentId }) => {
    const students = useSelector((state) => state.students);
    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        !students.length ? <CircularProgress /> : (
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="Students Table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Student Info</TableCell>
                            <TableCell className={classes.tableHeaderCell}>School Info</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Birthday</TableCell>
                            <TableCell className={classes.tableHeaderCell}><TuneOutlinedIcon /></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((student) => (
                            <TableRow item xs={12}  sm={6} key={student._id}>
                                <Student student={student} setCurrentId={setCurrentId}/>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15]}
                            component="div"
                            count={students.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                        </TableFooter>
                </Table>
            </TableContainer>
        )
    )
}

export default Students;
