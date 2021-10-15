import axios from 'axios';

const url = "http://localhost:3003/students";

export const getstudents = async () => {
    return await axios.get(url);
}
export const addStudent = async (student) => {
    if(student.age||student.name||student.date_of_birth||student.gender!=='')
    return await axios.post(url, student);    
}
export const deleteStudent = async (id) => {
    alert("Do you really want to delete");
    return await axios.delete(`${url}/${id}`);
}

