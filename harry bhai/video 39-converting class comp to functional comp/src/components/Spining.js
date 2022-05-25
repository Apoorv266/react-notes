// import { render } from '@testing-library/react'
import React from 'react'
import loader from './loader.gif'


// export default function spinner() {
 const spinner = () => {
  //  render() {
  return (
    <div className='text-center'>
        <img className = "my-3 "src={loader} alt = "loading" width="500px"/>
    </div>
  )
// }
}

export default spinner
