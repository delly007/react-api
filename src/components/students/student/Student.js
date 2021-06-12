import React from 'react';
import { Avatar, Grid, TableCell, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import TrashIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deleteStudent } from '../../../actions/students';

const Student = ({ student, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const clear = () => {
        setCurrentId(null);
    }

    return (
        <>
            <TableCell>
                <Grid container>
                    <Grid item lg={3}>
                        <Avatar className={classes.avatar} alt={student.firstname} src="." />
                    </Grid>
                    <Grid item lg={9}>
                        <Typography className={classes.name}>{student.firstname + ' ' + student.lastname}</Typography>
                        <Typography color="textSecondary" variant="body2">{student.email}</Typography>
                        <Typography color="textSecondary" variant="body2">{student.phone}</Typography>
                    </Grid>
                </Grid>
            </TableCell>
            <TableCell>
                <Typography color="primary" variant="subtitle2">{"Faculty of " + student.faculty}</Typography>
                <Typography color="textSecondary" variant="body2">{ "University of Lagos." }</Typography>
            </TableCell>
            <TableCell>
                <Typography color="textSecondary" variant="body2">{student.dob}</Typography>
            </TableCell>
            <TableCell>
                <Grid container>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <EditIcon onClick={() => setCurrentId(student._id)} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <TrashIcon onClick={() => dispatch(deleteStudent(student._id))} />
                    </Grid>
                </Grid>
            </TableCell>
            
        </>
    );
}

export default Student;
