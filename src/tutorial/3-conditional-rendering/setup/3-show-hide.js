import React, { useState, useEffect } from 'react';


const ShowHide = () => {
  const [show,setShow] = useState(false);
  return (
    <>
    <button className='btn' onClick={()=> setShow(!show)}>Toggle Me</button>
    {show && <Item/>}
    </>
  );
};

const Item = () => {
  const [size,setSize] = useState(window.innerWidth);
  const checkSize =() => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',checkSize);
    return () => {
      window.removeEventListener('resize',checkSize);
      //so now on toggle we will toggle event listener too add and remove it 
    }
  },[]) //Here dependency list wont save us from memory leak because we are toggling componenet
  //so adding a cleanup function along with dependency list is mandatory 
  return <div>
    <h1>Window Size : {size}</h1>
  </div>
}
export default ShowHide;
