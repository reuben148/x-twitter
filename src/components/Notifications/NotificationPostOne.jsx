import React from 'react'
import { Link } from 'react-router-dom'

export default function NotificationPostOne() {
    return (
        <div>
            
            {/* NOTIFICATION CONTENT CONTAINER */}
            <Link to='/Notifications'>
            <div className='border-y-2 border-gray-800 flex p-4 hover:bg-gray-950 '>

                {/* Image or Icon of the Notification */}
                <div className='w-[10%]' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-blue-500" aria-hidden="true">
                        <path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path>
                    </svg>
                </div>

                {/* Content of the Notification */}
                <div className='w-[90%]'>
                    {/* Image or Images of the user notification */}
                    <div className='flex gap-2'>
                        <img src="/mano.jpg" className='w-8 h-8 rounded-full' />
                        <img src="/tweetle.png" className='w-8 h-8 rounded-full' />
                        <img src="/james.jpg" className='w-8 h-8 rounded-full' />
                        <img src="/web3bridge.jpg" className='w-8 h-8 rounded-full' />
                        <img src="/custos.jpg" className='w-8 h-8 rounded-full' />
                    </div>

                    {/* Write-up of the notification */}
                    <div>
                        <p className='font-bold pt-2.5'>New post notifications for Mano.dev and 4 others</p>
                    </div>

                </div>

            </div>
            </Link>
            {/* END FOR NOFICATION CONTENT CONTAINER */}

        </div>
    )
}
