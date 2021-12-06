import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator
/*
Short circuit evaluation is a way of assigining an alternative
default value to a variable if the original value is not available
*/

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError,setError] =useState(false);
  // const firstValue = text || 'hello world';
   //In or operator if the value is not available alternative text is rendered
   //if the value if avalaible then value is rendered
   //const secondValue = text && 'hello world';

   //In and operator case if the value is not available nothing is rendered
   //But if the value available alternative is rendered

  return (
    <>
   {/*<h1>First Value : {firstValue}</h1>
    <h2>Second Value :{secondValue}</h2>
    braces aur comment hata k test kar skte ho*/} 
    {/*{if() {  console.log('Hello')}}
    This will throw an error because if doe not return anything
    we can not do conditional return in JSX. we have to return a single
    statement always*/} 
    
    {isError && <div> <h1>In case of single element we can </h1> <h2> render block of elements here just remember that</h2></div>}
    <button className='btn' onClick={()=> setError(!isError) }> Toggle Me</button>

    <p> Lets learn ternary operator now</p>
    {isError ? <p> isError is true bro</p>: <h4>isError is false bro. Yad rakhna ki yaha ek element k jagah block of element bhi likh skte hai</h4>}


     </>
  )
};

export default ShortCircuit;
