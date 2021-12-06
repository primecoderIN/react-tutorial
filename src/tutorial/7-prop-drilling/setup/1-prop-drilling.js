import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)
//Prop drilling is not a official term
//Prop drilling concept is relatable when we pass prop to a children in tree component
//Functions can also be passed into component as prop

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  //Lets create a function to remove this single person.
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  //We can not use this removePerson function directly inside singlePerson component
  //Though we do not need this function inside List component, but bina usme bheje ye function ham
  //singlePerson me nahi bhej sakte
  //To solve this problem we have useContext and contextAPI
  return (
    <>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

const List = ({ people, removePerson }) => {
  //This is nothing but destructuring because people is inside prop object here
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  console.log(age);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
