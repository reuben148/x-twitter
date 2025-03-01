import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../../pages/Search'
import ManoBodyMessage from './ManoBodyMessage'
import ImageUploadPostIcon from '../Home/ImageUploadPostIcon'

export default function UserMessageOne() {
  return (
    <div className="h-[100vh] flex flex-col">

      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-black p-4 z-10 flex items-center justify-between">

        <div className='flex items-center gap-2.5'>
          <img src="/mano.jpg" className='w-9 h-9 rounded-full' />
          <h1 className='font-bold text-lg'>Mano.dev 🐺 </h1>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
            <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
          </svg>
        </div>

      </nav>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto no-scrollbar ">
        <ManoBodyMessage />
      </div>

      {/* Sticky Bottom Bar */}
      <div className="sticky bottom-0 bg-black p-2 z-10 border-t-2 border-gray-800">

        <div className='flex gap-4 items-center bg-gray-800 p-3 rounded-xl'>

          <ImageUploadPostIcon />

          {/* GIF ICON */}
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
              <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
            </svg>
          </div>

          {/* EMOJI ICON */}
          <div className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
              <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
            </svg>
          </div>

          {/* INPUT TEXT FIELD */}
          <input type="text" placeholder='Start a new message' className='w-full placeholder:font-medium placeholder:focus:border-0 ' />

          {/* SEND BUTTON  ICON */}
          <div className='cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 " aria-hidden="true">
              <path d="M2.504 21.866l.526-2.108C3.04 19.719 4 15.823 4 12s-.96-7.719-.97-7.757l-.527-2.109L22.236 12 2.504 21.866zM5.981 13c-.072 1.962-.34 3.833-.583 5.183L17.764 12 5.398 5.818c.242 1.349.51 3.221.583 5.183H10v2H5.981z"></path>
            </svg>
          </div>
          {/* END FOR SEND BUTTON FIELD */}


        </div>

      </div>
      {/* End for Sticky Botton Br */}

    </div>
  )
}
