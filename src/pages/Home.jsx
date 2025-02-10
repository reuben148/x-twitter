import { Route, Link } from "react-router-dom";
import ForYou from "../components/Home/ForYou";
import RightNav from "../components/Home/RightNav";


export default function Home() {

  return (

    <div className=' border-gray-600 h-[100vh] flex overflow-auto  no-scrollbar '>

      {/* MIDDLE HOME FOR CONTENT */}
      <div className=' fd:w-[60%] h-auto w-full text-white border-x-1 border-gray-800  '>

        {/* TOP NAV BAR ON MIDDLE CONTENT */}
        
        <div className="flex font-medium  sm:mt-0 mt-[68px] bg-black fixed top-0 z-0 w-full ">
          <Link to='/' className="p-4 px-7 hover:bg-gray-950 border-b-4 border-blue-500 w-fit font-bold"> For you </Link>
          <Link to='/' className="p-4 hover:bg-gray-950 text-gray-500 "> Following </Link>
          <Link to='/' className="p-4 hover:bg-gray-950 text-gray-500 "> Developer/Designers Learning </Link>
        </div>
    
        {/* END |FOR TOP NAV BAR ON MIDDLE CONTENT */}

        <div className="h-auto">
          <ForYou/>
        </div>

      </div>
      {/* END FOR MIDDLE HOME FOR CONTENT */} 

      <div className='w-[40%] fd:block hidden pl-8 '>

        {/* SEARCH SECTION */}
        <div className="top-0 fixed w-[26.5%] ">

          <div className=" relative mt-3  ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
              </svg>
            </div>
            <input type="text" id="input-group-1" className=" border-1 border-gray-800 text-white text-[16px] rounded-full focus:border-0 block w-[95%] ps-9 p-2  dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
          </div>

        </div>
        {/* END FOR SEARCH SECTION */}

        <RightNav/>
      </div>


    </div>


  )
}
