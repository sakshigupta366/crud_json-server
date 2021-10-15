import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDetails from './StudentDetails';
import AddStudent from './AddStudent';

export default function App() {
  const [showform, setShowform] = useState(false);
  console.log(showform);
  function Form() {
    return (
      <div className="App">
        <AddStudent setShowForm={setShowform} />
        <button className="btn btn-danger m-4" onClick={() => setShowform(false)}>Cancel</button>
      </div>
    );
  }

  function Table() {
    return (
      <div className="App">
        <button onClick={() => setShowform(true)}>Add New</button>
        <StudentDetails />
      </div>
    );
  }
  return <div>{showform ? <Form /> : <Table />}</div>;
}
