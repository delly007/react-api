import React, { useState, useEffect } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createStudent, updateStudent } from '../../actions/students';

const Forms = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const [studentData, setStudentData] = useState({ firstname: '', lastname: '', email: '', phone: '', dob: '', gender: '', year: '', faculty: '' });
    const dispatch = useDispatch();
    const student = useSelector((state) => currentId ? state.students.find((s) => s._id === currentId) : null);

    useEffect(() => {
        if(student) setStudentData(student);
    }, [student]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateStudent(currentId, studentData));
        } else {
            dispatch(createStudent(studentData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setStudentData({ firstname: '', lastname: '', email: '', phone: '', dob: '', gender: '', year: '', faculty: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Add'} Student</Typography>
                <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                    <TextField name="firstname" variant="outlined" label="First Name" fullWidth value={studentData.firstname} onChange={(e) => setStudentData({ ...studentData, firstname: e.target.value })} />
                </FormControl>
                <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                    <TextField name="lastname" variant="outlined" label="Last Name" fullWidth value={studentData.lastname} onChange={(e) => setStudentData({ ...studentData, lastname: e.target.value })} />
                </FormControl>
                <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                    <TextField name="email" variant="outlined" label="Email" fullWidth value={studentData.email} onChange={(e) => setStudentData({ ...studentData, email: e.target.value })} />
                </FormControl>
                <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                    <TextField name="phone" variant="outlined" label="Mobile #" fullWidth value={studentData.phone} onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })} />
                </FormControl>
                <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                    <TextField type="date" InputLabelProps={{ shrink: true }} name="dob" variant="outlined" label="Birthday" fullWidth value={studentData.dob} onChange={(e) => setStudentData({ ...studentData, dob: e.target.value })} />
                </FormControl>
                <FormControl  component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender" value={studentData.gender} onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })}>
                        <FormControlLabel value="F" control={<Radio />} label="Female" />
                        <FormControlLabel value="M" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="year">Year</InputLabel>
                    <Select
                        native
                        value={studentData.year}
                        onChange={(e) => setStudentData({ ...studentData, year: e.target.value })}
                        label="Year"
                        inputProps={{
                            name: 'year',
                            id: 'year',
                        }}
                        >
                        <option></option>
                        <option value='1'>Year 1</option>
                        <option value='2'>Year 2</option>
                        <option value='3'>Year 3</option>
                        <option value='4'>Year 4</option>
                        <option value='5'>Year 5</option>
                        <option value='6'>Year 6</option>
                    </Select>
                </FormControl>
                <FormControl fullWidth component="fieldset" variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="faculty">Faculty</InputLabel>
                    <Select
                        native
                        value={studentData.faculty}
                        onChange={(e) => setStudentData({ ...studentData, faculty: e.target.value })}
                        label="Faculty"
                        inputProps={{
                            name: 'faculty',
                            id: 'faculty',
                        }}
                        >
                        <option></option>
                        <option value='Arts'>Arts</option>
                        <option value='Engineering'>Engineering</option>
                        <option value='Education'>Education</option>
                        <option value='Environmental Science'>Environmental Science</option>
                        <option value='Law'>Law</option>
                        <option value='Science'>Science</option>
                        <option value='Medical Science'>Medical Science</option>
                        <option value='Management Science'>Management Science</option>
                        <option value='Pharmacy'>Pharmacy</option>
                        <option value='Social Science'>Social Science</option>
                        <option value='Clinical Science'>Clinical Science</option>
                    </Select>
                </FormControl>
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setStudentData({ ...studentData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Forms;
