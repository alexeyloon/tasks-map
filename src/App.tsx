import React from 'react';
import './App.css';
import NewComponent from "./NewComponent";
import TopCars from "./TopCars";

function App() {
    let students = [{id: 1, name: 'Jon', age: 24}, {id: 2, name: 'Yui', age: 23}, {id: 3, name: 'Roy', age: 24}]
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
  return (
    <div >
{/*<NewComponent students={students}/>*/}
        <TopCars cars={topCars}/>
    </div>
  );
}

export default App;
