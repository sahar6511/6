import React from 'react';
import "../../styles/main.scss";

const Title = (props) => {
  return (
    
      <h4 className='title'> {props.title1} <span>{props.title2}</span></h4>
   
  )
}

export default Title
