import React, { useState } from "react";

const Users = () => {
  const [state, setState] = useState({
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
      { id: 3, name: "Stephanie", age: 26 },
      { id: 3, name: "Stephanie", age: 26 },
      { id: 3, name: "Stephanie", age: 26 },
    ],
    otherState: "some",
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
  return (
    <>
      <div>this is users</div>
      {state.persons.map((data, index) => {
        console.log("in map", data, index);
        return <div><input type="checkbox" /><p key={index}>{data.name}</p></div>;
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
