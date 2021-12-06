import React, { useState } from "react";

// We used too many functions here to achive the goal in previour file
//Let's now learn how to pass a function in hooks

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value+1) //with button clicks This will always consider the default value(0) even if i click 10 times.
      // So value will increse by 1 all the time , use function inside setValue to get current value of setValue
      setValue((currentValue) => {
        return currentValue + 1; //Now it is working as expected
        //Whatever we return here will be the new state value

        //This is functional approach of updating state value. We can use it anywhere but it is better to use as when needed.
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0rem" }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
