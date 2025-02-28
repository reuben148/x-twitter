import React from 'react'
import { Link } from 'react-router-dom'

export default function NotificationPostFour() {
  return (
    <div>
         {/* NOTIFICATION CONTENT CONTAINER */}
            <Link to='/Notifications'>
            <div className='border-y-2 border-gray-800 flex p-4 hover:bg-gray-950 '>

                {/* Image or Icon of the Notification */}
                <div className='w-[10%]' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-blue-500" aria-hidden="true">
                    <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                    </svg>
                </div>

                {/* Content of the Notification */}
                <div className='w-[90%]'>
                    {/* Image or Images of the user notification */}
                    <div className='flex gap-2'>
                        <img src="/passapp.png" className='w-8 h-8 rounded' />
                        
                    </div>

                    {/* Write-up of the notification */}
                    <div>
                        <p className='font-bold py-2.5 flex gap-2 items-center'>Pass App  
                            {/* VERIFIED ICON */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 -ml-1 items-center" aria-hidden="true">
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
              </svg>
              {/* END FOR VERIFIED ICON */}
                             <p className='font-normal'>followed you</p> </p>
                        {/* <p className='font-normal text-gray-500'>Playing tweetle is best on @StarknetFnd</p> */}
                    </div>

                </div>

            </div>
            </Link>
            {/* END FOR NOFICATION CONTENT CONTAINER */}
    </div>
  )
}
