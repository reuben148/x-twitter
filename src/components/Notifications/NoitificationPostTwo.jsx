import React from 'react'
import { Link } from 'react-router-dom'

export default function NoitificationPostTwo() {
  return (
    <div>
      
            {/* NOTIFICATION CONTENT CONTAINER */}
            <Link to='/Notifications'>
            <div className='border-y-2 border-gray-800 flex p-4 hover:bg-gray-950 '>

                {/* Image or Icon of the Notification */}
                <div className='w-[10%]' >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-blue-500" aria-hidden="true">
                    <path d="M12 22.25c-4.99 0-9.18-3.393-10.39-7.994l1.93-.512c.99 3.746 4.4 6.506 8.46 6.506s7.47-2.76 8.46-6.506l1.93.512c-1.21 4.601-5.4 7.994-10.39 7.994zm0-20.5c-3.87 0-7 3.134-7 7v2.75c0 3.866 3.13 7 7 7s7-3.134 7-7V8.75c0-3.866-3.13-7-7-7zm-2.25 9.5c0 .414-.34.75-.75.75s-.75-.336-.75-.75V9c0-.414.34-.75.75-.75s.75.336.75.75v2.25zm3 1c0 .414-.34.75-.75.75s-.75-.336-.75-.75V8c0-.414.34-.75.75-.75s.75.336.75.75v4.25zm3-1c0 .414-.34.75-.75.75s-.75-.336-.75-.75V9c0-.414.34-.75.75-.75s.75.336.75.75v2.25z"></path>
                    </svg>
                </div>

                {/* Content of the Notification */}
                <div className='w-[90%]'>
                    {/* Image or Images of the user notification */}
                    <div className='flex gap-2'>
                        <img src="/custos.jpg" className='w-8 h-8 rounded-full' />
                        
                    </div>

                    {/* Write-up of the notification */}
                    <div>
                        <p className='font-bold pt-2.5'>Custos is speaking in OM morning club Talk with Jordan vs Content Creators $MUG $BTC $SOL</p>
                    </div>

                </div>

            </div>
            </Link>
            {/* END FOR NOFICATION CONTENT CONTAINER */}

    </div>
  )
}
