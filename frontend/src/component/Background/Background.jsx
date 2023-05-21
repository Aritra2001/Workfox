import React from 'react';
import '../Background/Background.css';
import Logo from '../../images/Logo.png'

const Background = () => {
  return (
    <div className='bg'>
      <a href='/'><img src={Logo} alt="" /></a>
      <div className='spot-1'></div>
      <div className='spot-2'></div>
    </div>
  );
}

export default Background;
