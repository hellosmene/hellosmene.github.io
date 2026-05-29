import React from 'react';
import Blob from './Blob';
import Me from 'assets/me.png';

const Image = () => (
  <div className='relative w-[300px] col-start-4'>
    <Blob />
    <img src={Me} alt='me' className='relative z-10 object-cover' />
  </div>
);

export default Image;
