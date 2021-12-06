import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault(); //We are telling form element that tum kuch mat karo sab ham khud karenge
    if (name && email) {
      // const Person = {Name : name, Email : email}
      const person = { id: new Date().getTime().toString(), name, email }; // cuz key and value is same so we can use like this
      //id generate kia newDate k help se
      // setPeople([...people, person]); aise hi kar sakte hai
      setPeople((people) => {
        return [...people, person]; //Doing this to know what other ways are available
        // returning previous + new person in the people array
      });
      setName(""); //Cleared state value to receive new
      setEmail(""); //cleared to receive new
    } else {
      alert("One or more input is empty");
    }
  };

  //Instead of including onsubit in form element
  //we can do this as well
  //<button type='submit' onClcik={submitHandler}>Add People</button>
  //Both are okay
  return (
    <>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="Name">Name :</label>
            <input
              id="Name"
              type="text"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              type="text"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Add People</button>
          </div>
        </form>
        {people.map(({ name, email, id }) => {
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <p>{id} </p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
