import React from 'react'

const Content = ({content, contentTitle}) => {
  return (
    <div className='w-auto '>
        <h1 className='font-semibold text-lg'>{contentTitle}</h1>
        <p className='text-lg'>Published</p>
        {content}
    </div>
  )
}

export default Content