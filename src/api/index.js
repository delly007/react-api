import axios from 'axios';

const url = 'http://localhost:8800/students';

export const fetchStudents = () => axios.get(url);
export const createStudent = (newStudent) => axios.post(url, newStudent);
export const updateStudent = (id, updatedStudent) => axios.patch(`${url}/${id}`, updatedStudent);
export const deleteStudent = (id) => axios.delete(`${url}/${id}`);