// import { FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api';

//Create actions

//Get All Students
export const getStudents = async(dispatch) => {
    try {
        const { data } = await api.fetchStudents();

        dispatch({ type: "FETCH_ALL", payload: data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const createStudent = (student) => async(dispatch) => {
    try {
        const { data } = await api.createStudent(student);

        dispatch({ type: "CREATE", payload: data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const updateStudent = (id, student) => async(dispatch) => {
    try {
        const { data } = await api.updateStudent(id, student);

        dispatch({ type: "UPDATE", payload: data});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteStudent = (id) => async(dispatch) => {
    try {
        await api.deleteStudent(id);

        dispatch({ type: "DELETE", payload: id});
    } catch (error) {
        console.log(error);
    }
}