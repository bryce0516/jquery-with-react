import React, { useState } from "react";
import useFetch from './useFetch'
const Users = () => {
  const [state, setState] = useState({
    persons: [
      { id: 1, name: "Max", age: 28,isChecked: false },
      { id: 2, name: "Manu", age: 29 ,isChecked: false},
      { id: 3, name: "Stephanie", age: 26 ,isChecked: false},
      { id: 4, name: "Stephanie", age: 26 ,isChecked: false},
      { id: 5, name: "Stephanie", age: 26 ,isChecked: false},
      { id: 6, name: "Stephanie", age: 26 ,isChecked: false},
    ],
    id : 6,
    otherState: "some",
    isAllChecked:false
  });
  const data =  useFetch()
  console.log('data', data)
  console.log(state.persons);
  const handleAdd = (id) => {
    setState({
      ...state,
      persons: [...state.persons, {id: id+1, name: "Jerry", age: 31 }],
    });
  };
  const handleEdit = (idx) => {
    setState({
      ...state,
      persons: state.persons.map((person) =>
        person.id === idx ? { ...person, name2: "yeoolw" } : person
      ),
    });
  };

  const handleAllchecked = (check) => {
    setState({
      ...state,
      isAllChecked : !check,
      persons: state.persons.map((person) => 
        person ? {...person, isChecked: !check } : person)
    })
  }

  const handleindiviualChecked = (id, check) => {
    console.log('handleindiviualChecked', id , check)
    setState({
      ...state,
      persons: state.persons.map((person) => 
        person.id === id ? {...person, isChecked: !check} : person
      )
    })
  }
  return (
    <>
      <div>this is users</div>
      <input type="checkbox" id="allCheck" name="allCheck"checked={state.isAllChecked} onChange={() => handleAllchecked(state.isAllChecked)} />{` `}<label htmlFor="allCheck">allCheck</label>
      {state.persons.map((data, index) => {
        return <div key={data.id}><input type="checkbox" key={data.id} id="indivisual" name="indivisual" checked={data.isChecked} onChange={() => handleindiviualChecked(data.id, data.isChecked)}/><label htmlFor="indivisual">{data.name}</label></div>;
      })}
      <button onClick={() => handleAdd(state.id)}>add new state</button>
      <button onClick={() => handleEdit(1)}>edit array</button>

      <div>
        <input type="checkbox" />
      </div>
      
    </>
  );
};

export default Users;
