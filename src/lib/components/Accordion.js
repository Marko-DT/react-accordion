import React, { useState } from 'react';

export default function Accordion(props) {
  
  const [show, setShow] = useState(false);
  const handleClick = () => {
  setShow(prev => !prev);
 
}
const style = {
  display:"flex",
  alignItems: "center"
}
    return (
      <>
      <div  style={style} onClick={handleClick}><h4>{props.title}</h4><span>{props.btn}</span></div>
       { show && <p>{props.text}</p> }
      </>
    );
  }
