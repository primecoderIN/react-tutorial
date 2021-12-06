import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading,setLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user,setUser] = useState('default user');
  //if condition is met then if part will be rendered
  // otherwise else part will be returned, this is conditional rendering
 //In this example we are checking if a github user exits. 
 //if exists we will display the use 
 useEffect(() => {
   fetch(url) //Fetching user
  // .then(response => response.json())//converting response to object
  .then(response=> {
    if(response.status>=200 && response.status<=299) {
      return response.json();
    } else {
      setLoading(false);
      setIsError(true);
      throw new Error(response.statusText);
      // Now this will trigger if(isError)
  }
  })
  .then(user => {
     const {login} = user;
     setUser(login);
     setLoading(false)
   })//displaing what we received
   .catch(error => console.log(error))//It will run if there is some error
   //But fetch does not look for fetch error, it just looks for network error
 },[]) //Added dependency list to run useEffect only once
  if(loading) {
    return <h1>Loading Please Wait . . .</h1>
  } 
  if(isError) {
      return <h2>Could not fetch data</h2>;
  }
  return (
    <> 
      <h1>{user}</h1>
    </>
  )
 
}; 

export default MultipleReturns;
