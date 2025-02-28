import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import WhoToFollow from '../components/Home/WhoToFollow'
import WhatsHappening from '../components/Home/WhatsHappening'
import Terms from '../components/Home/Terms'
import NotificationsContent from '../components/Notifications/NotificationsContent'
import NotificationPostOne from '../components/Notifications/NotificationPostOne'
import NoitificationPostTwo from '../components/Notifications/NoitificationPostTwo'
import NotificationPostThree from '../components/Notifications/NotificationPostThree'
import NotificationPostFour from '../components/Notifications/NotificationPostFour'
import NotificationPostFive from '../components/Notifications/NotificationPostFive'

export default function Notifications() {
  return (
    <div className='flex h-[100vh] w-full '>

      {/* MIDDLE FOR EXPLORE */}
      <div className=" w-full md:w-[60%] overflow-y-auto relative no-scrollbar border-r-2 border-gray-800">

        <nav className=" h-auto sticky top-0 z-10  bg-black ">

        <div className="flex justify-between w-full h-auto p-4 items-center">
              <h1 className='font-bold text-xl'>Notifications</h1>

              <Link to='/Notifications'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
              <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
              </svg>
              </Link>

            </div>

            <NotificationsContent/>
            

        </nav>

        {/* CONTENT */}
        <div className=" ">
           <NotificationPostOne/>
           <NoitificationPostTwo/>
           <NotificationPostThree/>
           <NotificationPostFour/>
           <NotificationPostFive/>
           <NoitificationPostTwo/>
           <NotificationPostThree/>
           <NotificationPostFour/>
           <NotificationPostFive/>
        </div>

      </div>
      {/* END FOR MIDDLE FOR EXPLORE */}


      {/* RIGHT SIDE BAR */}
      <div className=" w-full md:w-[40%] md:block hidden overflow-y-auto relative no-scrollbar pl-6">

        <nav className=" h-auto sticky top-0 z-10 bg-black ">

          <div className=" w-full h-auto items-center py-3">
            <Search />
          </div>

        </nav>

        {/* CONTENT FOR RIGHT SIDE BAR */}
        <div className=" pt-16 w-fit">

          <div className="-mt-16">
            <WhoToFollow />
          </div>

          <WhatsHappening />
          <Terms />

        </div>

      </div>
      {/* END FOR RIGHT SIDE BAR */}

    </div>
  )
}
