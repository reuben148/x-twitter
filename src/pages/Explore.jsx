import { Link } from "react-router-dom";
import Terms from "../components/Home/Terms";
import WhoToFollow from "../components/Home/WhoToFollow";
import Search from "./Search";
import SubToPremium from "../components/Home/SubToPremium";
import FirstContent from "../components/Explore/firstContent";
import TodaysNews from "../components/Explore/TodaysNews";

export default function Explore() {
  return (
    <div className='flex h-[100vh] w-full '>

    {/* MIDDLE FOR EXPLORE */}
    <div className=" w-full md:w-[60%] overflow-y-auto relative no-scrollbar border-r-2 border-gray-900"> 

        <nav className=" h-auto sticky top-0 z-10 bg-black border-b-2 border-gray-800 "> 

            <div className="flex justify-between w-full h-auto p-2 items-center">
              <Search/>

              <Link to='/Explore'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white" aria-hidden="true">
              <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
              </svg>
              </Link>

            </div>

            {/* NAVIGATIONS */}
            <div className="grid grid-cols-5 items-center ">

              <Link className="text-center p-2 text-white font-bold "> 
              <h1 className="border-b-4 border-blue-500 py-2 ">For you</h1>
              </Link>

              
              <Link className="text-center p-2 text-gray-500 font-medium"> 
              <h1>Trending</h1>
              </Link>

              
              <Link className="text-center p-2 text-gray-500 font-medium"> 
              <h1>News</h1>
              </Link>

              
              <Link className="text-center p-2 text-gray-500 font-medium"> 
              <h1>Sports</h1>
              </Link>

              
              <Link className="text-center p-2 text-gray-500 font-medium"> 
              <h1>Entertainment</h1>
              </Link>

            </div>

        </nav>

        {/* MIDLE CONTENT */}
        <div className=" ">
          <FirstContent/>
          <TodaysNews/>
        </div>

    </div>
    {/* END FOR MIDDLE FOR EXPLORE */}


    {/* RIGHT SIDE BAR */}
    <div className=" w-[40%] h-[100vh] md:block hidden sticky top-0 pl-8">

      <WhoToFollow/>
      <div className="-mt-11">
      <SubToPremium />
      </div>
      
      <Terms/>
    </div>
    {/* END FOR RIGHT SIDE BAR */} 

</div>

  )
}
