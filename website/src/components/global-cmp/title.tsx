import React from 'react'

const Title = ({title, description}: {title: string, description: React.ReactNode}) => {
  return (
    <div className='border-b border-border-accent pb-3'>
        <h1 className='text-2xl md:text-3xl font-medium'>{title}</h1>
        <p className='mt-3'>{description}</p>
    </div>
  )
}

export default Title