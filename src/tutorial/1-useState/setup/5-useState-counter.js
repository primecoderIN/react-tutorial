import React, { useState } from 'react';
/*
const UseStateCounter = () => {
  const [value,setValue] = useState(0);
  return <>
  <section style={{margin: '4rem 0rem'}}>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => {
        if(value>0) setValue(value-1);
      }}>Decrease</button>
      <button className='btn' onClick={() => {
        setValue(value+1);
      }}>Increase</button>
      <button className='btn' onClick={() => {
        setValue(0);
      }}>Reset</button>
  </section>
   </>
   */

   // We used too many functions here to achive the goal
   //Let's now learn how to pass a function and use it multiple times

   const UseStateCounter = () => {
  const [value,setValue] = useState(0);
  return <>
  <section style={{margin: '4rem 0rem'}}>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => {
        if(value>0) setValue(value-1);
      }}>Decrease</button>
      <button className='btn' onClick={() => {
        setValue(value+1);
      }}>Increase</button>
      <button className='btn' onClick={() => {
        setValue(0);
      }}>Reset</button>
  </section>
   </>
};

export default UseStateCounter;
