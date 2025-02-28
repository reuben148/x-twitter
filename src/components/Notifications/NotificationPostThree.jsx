import React from 'react'
import { Link } from 'react-router-dom'

export default function NotificationPostThree() {
  return (
    <div>
       {/* NOTIFICATION CONTENT CONTAINER */}
       <Link to='/Notifications'>
            <div className='border-y-2 border-gray-800 flex p-4 hover:bg-gray-950 '>

                {/* Image or Icon of the Notification */}
                <div className='w-[10%]' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-pink-600" aria-hidden="true">
                    <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                    </svg>
                </div>

                {/* Content of the Notification */}
                <div className='w-[90%]'>
                    {/* Image or Images of the user notification */}
                    <div className='flex gap-2'>
                        <img src="/mano.jpg" className='w-8 h-8 rounded-full' />
                        
                    </div>

                    {/* Write-up of the notification */}
                    <div>
                        <p className='font-bold py-2.5 flex gap-2'>Mano.dev <p className='font-normal'>liked your reply</p> </p>
                        <p className='font-normal text-gray-500'>Playing tweetle is best on @StarknetFnd</p>
                    </div>

                </div>

            </div>
            </Link>
            {/* END FOR NOFICATION CONTENT CONTAINER */}
            
    </div>
  )
}
