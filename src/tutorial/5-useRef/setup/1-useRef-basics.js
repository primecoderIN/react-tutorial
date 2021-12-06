import React, { useEffect, useRef } from "react";

//like useState useRef preserves value
//unlike useState ,useRef DOES NOT trigger re-render
//useRef is mostly used to target DOM nodes/elements
//useRef can be used for uncontrolled inputs
//But there are multiple things that we can do with useRef
/*
Q. What is the difference between controlled and uncontrolled input?
Ans : In cntrolled input data is controlled by react but
 in uncontrolled input data is controlled by DOM itself. WHich means data for each input is stored in
 dom. In controlled input data is controlled by react using state.

 In useRef case we do not need to run function for every change in input. 

*/

const UseRefBasics = () => {
  const divContainer = useRef(null);
  const refContainer = useRef(null); //useRef returns a mutable object which creates a reference to the
  //dom element in the functional component || The returned object is {current : null}
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
    //using refContainer inside input element we are able to access entered input here
    //input is not the only dom element we can create reference to. we can create reference to any dom element
    //but inside functional componenet
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    //SO we can use useeffect with useRef to have some additional features
    //Here we do not need to add dependency list because useRef do not trigger re-rendering
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
        <h1 ref={divContainer}>Hello</h1>
      </form>
    </>
  );
};

export default UseRefBasics;
