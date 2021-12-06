import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "../setup/reducer";
// reducer function
//useReducer is used whenever we have more complex state logic
//and next state depends on previous state (Example ToDo List)

const Index = () => {
  const defaultState = {
    //Defined intial state seperately
    people: [],
    isModalOpen: true,
    modalContent: "",
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState); //useReducer(reducer function,Initial State)
  // we get two things from useReducer state and dispatch function
  //By convention we write state and dispatch but we can write anything here
  //useReducer takes old state performs action and returns new state
  //useReducer takes two things reducer function and action
  // we dispatch action , this action is performed on default state by decuder functin
  // then we get updated state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      //agar user ne name enter kia hai
      const newItem = { id: new Date().getTime().toString(), name }; //payload is the data being sent with the dispatch function
      dispatch({ type: "ADD_ITEM", payload: newItem }); //With the help of dispatch function returned by useReducer we pass action to be performed on on state by reducer
      //We pass an object in dispatch function, which is received by the action variable in reducer function
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn">
          add
        </button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <span>ID : {person.id}</span>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
