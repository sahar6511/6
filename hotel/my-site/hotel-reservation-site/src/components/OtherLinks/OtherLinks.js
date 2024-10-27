import React from 'react';
import { Link } from 'react-router-dom';
import LeftAngleIcon from '../Icons/LeftAngleIcon.js';
import '../../styles/main.scss'

const OtherLinks = () => {
  return (
    <div> 
      <h6>سایر پیوندها </h6>
        <ul>
        <li className='flex-container'><LeftAngleIcon></LeftAngleIcon>
                <a >درباره ما</a>

            </li>
            <li className='flex-container'><LeftAngleIcon></LeftAngleIcon>
            <a >تماس با ما</a>
               
            </li>

            <li className='flex-container'><LeftAngleIcon></LeftAngleIcon>
            <a > پشتیبانی</a>
            </li>
        </ul>
    </div>
  )
}

export default OtherLinks