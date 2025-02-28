import React from 'react'
import { Link } from 'react-router-dom'

export default function NotificationsContent() {
    return (
        <div>
            <div className=''>

                {/* CONTAINER FOR NAVS */}
                <div className='grid grid-cols-3 border-b-2 border-gray-800 items-center '>

                    <Link to='/Notifications'>
                        <div>
                            <h1 className=' p-3 text-center font-medium text-white border-b-4 border-blue-500 hover:bg-gray-950' >All</h1>
                        </div>
                    </Link>


                    <Link to='/Notifications'>
                        <div>
                            <h1 className=' p-3 text-center font-medium text-gray-500 hover:bg-gray-950'>Verified</h1>
                        </div>
                    </Link>

                    <Link to='/Notifications'>
                        <div>
                            <h1 className=' p-3 text-center font-medium text-gray-500 hover:bg-gray-950'>Mentions</h1>
                        </div>
                    </Link>


                </div>
                {/* END FOR CONTAINERS FOR NAVS */}


                {/* CONTENT */}
                <div className=''>


                </div>
                {/* END FOR CONTENT */}

            </div>

        </div>
    )
}
