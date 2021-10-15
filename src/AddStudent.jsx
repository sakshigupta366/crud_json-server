import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addStudent } from './Services/Api';

export default function AddStudent() {
    const initialValue = {
        name: '',
        date_of_birth: '',
        age: '',
        gender: ''
    }
    const [student, setStudent] = useState(initialValue);
    const { name, date_of_birth, age, gender } = student;
    console.log('name', name);

    const onChangeValue = (e) => {
        console.log(e.target.value);
        setStudent({ ...student, [e.target.name]: e.target.value });
        console.log(student);
    }

    const addStudentDetails = async () => {
        await addStudent(student);
    }

    return (
        <form className="container">
            <span className="form-group">
                Name<input type="text" className="form-control" onChange={(e) => { onChangeValue(e) }} name='name' value={name} required />
            </span>
            <span className="form-group">
                Date Of Birth<input type="date" className="form-control" onChange={(e) => { onChangeValue(e) }} name='date_of_birth' value={date_of_birth} required />
            </span>
            <span className="form-group">
                Age<input type="text" className="form-control" onChange={(e) => { onChangeValue(e) }} name='age' value={age} required />
            </span>
            <span className="form-group">
                Gender<select className="form-control" name="gender" onChange={(e) => { onChangeValue(e) }}
                    value={gender} required>
                    <option selected>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                </select>
            </span>
            <br />
            <button className="btn btn-success" onClick={addStudentDetails}>Save</button>
        </form>
    )
}
