import { Link } from "react-router-dom"
import UserReactions from "./UserReactions"
import UsersPost2 from "./UsersPost2"
import VideoTesting from "./VideoTesting"
import VideoPostTwo from "./VideoPostTwo"


export default function UsersPost() {
  return (
    <div>

      <div className='flex p-3 py-4 gap-2 border-b-1 border-gray-900  '>

        {/* IMAGE OF THE USER */}
        <div className="w-[10%] items-end">
          
            <img src='/reuben.jpeg' className='w-11 h-11 rounded-full' />
          

        </div>
        {/* END FOR THE USER IMAGE */}


        {/* USER POST CONTAINER */}
        <div className="w-[90%]">

          {/* USER DETAILS */}
          <div className="justify-between items-center flex">

            <div className="flex gap-1 items-center">
              <Link to='/Profile'><h1 className="font-extrabold text-lg">FC Barcelona</h1></Link>

              {/* VERIFIED ICON */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-500 mt-1 items-center" aria-hidden="true">
                                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                            </svg>
              {/* END FOR VERIFIED ICON */}

              <p className="font-light text-gray-400 text-lg">@FCBarcelona</p>
              <p className="text-gray-400 -mt-2 font-bold">.</p>
              <p className="font-light text-gray-400">4h</p>
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
          <div className="w-full space-y-4 text-[15px] font-semibold ">
            <p >
            🔥🔥 FULL TIME!!!! 🔥🔥
               
              {/* <a href="https://web3bridgeafrica.com/register" className="text-blue-500">web3bridgeafrica.com/register</a> */}
            </p>

            <p className="text-blue-500"> #BarçaRealSociedad </p>

          </div>

          <img src="/barca.jpeg" className="rounded-2xl mt-3" />
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
      {/* END FOR FIRST POST */}
      

      {/* SECOND USERS POST */}
      <div>
        <UsersPost2 />
      </div>

      {/* Forth Users Post */}
      <div>
      <VideoPostTwo/>
      </div>

    </div>
  )
}
