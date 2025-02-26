import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileDetails() {
    return (
        <div>
            <div className='mt-2.5'>

                <h1 className="font-bold  flex items-center gap-1 ">
                    <p className='text-[22px]'>Akan</p>
                    <img alt="🇳🇬" draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f1f3-1f1ec.svg" title="Flag of Nigeria" className='w-6 h-6 ' />

                    {/* Get Verified */}
                    <Link to='/Premium'>
                        <div className='flex border-2 border-gray-800 hover:bg-gray-950 items-center px-3 rounded-4xl ml-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-500" aria-hidden="true">
                                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                            </svg>

                            <p className='text-[16px] pl-0.5 '>Get verified</p>
                        </div>
                    </Link>

                </h1>

                <p className="text-gray-500">@akanimoh__</p>

            </div>

            {/* WRITE-UP FOR PROFILE */}
            <div className='mt-2.5'>
                <p className=''>Web3 Enthusiast || Frontend Dev || Exploring Blockchain's 💯⛏️🚀 (Contact: <a href='https://linktr.ee/Akanimoh12' target="_blank" className='font-medium text-blue-500' >linktr.ee/Akanimoh12</a>)</p>
            </div>
            {/* END FOR WRITE-UP FOR PROFILE */}

            {/* PROFILE DATE DETAILS */}
            <div className='flex gap-4 mt-2 font-medium'>

                <div className='flex items-center gap-1.5 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500" aria-hidden="true">
                        <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
                    </svg>
                    <p><a href='https://linktr.ee/Akanimoh12' target="_blank" className='text-blue-500' >linktr.ee/Akanimoh12</a></p>
                </div>

                <div className='flex items-center gap-1.5 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500" aria-hidden="true">
                        <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                    </svg>
                    <p className='text-gray-500'>Joined July 2023</p>
                </div>

            </div>
            {/* END FOR PROFILE DATE DETAILS */}

            {/* FOLLOWERS SECTIONS */}
            <div className='flex gap-4 font-medium mt-3'>

                <Link to='/Profile'>
                    <h1>931 <span className='text-gray-500'>Following</span></h1>
                </Link>

                <Link to='/Profile'>
                    <h1 >157 <span className='text-gray-500'>Followers</span></h1>
                </Link>

            </div>

        </div>
    )
}
