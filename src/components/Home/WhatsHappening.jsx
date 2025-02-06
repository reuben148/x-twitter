import { Link } from "react-router-dom"

export default function WhatsHappening() {
    return (
        <div className="w-[95%] border-1 border-gray-800 rounded-2xl mt-4  ">

            <h5 className="font-extrabold text-2xl p-5">What's happening</h5>

            {/* CONTENT */}
            <div className="p-3 px-5 hover:bg-gray-950">

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-gray-500 text-sm">Trending in Nigeria</h1>
                    </div>

                    {/* DOTTED ICON */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 hover:bg-gray-700 hover:text-blue-500 hover:rounded-full " aria-hidden="true">
                            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                        </svg>
                    </div>
                    {/* END FOR DOTTED ICON */}

                </div>

                <h1 className="font-bold">#Manoah</h1>

            </div>
            {/* END FOR CONTENT */}


            {/* CONTENT Two */}
            <div className="p-3 px-5 hover:bg-gray-950">

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-gray-500 text-sm">Music Trends</h1>
                    </div>

                    {/* DOTTED ICON */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 hover:bg-gray-700 hover:text-blue-500 hover:rounded-full " aria-hidden="true">
                            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                        </svg>
                    </div>
                    {/* END FOR DOTTED ICON */}

                </div>

                <h1 className="font-bold">#Tweeqle</h1>
                <h1 className="text-gray-500 text-sm">135k posts</h1>

            </div>
            {/* END FOR CONTENT Two */}


            {/* CONTENT Three */}
            <div className="p-3 px-5 hover:bg-gray-950">

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-gray-500 text-sm">Business & Finance Trending</h1>
                    </div>

                    {/* DOTTED ICON */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 hover:bg-gray-700 hover:text-blue-500 hover:rounded-full " aria-hidden="true">
                            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                        </svg>
                    </div>
                    {/* END FOR DOTTED ICON */}

                </div>

                <h1 className="font-bold">Starknet</h1>
                <h1 className="text-gray-500 text-sm">1.4M posts</h1>

            </div>
            {/* END FOR CONTENT Three */}

            
            {/* SHOW MORE CONTENT */}
            <Link to='/'>
            <div className="p-3 px-5 hover:bg-gray-950 hover:rounded-bl-2xl hover:rounded-br-2xl">
                <h1 className=" text-blue-500">Show More </h1>
            </div>
            </Link>
            {/* END FOR SHOW MORE CONTENT */}




        </div>
    )
}
