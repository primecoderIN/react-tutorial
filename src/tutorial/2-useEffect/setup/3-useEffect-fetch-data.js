import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([]);

   const getUsers =  async  () => {
         const response = await fetch(url);
         const users = await response.json();
         setUsers(users)
         /*
         If we setUsers here it will update the state but also re-render useEffect
         which will create infinite loop and browser will crash
         To avoid this we can use empty array as second parameter in
         useEffect 

         */
        // console.log(users)
      }

  useEffect(()=> {  //Callback function of useEffect can not be made asynchronous
    //So using another function inside 
     getUsers();
  },[])
  return (
    <> 
     <h2>Github Users</h2>
     <ul>
       {
       users.map((user) => {
         const {id, login, avatar_url,html_url} =user;
         return (
          <li key={id}>
            <img src={avatar_url}/>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
         </li>
         )
       })   //We just fetched data using useEffect and useState
     }
     </ul>
     
    </>
  ) 
};

export default UseEffectFetchData;
