import React from 'react'
import { Link } from 'react-router-dom'

export default function TodaysNews() {
  return (
    <div className='border-b-2 border-gray-900 mb-2'>

      <h1 className='text-xl font-extrabold px-4 mt-3.5 mb-2'>Today's News</h1>

            {/* FIRST NEWS */}
        <Link>
            <div className='flex p-4 w-full hover:bg-gray-950'>

                <div className='w-[80%] space-y-2'>
                    <h1 className='font-bold '>Trump Unveils Crypto Strategic Reserve</h1>
                    <div className='flex items-center'>
                        <img src="/reuben.jpeg" className=' rounded-full w-7 h-7 border-black border-3'  />
                        <img src="/mano.jpg" className='rounded-full w-7 h-7 -ml-2 border-black border-3'  />
                        <p className='text-sm text-gray-500 ml-2'>7 hours ago · News · 12K posts</p>
                    </div>
                </div>

                <div className='w-[20%]'>
                    <img src="/zelen.jpeg" className='rounded-2xl' />
                </div>

            </div>
        </Link>


            {/* SECOND NEWS */}
            <Link>
            <div className='flex p-4 w-full hover:bg-gray-950'>

                <div className='w-[80%] space-y-2'>
                    <h1 className='font-bold '>South Carolina Wildfires: State of Emergency Declared</h1>
                    <div className='flex items-center'>
                        <img src="/fire.jpeg" className=' rounded-full w-7 h-7 border-black border-3'  />
                        <img src="/mclaren.jpeg" className='rounded-full w-7 h-7 -ml-2 border-black border-3'  />
                        <p className='text-sm text-gray-500 ml-2'>23 hours ago · News · 53K posts</p>
                    </div>
                </div>

                <div className='w-[20%]'>
                    <img src="/fire.jpeg" className='rounded-2xl' />
                </div>

            </div>
        </Link>


            {/* THIRD NEWS */}
            <Link>
            <div className='flex p-4 w-full hover:bg-gray-950'>

                <div className='w-[80%] space-y-2'>
                    <h1 className='font-bold '>Europe Unites for Ukraine Peace at London Summit</h1>
                    <div className='flex items-center'>
                        <img src="/shark.jpeg" className=' rounded-full w-7 h-7 border-black border-3'  />
                        <img src="/mano.jpeg" className='rounded-full w-7 h-7 -ml-2 border-black border-3'  />
                        <p className='text-sm text-gray-500 ml-2'>5 hours ago · News · 164K posts</p>
                    </div>
                </div>

                <div className='w-[20%]'>
                    <img src="/trump.jpg" className='rounded-2xl' />
                </div>

            </div>
        </Link>
      

    </div>
  )
}
