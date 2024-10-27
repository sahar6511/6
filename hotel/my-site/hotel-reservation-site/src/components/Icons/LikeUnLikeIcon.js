import React from 'react';
import { FaHeart } from "react-icons/fa6";
import '../../styles/main.scss'

const LikeUnLikeIcon = (props) => {
  const{hendelLikeUnLikeClick,name} = props
  return (
    <div>
      
      <FaHeart onClick={hendelLikeUnLikeClick} className='like-unlike'>       
      
      </FaHeart>
    </div>
  )
}

export default LikeUnLikeIcon
