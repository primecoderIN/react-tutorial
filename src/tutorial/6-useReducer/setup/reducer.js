 export const reducer = (state,action) =>{ // 1st param is state right before that update and 2nd param is action
  //reducer function will update the state once we dispatch the action here
  //We must return updated state from the reducer function, if we do not return anything then there will be an error
   if(action.type === 'ADD_ITEM') {
     console.log(action) //SO action is object, it receives type and payload from the dispatch function
     const newPeople = [...state.people,action.payload]; //updated the array with ned content, for each click an object will be added to this array
     return {...state,people:newPeople,isModalOpen:true,modalContent:'item added'};
     //Here we updated each item in state because we are getting names as input
   } 
   if(action.type === "NO_VALUE") {
      return {...state,isModalOpen:true,modalContent:'please enter name'}
      //Here we updated only isMOdalopen and modalcontent because we are not getting names as input
   }
   if(action.type ==='CLOSE_MODAL') {
     return {...state,isModalOpen:false}
   }
   if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
   throw new Error('No match found');
 };