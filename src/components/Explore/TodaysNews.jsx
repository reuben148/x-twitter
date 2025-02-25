import React from 'react'
import { Link } from 'react-router-dom'

export default function TodaysNews() {
  return (
    <div className='border-b-2 border-gray-900 mb-10'>

      <h1 className='text-xl font-extrabold px-4 mt-3.5 mb-2'>Today's News</h1>

            {/* FIRST NEWS */}
        <Link>
            <div className='flex p-4 w-full hover:bg-gray-950'>

                <div className='w-[80%] space-y-2'>
                    <h1 className='font-bold '>FBI Whistleblower Claims Espein Files Being Deleted</h1>
                    <div className='flex items-center'>
                        <img src="/fePresi.jpg" className=' rounded-full w-7 h-7 border-black border-3'  />
                        <img src="/mano.jpg" className='rounded-full w-7 h-7 -ml-2 border-black border-3'  />
                        <p className='text-sm text-gray-500 ml-2'>17 hours ago News 772k posts</p>
                    </div>
                </div>

                <div className='w-[20%]'>
                    <img src="/fePresi.jpg" className='rounded-2xl' />
                </div>

            </div>
        </Link>


            {/* SECOND NEWS */}
            <Link>
            <div className='flex p-4 w-full hover:bg-gray-950'>

                <div className='w-[80%] space-y-2'>
                    <h1 className='font-bold '>Revenge of the Sith 20th Anniversary Screening</h1>
                    <div className='flex items-center'>
                        <img src="/presi.jpg" className=' rounded-full w-7 h-7 border-black border-3'  />
                        <img src="/akan.jpg" className='rounded-full w-7 h-7 -ml-2 border-black border-3'  />
                        <p className='text-sm text-gray-500 ml-2'>2 hours ago Entertainment 25k posts</p>
                    </div>
                </div>

                <div className='w-[20%]'>
                    <img src="/presi.jpg" className='rounded-2xl' />
                </div>

            </div>
        </Link>


            {/* THIRD NEWS */}
            <Link>
            <div className='flex p-4 w-full hover:bg-gray-950'>

                <div className='w-[80%] space-y-2'>
                    <h1 className='font-bold '>Trump's Surprise Visit to Reopened White House</h1>
                    <div className='flex items-center'>
                        <img src="/trump.jpg" className=' rounded-full w-7 h-7 border-black border-3'  />
                        <img src="/mano.jpg" className='rounded-full w-7 h-7 -ml-2 border-black border-3'  />
                        <p className='text-sm text-gray-500 ml-2'>Trending now News 12k posts</p>
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
