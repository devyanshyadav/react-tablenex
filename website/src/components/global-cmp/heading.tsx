import React from 'react'
import slugify from 'slugify'

const Heading = ({title, content}: {title: string, content: React.ReactNode}) => {
  return (
    <div style={{scrollMarginTop:"50px"}} id={slugify(title, { lower: true })} className='space-y-3'>
        <h2 className='text-lg md:text-xl'>{title}</h2>
        <div>{content}</div>
    </div>
  )
}

export default Heading