import React, { useState } from "react"; // useState is a function that is coming from react
// so here with comma we are importing both react and useState in a single line
//useState is a named import so we can not change its name also curly braces is mandatory
//useState allows re-rendering ofontent and it preserves the states as well

/*....................................................
Basic Hooks Rules : 
1. every hook function starts with 'use
2. first letter in Component name must be in uppercase example ClickEvent not clickEvent
3. Hook must be used in component body only if used outside this will be an error
4. Hooks can not be used conditionally , Function returned by hooks can be used conditionally

*/
const UseStateBasics = () => {
  //console.log(useState); // to prove that useState is a function
  //To know what useState returns, just invoke and console log it
  //console.log(useState())
  //useState returns an array [undefined, f], undefined is replaced by state when we define state and
  //the function then controls the state
  //console.log(useState('Hello')) >> Output : ['Hello',f]
  //const [text, setText] = useState('Hello')
  //Now console.log(text) > "Hello", here text will be the default value of state
  //console.log(setText) > function
  //The undefined can be a string, a number, a boolean, an array or an object
  const [text, setText] = useState("React State Tutorial"); // React start tutorial is default state;

  const changeText = () => {
    // changeText function will be invoked when button is clicked

    if (text === "React State Tutorial") {
      setText("Hello World"); //Using useState's function here to update the state
    } else {
      setText("React State Tutorial");
    } /// This is how we do toggle operation in react
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>;
      <button type="button" className="btn" onClick={changeText}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
