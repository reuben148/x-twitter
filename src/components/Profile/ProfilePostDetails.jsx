import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePostOne from './ProfilePostOne'
import ProfilePostTwo from './ProfilePostTwo'
import ManoPost from './ManoPost'
import JamesPost from './JamesPost'

export default function ProfilePostDetails() {
  return (
    <div className='mt-3 '>

        {/* CONTAINER FOR NAVS */}
        <div className='grid sm:grid-cols-6 grid-cols-4 border-b-2 border-gray-800 items-center'>

            <Link to='/Profile'>
                <div>
                    <h1 className=' p-3 text-center font-medium text-white border-b-4 border-blue-500 hover:bg-gray-950' >Posts</h1>
                </div>
            </Link>

            
            <Link to='/Profile'>
                <div>
                    <h1 className=' p-3 text-center font-medium text-gray-500 hover:bg-gray-950'>Replies</h1>
                </div>
            </Link>

            
            <Link to='/Profile'>
                <div>
                    <h1 className=' p-3 text-center font-medium text-gray-500 hover:bg-gray-950'>Highlights</h1>
                </div>
            </Link>

            
            <Link to='/Profile'>
                <div>
                    <h1 className=' p-3 text-center font-medium text-gray-500 hover:bg-gray-950'>Articles</h1>
                </div>
            </Link>

            
            <Link to='/Profile' className='sm:block hidden'>
                <div>
                    <h1 className=' p-3 text-center font-medium text-gray-500 hover:bg-gray-950'>Media</h1>
                </div>
            </Link>

            
            <Link to='/Profile' className='sm:block hidden hover:bg-gray-950'>
                <div>
                    <h1 className=' p-3 text-center font-medium text-gray-500 hover:bg-gray-950'>Likes</h1>
                </div>
            </Link>

        </div>
        {/* END FOR CONTAINERS FOR NAVS */}


        {/* CONTENT */}
        <div>
            <ProfilePostOne/>
            {/* <ManoPost/> */}
            <ProfilePostTwo/>
            <ManoPost/>
            <div className='mb-16'>
                <JamesPost/>
            </div>
            
        </div>
        {/* END FOR CONTENT */}
      
    </div>
  )
}
