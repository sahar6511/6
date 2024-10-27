import React from 'react';
import '../../styles/main.scss'

const Warning = (props) => {
  return (
    <div className='warning container-custom'>{props.children}</div>
  )
}

export default Warning