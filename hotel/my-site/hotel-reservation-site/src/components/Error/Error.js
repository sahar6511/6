import React from 'react';
import '../../styles/main.scss'

const Error = (props) => {
  return (
    <div className='error container-custom'>{props.children}</div>
  )
}

export default Error