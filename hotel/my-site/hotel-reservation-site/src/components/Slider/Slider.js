import React from 'react';

import SearchPanel from '../SearchPanel/SearchPanel';
import TopMenu from '../TopMenu/TopMenu';
import Header from '../Header/Header';
import Divider from '../Divider/Divider'
import '../../styles/main.scss';

const Slider = () => {
  return (
    <div className='slider'>
      <TopMenu />
      <Divider/>
      <Header />
  {/* <SearchPanel></SearchPanel>   */}
    </div>
  )
}

export default Slider
