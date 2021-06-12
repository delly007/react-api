import React, { useState, useEffect } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getStudents } from './actions/students';
import Students from './components/students/Students';
import Forms from './components/forms/Forms';

import logo from './images/memories.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStudents);
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Students</Typography>
                <img className={classes.image} src={logo} alt="logo" height="60" />
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Forms currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Students setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    )
}

export default App;
