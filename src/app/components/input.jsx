import React from 'react'

export default function input({name, label, type, required, ...props}) {
  return (
    <div className='flex flex-col'>
        <div className='capitalize'>
            {label || name} <span className='text-red'></span>
        </div>
    </div>
  )
}
