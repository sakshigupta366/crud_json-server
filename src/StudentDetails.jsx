import React, { useEffect, useState } from 'react';
import './App.css';
import { getstudents, deleteStudent } from './Services/Api';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StudentDetails() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = async () => {
        const response = await getstudents();
        console.log(response.data);
        setStudents([...response.data]);
    }
    const deleteStudents = async (id) => {
        console.log(id);
        await deleteStudent(id);
        getAllStudents();
    }

    return (
        <div className="App">
            <table border="1" className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Date Of Birth</th>
                    <th>Age-Years</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
                {
                    students.map((item) => {
                        return (<tr><td>{item.name}</td><td>{item.date_of_birth}</td><td style={item.age <= 10 ? { color: 'red' } : { color: 'black' }}>{item.age}</td><td>{item.gender}</td><td><button>Edit</button><button onClick={() => { deleteStudents(item.id) }}>Delete</button></td></tr>)
                    })
                }
            </table>
        </div>
    )
}
