import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
//once we setup context we get access to two components
// 1. Provider and 2. COnsumer
//Provider works as a distributor and to access it type (PersonContext.provider)
//We will use PersonContext.provider to wrap return of root component and use it to pass anything to
//any other content. we will not need to do prop drilling
//value is used to pass anything from provider
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>prop drilling</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext); //mainData is object here which has removePerson function and People List
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext); //Destructuring kia taki direct removePerson access kar sake
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

//contextAPI is useful only when we have multiple level of prop drilling
