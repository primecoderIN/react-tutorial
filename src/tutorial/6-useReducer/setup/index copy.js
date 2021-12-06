//import React, { useState, useReducer } from 'react';
//import Modal from './Modal';
//import { data } from '../../../data';
// reducer function
//useReducer is used whenever we have more complex state logic
//and next state depende on previous state (Example ToDo List)

//In this tutorial we have done same project using useState.

const Index = () => {

 const [name,setName] = useState('');
 const [people,setPeople] = useState(data);
 const [showModal,setShowModal] = useState(false);

 const handleSubmit = (e) => {
   e.preventDefault();
   if(name) {
    setPeople([...people,{id:new Date().getTime().toString(), name:name}]) //or we can simply write name
    setName('');
   } else {
     setShowModal(true);
   }
 }
  return (
  <> 
  
   <form onSubmit={handleSubmit}>
     <div>
       <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
     </div>
     <button type='submit' className='btn'>add</button>
   </form>
    {showModal && <Modal/>}
    {people.map(person => {
     return (
       <div key={person.id}>
         <h4>{person.name}</h4>
         <span>{person.id}</span>
       </div>
     )
    })}
  </>
 ) 
};

export default Index;

//In this file we achieved the goal without using useReducer
//Because project was smaller. But as the project gets bigger 
//We need a structure to handle states
