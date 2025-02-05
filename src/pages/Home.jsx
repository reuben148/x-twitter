import { Route, Link } from "react-router-dom";
import ForYou from "../components/Home/ForYou";




export default function Home() {

  return (

    <div className=' border-gray-600 h-[100vh] flex overflow-auto  no-scrollbar '>

      {/* MIDDLE HOME FOR CONTENT */}
      <div className=' fd:w-[60%] w-full text-white border-x-1 border-gray-800  '>

        {/* TOP NAV BAR ON MIDDLE CONTENT */}
        
        <div className="flex font-medium  sm:mt-0 mt-[68px] border-b-1 border-gray-800 ">
          <Link to='/' className="p-4 px-7 hover:bg-gray-900 border-b-4 border-blue-500 w-fit font-bold"> For you </Link>
          <Link to='/' className="p-4 hover:bg-gray-900 text-gray-500 "> Following </Link>
          <Link to='/' className="p-4 hover:bg-gray-900 text-gray-500 "> Developer/Designers Learning </Link>
        </div>
    
        {/* END |FOR TOP NAV BAR ON MIDDLE CONTENT */}

        <div>
          <ForYou/>
        </div>

      </div>
      {/* END FOR MIDDLE HOME FOR CONTENT */}

      <div className='w-[40%] fd:block hidden'>

      </div>


    </div>


  )
}
