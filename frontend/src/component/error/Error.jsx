import React from 'react';
import './Error.css'

const Error = () => {
  return (
    <div className='error'>
      <p>404! Page Not Found</p>
      <a href='/'><button id='home'>Home</button></a>
    </div>
  );
}

export default Error;
