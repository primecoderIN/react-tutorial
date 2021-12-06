import React, { useState, useEffect } from "react"; //Both useState and useEffect are named imports here,
//instead of importing in different line we are importing react and hooks in same line
// useEffect by default runs after every re-render
//useEffect allows us to do side effects.
//Any work outside of the component is side effect
//example : Fetching data from server, adding event listeners, sigining up , logging out etc
/*
syntax useEffect(()=> {
   some  code here //This callback function will run after every re-render
})

Note : even the console.log is considered as side effect

*/
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
