import React, { useState } from "react"; // Yaha named import kia hai

const UseStateObject = () => {
  const [person, setPeople] = useState({
    name: "Sanjeev",
    age: 28,
    message: "Unemployed",
  }); //We passed object in person directly as default state
  const changeMessage = () => {
    // setPeople('Hello World') // this will remove everything and return nothing
    // setPeople({message : 'Hello World'}) // This will also remove previous object and create a new object with message property
    setPeople({ ...person, message: "Hello World" }); // Spread operator will copy the values and then message will be overwritten
    // Because spread operator make the object items individual
    //With braces we are passing an object again in setPeople
  };

  /*............................................................
     # Another way of achieving the same by using multiple state values
     const UseStateObject = () => {
   const [name, setName] = useState('Sanjeev') 
   const [age, setAge] = useState(28) 
   const [message, setMessage] = useState('Unemployed') 
  const changeMessage =() => {
    setMessage('Hello World');
  }
     */
  return (
    <>
      <h2>{person.name}</h2>;<h2>{person.age}</h2>;<h2>{person.message}</h2>;
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );

  /*
    For second way , because we are not dealing with object anymore
     return <>
   <h2>{name}</h2>;
   <h2>{age}</h2>;
   <h2>{message}</h2>;
   <button type='button' className='btn' onClick={changeMessage}>Change Message</button>
   </>
   */
};

export default UseStateObject;
