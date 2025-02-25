import { Link } from "react-router-dom"
import Search from "./Search"
import Terms from "../components/Home/Terms"
import WhoToFollow from "../components/Home/WhoToFollow"
import ExploreWhatsHappening from "../components/Explore/ExploreWhatsHappening"
import WhatsHappening from "../components/Home/WhatsHappening"


export default function Profile() {
  return (
    <div className='flex h-[100vh] w-full '>

    {/* MIDDLE FOR EXPLORE */}
    <div className=" w-full md:w-[60%] overflow-y-auto relative no-scrollbar border-r-2 border-gray-900"> 

        <nav className=" h-auto sticky top-0 z-10 "> 

            <div className=" w-full h-auto p-2 items-center">
              
            </div>
    
        </nav>

        {/* CONTENT */}
        <div className=" pt-16">
          
            
        </div>

    </div>
    {/* END FOR MIDDLE FOR EXPLORE */}


    {/* RIGHT SIDE BAR */}
    <div className=" pl-6  w-full md:w-[40%] overflow-y-auto relative no-scrollbar "> 

        <nav className=" h-auto sticky top-0 z-10 bg-black "> 

            <div className=" w-full h-auto pt-3 items-center">
              <Search/>
            </div>

        </nav>
        
        {/* CONTENT FOR RIGHT SIDE BAR */}
        <div className=" pt-16 w-fit">

          <div className="-mt-16">
          <WhoToFollow/>
          </div>

          <WhatsHappening/>
          <Terms/>

        </div>

    </div>
    {/* END FOR RIGHT SIDE BAR */} 

</div>

  )
}
