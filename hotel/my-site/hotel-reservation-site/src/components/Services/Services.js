import React from 'react';
import LeftAngleIcon from '../Icons/LeftAngleIcon.js';
import '../../styles/main.scss'

const Services = () => {
  return (
    <div> 
      <h6>خدمات</h6>
        <ul>
            <li className='flex-container'><LeftAngleIcon></LeftAngleIcon>
                <a>غذا و رستوران</a>

            </li>
            <li className='flex-container'><LeftAngleIcon></LeftAngleIcon>
            <a >ورزش</a>
               
            </li>

            <li className='flex-container'><LeftAngleIcon></LeftAngleIcon>
            <a > رویدادها</a>
            </li>
        </ul>
    </div>
  )
}

export default Services