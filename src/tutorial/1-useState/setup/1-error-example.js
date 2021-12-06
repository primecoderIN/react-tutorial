import React from "react";

const ErrorExample = () => {
  let title = "advanced react";
  const changeTitle = () => {
    //...........................................
    title = "Hello from React App"; // This will not update the value after click
    //But the value will be updated after click
    //the reason for this is that react does not touch dom. it can not change dom or update it
    // React can only rerender updated value for this we need to preserve the value in between renders
    //This is why useState comes into play.
    //We can not change or update DOM using react.
    //In react we create virtual dom for each re-render, compares it to earlier DOM  and re-render contennt to update only what needs to be updated
    //...........................................
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={changeTitle}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
