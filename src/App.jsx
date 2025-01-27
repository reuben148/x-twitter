import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Grok from "./pages/Grok";
import Communities from "./pages/Communities";
import Premium from "./pages/Premium";
import Business from "./pages/Business";
import Profile from "./pages/Profile";
import More from "./pages/More";


export default function App() {
  return (
    <BrowserRouter >
      <div className="bg-black">

        {/* WRAPING CONTAINER THAT HOLDS THE LEFT NAV BAR AND  */}
        <div className="bg-black flex sm:w-[85%] m-auto  ">

         {/* LEFT NAV BAR */}
         <div className="w-full sm:w-[10%] md:w-[20%] bg-black text-white h-auto sm:h-[100vh] 
                          fixed bottom-0 sm:static 
                          flex sm:flex-col justify-around sm:justify-start 
                          border-t border-gray-800 sm:border-none"
          >
            <Link to="/" className="sm:mt-2 sm:block hidden mt-0 w-fit sm:p-2 hover:bg-gray-500 hover:rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </Link>

            {/* HOME ICON */}
            <Link to="/" className=" sm:mt-2 w-fit block">
              <div className="flex items-center p-2 gap-3 pr-3 text-[20px] hover:bg-blend-normal hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path>
                </svg>
                <span className="md:block hidden" >Home</span>
              </div>
            </Link>
            {/* END FOR HOME ICON */}

           {/* EXPLORE ICON */}
           <Link to="/Explore" className="w-fit block">
              <div className="flex items-center p-2 gap-3 pr-3 text-[20px] hover:bg-blend-normal hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </svg>
                <span className="md:block hidden" >Explore</span>
              </div>
            </Link>
            {/* EXPLORE FOR HOME ICON */}

            {/* NOTIFICATION ICON */}
           <Link to="/Notifications" className="w-fit block">
              <div className="flex items-center p-2 gap-3 pr-3 text-[20px] hover:bg-blend-normal hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                </svg>
                <span className="md:block hidden" >Notifications</span>
              </div>
            </Link>
            {/* NOTIFICATION FOR HOME ICON */}


          </div>
          {/* END FOR LEFT NAV BAR */}

          {/* CONTENT DISPLAY */}
          <div className="w-full md:w-[80%] bg-black h-screen flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/Explore' element={<Explore />} />
              <Route path='/Notifications' element={<Notifications />} />
              {/* <Route path='/Messages' element={<Messages />} /> */}
              {/* <Route path='/Grok' element={<Grok />} /> */}
              {/* <Route path='/Communities' element={<Communities />} /> */}
              {/* <Route path='/Premium' element={<Premium />} /> */}
              {/* <Route path='/Business' element={<Business />} /> */}
              {/* <Route path='/Profile' element={<Profile />} /> */}
              {/* <Route path='/More' element={<More />} /> */}
            </Routes>
          </div>
          {/* END FOR CONTENT DISPLAY ROUTES  */}

        </div>
        {/* WRAPING CONTAINER THAT HOLDS THE LEFT NAV BAR AND  */}


      </div>
    </BrowserRouter>
  )
}
