import React from 'react'
import { Link } from 'react-router-dom'
import UserReactions from '../Home/UserReactions'

export default function ManoPost() {
  return (
    <div>
           <div className='flex items-center px-4 text-gray-500 my-1.5 pl-7 font-bold '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 items-center" aria-hidden="true">
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                </svg>
                <p className='pl-2'>You reposted</p>
            </div>

            <div className='flex px-4 gap-2 border-b-1 border-gray-900  '>

                {/* IMAGE OF THE USER */}
                <div className="sm:w-[10%] w-[15%] items-end">
                    <Link to='/Profile'>
                        <img src='/mano.jpg' className='sm:w-11 w-9 sm:h-11 h-9 rounded-full' />
                    </Link>

                </div>
                {/* END FOR THE USER IMAGE */}


                {/* USER POST CONTAINER */}
                <div className="sm:w-[90%] w-[85%]">

                    {/* USER DETAILS */}
                    <div className="justify-between items-center flex sm:text-lg text-sm">

                        <div className="flex gap-1 items-center">
                            <Link to='/Profile'><h1 className="font-bold text-lg">Mano.dev </h1></Link>

                            <p className="font-light text-gray-400 text-lg">@manoahluka</p>
                            <p className="text-gray-400 -mt-2 font-bold">.</p>
                            <p className="font-light text-gray-400">Feb 21</p>
                        </div>

                        {/* DOTTED ICON */}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 hover:bg-gray-700 hover:text-blue-500 hover:rounded-full " aria-hidden="true">
                                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                            </svg>
                        </div>
                        {/* END FOR DOTTED ICON */}

                    </div>
                    {/* END FOR USER DETAILS */}


                    {/* POST WRITE-UP */}
                    <div className="w-full space-y-2 text-[17px] font-semibold mt-0.5 ">
                    <p className='text-gray-500 '>Replying to <Link to='/Profile' className='text-blue-500'>@teke57</Link></p>
                        <p className=' '>When everywhere is silent.  That’s when to right code not cry 😭.</p>

                    </div>

                    {/* <img src="/custos.jpg" className="rounded-2xl mt-3" /> */}
                    {/* END FOR POST WRITE-UP */}


                    {/* COMMENT  AND REACTION SECTION */}
                    <div>
                        <div>
                            <UserReactions />
                        </div>

                    </div>
                    {/* END FOR COMMENT AND REACTION SECTION */}

                </div>
                {/* END FOR USER POST CONTAINER */}

            </div>
    </div>
  )
}
