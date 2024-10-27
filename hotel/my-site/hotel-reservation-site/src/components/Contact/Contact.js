import React from 'react';
import Email from '../Icons/EmailIcon';
import Phone from '../Icons/PhoneIcon';
import Address from '../Icons/AddressIcon';
import Facebook from "../Icons/FacebookIcon";
import Linkedin from "../Icons/LinkedinIcon";
import Twitter from "../Icons/TwitterIcon";
import Youtube from "../Icons/YoutubeIcon";
import '../../styles/main.scss'


const Contact = () => {
  return (
    <div> 
      <h6>اطلاعات تماس</h6>
      <ul>
        <li><Address></Address><a>تهران - خیابان مطهری پلاک ۱</a></li>
        <li><Email></Email><a href="mailto:arya@gmail.com">arya@gmail.com</a></li>
        <li><Phone></Phone><a href="tel:02181686">۰۲۱۸۱۶۸۸</a></li>
        <ul className='footer-socialicon'> 
          <li><Twitter></Twitter></li>
        <li><Facebook></Facebook></li>
        <li><Youtube></Youtube></li>
        <li><Linkedin></Linkedin></li>
        </ul>
        
      </ul>
      
      
      
      
      
      
      
      

    </div>
  )
}

export default Contact
