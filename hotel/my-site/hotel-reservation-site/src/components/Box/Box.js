import React from 'react';
import '../../styles/main.scss'



const Box = (props) => {
  return (
   

    <div className='box'>
        <span><props.icon/></span>
        <p className='mtb-5 text-bold' style={{color:"#000"}}>{props.number}</p>
        <p>{props.title}</p>
   </div>

  )
}

export default Box
