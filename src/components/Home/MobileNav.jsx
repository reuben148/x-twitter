import React from 'react'
import UserImage from "./assets/Akan_Leaner.jpg"


export default function MobileNav() {
    return (
        <div className='flex sm:hiddend w-full'>

            {/* LOGOUT SECTION */}
            <div className="cursor-pointer py-5 md:flex fixed bottom-0 items-center justify-end rounded-full mt-3 font-bold w-fit">

                <div className="flex ">
                    <img src={UserImage} className="w-11 h-11 rounded-full" />
                    <div className="ml-2 md:block hidden ">
                        <h5 className="text-white">Akan </h5>
                        <p className="text-gray-600 -mt-1 font-medium">@akanimoh__</p>
                    </div>
                </div>

                <div className="md:block hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" aria-hidden="true">
                        <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                    </svg>
                </div>

            </div>
            {/* END FOR LOGOUT SECTION */}

            {/* X HEADING ICON */}
            <Link to="/" className="sm:mt-2 mt-0 w-fit sm:p-2 hover:bg-gray-900 hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
            </Link>
            {/* END FOR X HEADING ICON */}

            <Link to="/Explore" className="w-fit block">
                <div className="flex items-center p-2 pr-3 text-[20px] hover:bg-blend-normal hover:rounded-full">
                    <span className="" >Upgrade</span>
                </div>
            </Link>

        </div>
    )
}
