import React ,{ useState } from 'react'

const Users = () => {
  const [state, setState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],    
    otherState: 'some'
  })
  console.log(state.persons)
  const handleAdd = () => {
    setState({
      ...state,
      persons:[...state.persons, {name:'Jerry', age: 31}]
    })
  }
  const handleEdit = (idx) => {
   
    setState({
      ...state,
      persons:[...state.persons, {...state.persons[idx], old:'thisis hold'}]
    })
  }
  return ( 
    <>
      <div>this is users</div>
      {state.persons.map((data, index) => {
        console.log('in map', data, index)
        return <p key={index}>{data.name}</p>
      })}
      <button onClick={handleAdd}>add new state</button>
      <button onClick={() => handleEdit(1)}>edit array</button>
    </>


   );
}
 
export default Users;