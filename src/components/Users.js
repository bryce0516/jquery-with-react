import React, { useState } from "react";

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
    otherState: "some",
    isAllChecked:false
  });

  // const [checkedItems, setCheckedItems] = useState(new Set());

  // const checkedItemHandler = (id, isChecked) => {
  //   if (isChecked) {
  //     checkedItems.add(id);
  //     setCheckedItems(checkedItems);
  //   } else if (!isChecked && checkedItems.has(id)) {
  //     checkedItems.delete(id);
  //     setCheckedItems(checkedItems);
  //   }
  // };

  console.log(state.persons);
  const handleAdd = () => {
    setState({
      ...state,
      persons: [...state.persons, { name: "Jerry", age: 31 }],
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
      <input type="checkbox" checked={state.isAllChecked} onChange={() => handleAllchecked(state.isAllChecked)} />
      {state.persons.map((data, index) => {
        return <div key={data.id}><input type="checkbox" checked={data.isChecked} onChange={() => handleindiviualChecked(data.id, data.isChecked)}/><p key={index}>{data.name}</p></div>;
      })}
      <button onClick={handleAdd}>add new state</button>
      <button onClick={() => handleEdit(1)}>edit array</button>

      <div>
        <input type="checkbox" />
      </div>
      
    </>
  );
};

export default Users;
