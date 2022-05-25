import React from 'react'
import loader from './loader.gif'
export default function spinner() {
  return (
    <div className='text-center'>
        <img className = "my-3 "src={loader} alt = "loading" width="500px"/>
    </div>
  )
}
