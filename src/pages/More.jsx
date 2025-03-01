import React from 'react'
import { Link } from 'react-router-dom'

export default function More() {
  return (
    <div>
      <div className='flex  h-[100vh]'>

<div className='justify-center content-center w-[70%] m-auto justify-items-center'>
  <h1 className='font-bold text-2xl text-gray-400 text-center'>...Sorry still on building...</h1>
  <p className='bg-blue-500 w-fit rounded-2xl px-4 my-2 text-white font-medium'>Access Available once:</p>
  
  <div className='gap-2 justify-items-center text-center text-gray-400'>
  <Link to='/' className='font-medium'>
  <div>Home</div>
  </Link>

  <Link to='/Explore' className='font-medium'>
  <div>Explore</div>
  </Link>

  <Link to='/Notifications' className='font-medium'>
  <div>Notifications</div>
  </Link>

  <Link to='/Messages' className='font-medium'>
  <div>Messages</div>
  </Link>

  <Link to='/Profile' className='font-medium'>
  <div>Profile</div>
  </Link>
  </div>

</div>

</div>
    </div>
  )
}
