import React from 'react'

const DynamicImg = ({imgSrc}) => {
  return (
    <img src={imgSrc} alt='fixed-img' className='h-[150px] w-[150px]'/>
  )
}

export default DynamicImg