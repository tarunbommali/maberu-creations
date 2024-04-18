import React from 'react'

const Content = ({content}) => {
  return (
    <div className='w-auto h-[150px] overflow-y-scroll'>
        <h1 className='font-semibold text-lg'>Content</h1>
        <p className='text-lg'>Published</p>
        {content}
    </div>
  )
}

export default Content