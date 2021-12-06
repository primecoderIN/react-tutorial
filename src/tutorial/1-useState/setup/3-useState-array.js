import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  /*
     useState('React State Tutorial')  and React.useState([]) is same. And exactly does same thing.
     if i need to use a hook multiple times then i will import and then use it. 
     else use directly like used in this component
  */

  const removeItem = (id) => {
    let updatedPeople = people.filter((person) => person.id !== id);
    //Creating an array that includes every item except the item to be removed
    setPeople(updatedPeople);
    //Updating the state of the compopent with the new information

    //  //...................................................
    //   //updated people can be used inside setPeople using function as well (2nd Way)
    //  setPeople((oldPeople) => { //oldPeople is current state value (last update)
    //    let updatedPeople = oldPeople.filter((person) => person.id !== id);
    //    return updatedPeople; //Whatever returned will be new value of setPeople, it is must
    //matlab ya to function run kr k setPeople use kro ya fir setPeople me function run kar k return karo
    //result same hi milega
    // })
    //  //...................................................
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        //JS k andar JSX likhskte hai
        return (
          //JSX k andar js nahi likh skte hai isiliye {} use hota
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Hide Me
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear List
      </button>
    </>
  );
};

export default UseStateArray;
