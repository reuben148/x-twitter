import { Link } from "react-router-dom"
import Search from "./Search"
import Terms from "../components/Home/Terms"
import WhoToFollow from "../components/Home/WhoToFollow"
import ExploreWhatsHappening from "../components/Explore/ExploreWhatsHappening"
import WhatsHappening from "../components/Home/WhatsHappening"
import ProfileDetails from "../components/Profile/ProfileDetails"
import ProfilePostDetails from "../components/Profile/ProfilePostDetails"


export default function Profile() {
  return (
    <div className='flex h-[100vh] w-full '>

      {/* MIDDLE FOR EXPLORE */}
      <div className=" w-full md:w-[60%] overflow-y-auto relative no-scrollbar border-r-2 border-gray-900">

        <nav className=" h-auto sticky top-0 z-10 bg-black border-b-2 border-gray-900 ">

          <div className="flex w-full h-auto p-2 items-center gap-6">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true">
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </svg>

            <div>

              <h1 className="font-bold text-[18px] flex items-center gap-2 ">
                Akan 
                <img alt="🇳🇬"  draggable="false" src="https://abs-0.twimg.com/emoji/v2/svg/1f1f3-1f1ec.svg" title="Flag of Nigeria" className='w-5 h-5 '  />
              </h1>

              <p className="text-gray-500">1,903 posts</p>

            </div>

          </div>

        </nav>

        {/* PROFILE CONTENT  */}
        <div className=" ">

          {/* COVER PHOTOT */}
          <img src="/akanCover.jpg" className="w-full h-[190px] -mt-28 sm:-mt-11 cursor-pointer" />

          <div className="px-3 -mt-16">

            {/* PROFILE PICTURE */}
            <div className="flex justify-between items-center ">

              {/* Profile Image */}
              <img src="/akan.jpg" className="sm:w-[130px] w-[120px] sm:h-[130px] h-[120px]  rounded-full cursor-pointer border-4 border-black " />

              {/* Grok and Edit Button profile */}
              <div className="flex items-center gap-3 mt-14 ">

                {/* Grok Icon */}
                <Link to='/Grok'>
                <div className="border-2 border-gray-800 p-2 w-fit h-fit rounded-full cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true">
                    <path d="M2.205 7.423L11.745 21h4.241L6.446 7.423H2.204zm4.237 7.541L2.2 21h4.243l2.12-3.017-2.121-3.02zM16.957 0L9.624 10.435l2.122 3.02L21.2 0h-4.243zm.767 6.456V21H21.2V1.51l-3.476 4.946z"></path>
                  </svg>
                </div>
                </Link>

                {/* Edit Profile Button */}
                <button className="font-medium cursor-pointer text-[16px] border-2 border-gray-800 rounded-4xl px-3.5 py-1">Edit profile</button>

              </div>
              {/* End for Grok and Edit Profile */}

            </div>
            {/* END FOR PROFILE PICTURE */}

            {/* PROFILE CONTENT SECTION */}
            <div>
              <ProfileDetails/>
              
            </div>
            {/* END FOR PROFILE CONTENT SECTION */}

          </div>

      
        </div>

        <ProfilePostDetails/>

      </div>
      {/* END FOR MIDDLE FOR EXPLORE */}


      {/* RIGHT SIDE BAR */}
      <div className="md:block hidden pl-6  w-full md:w-[40%] overflow-y-auto relative no-scrollbar ">

        <nav className=" h-auto sticky top-0 z-10 bg-black ">

          <div className=" w-full h-auto pt-3 items-center">
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
