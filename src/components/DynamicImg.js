import React from 'react';

const DynamicImg = ({ imgUrl, contentTitle }) => {
    console.log(imgUrl)
  return (
    <div>
      <img src={imgUrl} alt={contentTitle} className='h-[150px] w-[150px]' />
    </div>
  );
};

export default DynamicImg;
