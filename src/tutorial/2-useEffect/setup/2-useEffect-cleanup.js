import React, { useState, useEffect } from 'react';

// cleanup function
// second argument 


const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth); //Set default value of window size
  
  const checkSize = () => {
    setSize(window.innerWidth) //Will update the value of size 
  }
  useEffect(() => {
    console.log('Hello World'); // We see that we have bunch of event listeners everytime we re-render useEffect
    window.addEventListener('resize',checkSize)  //Each time the window is resized checkSize function will run
    return () => {
      console.log('Cleanup')
      window.removeEventListener('resize', checkSize); //This will remove event listener after rendering
    }
  })
  /*
   Everything seems to be working perfect but there is a problem. (line 14)
   There is memory leak due to this problem
   SO to solve this we have an option of returning a function(line16) which can remove event listeners after
   each rendering

   Another solution for this could be adding dependency list as second parameter 
   This will make useEffect render only once and there will be only one event listener 
   attached to window. But this is good only when the component is on the opage all time. 
   if we have components which appear and disappear then returning function is better. 

   We can pass values in dependency list to re-render useEffect at those particular state values. 

   Note : we can have multiple useEffect in a single component
  */
  return (
    <>
    <h3>Screen Width</h3>
     <h1>{size} PX</h1>
    </>
  )
};

export default UseEffectCleanup;
 