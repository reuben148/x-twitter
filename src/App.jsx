import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Grok from "./pages/Grok";
import Communities from "./pages/Communities";
import Premium from "./pages/Premium";
import Business from "./pages/Business";
import Profile from "./pages/Profile";
import More from "./pages/More";
import UserImage from "./assets/akan.jpg";
import UserMessageOne from "./components/Messages/UserMessageOne";
import UserMessageTwo from "./components/Messages/UserMessageTwo";
import UserMessageThree from "./components/Messages/UserMessageThree";


export default function App() {
  return (
    <BrowserRouter >
      <div className="bg-black h-[100vh]  ">

        

        {/* WRAPING CONTAINER THAT HOLDS THE LEFT NAV BAR AND CONTENT DISPLAY */}
        <div className="bg-black flex md:w-[90%] sm:w-[95%] m-auto  ">

          {/* LEFT NAV BAR */}
          <div className="w-full p-2 sm:w-[10%] md:w-[20%] bg-black text-white h-auto sm:h-[100vh] 
                          fixed bottom-0 sm:static
                          flex sm:flex-col justify-around sm:justify-start 
                          border-t border-gray-800 sm:border-none sm:gap-1 z-10"
          >

            {/* X HEADING ICON */}
            <Link to="/" className="sm:mt-2 sm:block hidden mt-0 w-fit sm:p-2 hover:bg-gray-900 hover:rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </Link>
            {/* END FOR X HEADING ICON */}

            {/* HOME ICON */}
            <Link to="/" className=" sm:mt-2 w-fit block">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path>
                </svg>
                <span className="md:block hidden" >Home</span>
              </div>
            </Link>
            {/* END FOR HOME ICON */}

            {/* EXPLORE ICON */}
            <Link to="/Explore" className="w-fit block">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950 hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </svg>
                <span className="md:block hidden" >Explore</span>
              </div>
            </Link>
            {/* EXPLORE FOR HOME ICON */}

            {/* GROK ICON ON MOBILE DEVICE*/}
            <Link to="/Grok" className="w-fit block sm:hidden">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M2.205 7.423L11.745 21h4.241L6.446 7.423H2.204zm4.237 7.541L2.2 21h4.243l2.12-3.017-2.121-3.02zM16.957 0L9.624 10.435l2.122 3.02L21.2 0h-4.243zm.767 6.456V21H21.2V1.51l-3.476 4.946z"></path>
                </svg>
                <span className="md:block hidden" >Grok</span>
              </div>
            </Link>
            {/* END FOR GROK ICON ON MOBILE DEVICE */}

            {/* NOTIFICATION ICON */}
            <Link to="/Notifications" className="w-fit block">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
                </svg>
                <span className="md:block hidden" >Notifications</span>
              </div>
            </Link>
            {/* END FOR NOTIFICATION ICON */}

            {/* MESSAGES ICON */}
            <Link to="/Messages" className="w-fit block">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                </svg>
                <span className="md:block hidden" >Messages</span>
              </div>
            </Link>
            {/* END FOR MESSAGES ICON */}

            {/* GROK ICON ON LARGE SCREEN */}
            <Link to="/Grok" className="w-fit sm:block hidden">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M2.205 7.423L11.745 21h4.241L6.446 7.423H2.204zm4.237 7.541L2.2 21h4.243l2.12-3.017-2.121-3.02zM16.957 0L9.624 10.435l2.122 3.02L21.2 0h-4.243zm.767 6.456V21H21.2V1.51l-3.476 4.946z"></path>
                </svg>
                <span className="md:block hidden" >Grok</span>
              </div>
            </Link>
            {/* END FOR GROK ICON ON LARGE SCREEN */}

            {/* COMMUNITY ICON */}
            <Link to="/Communities" className="w-fit block">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
                </svg>
                <span className="md:block hidden" >Communities</span>
              </div>
            </Link>
            {/* END FOR COMMUNITY ICON */}

            {/* PREMIUM ICON */}
            <Link to="/Premium" className="w-fit sm:block hidden">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M8.52 3.59c.8-1.1 2.04-1.84 3.48-1.84s2.68.74 3.49 1.84c1.34-.21 2.74.14 3.76 1.16s1.37 2.42 1.16 3.77c1.1.8 1.84 2.04 1.84 3.48s-.74 2.68-1.84 3.48c.21 1.34-.14 2.75-1.16 3.77s-2.42 1.37-3.76 1.16c-.8 1.1-2.05 1.84-3.49 1.84s-2.68-.74-3.48-1.84c-1.34.21-2.75-.14-3.77-1.16-1.01-1.02-1.37-2.42-1.16-3.77-1.09-.8-1.84-2.04-1.84-3.48s.75-2.68 1.84-3.48c-.21-1.35.14-2.75 1.16-3.77s2.43-1.37 3.77-1.16zm3.48.16c-.85 0-1.66.53-2.12 1.43l-.38.77-.82-.27c-.96-.32-1.91-.12-2.51.49-.6.6-.8 1.54-.49 2.51l.27.81-.77.39c-.9.46-1.43 1.27-1.43 2.12s.53 1.66 1.43 2.12l.77.39-.27.81c-.31.97-.11 1.91.49 2.51.6.61 1.55.81 2.51.49l.82-.27.38.77c.46.9 1.27 1.43 2.12 1.43s1.66-.53 2.12-1.43l.39-.77.82.27c.96.32 1.9.12 2.51-.49.6-.6.8-1.55.48-2.51l-.26-.81.76-.39c.91-.46 1.43-1.27 1.43-2.12s-.52-1.66-1.43-2.12l-.77-.39.27-.81c.32-.97.12-1.91-.48-2.51-.61-.61-1.55-.81-2.51-.49l-.82.27-.39-.77c-.46-.9-1.27-1.43-2.12-1.43zm4.74 5.68l-6.2 6.77-3.74-3.74 1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36z"></path>
                </svg>
                <span className="md:block hidden" >Premium</span>
              </div>
            </Link>
            {/* END FOR PREMIUM ICON */}

            {/* BUSINESS ICON */}
            <Link to="/Business" className="w-fit sm:block hidden">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"></path>
                </svg>
                <span className="md:block hidden" >Business</span>
                <span className="md:block hidden px-2 bg-blue-600 rounded text-[12px] font-bold">30% off</span>
              </div>
            </Link>
            {/* END FOR BUSINESS ICON */}

            {/* PROFILE ICON */}
            <Link to="/Profile" className="w-fit sm:block hidden">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                </svg>
                <span className="md:block hidden" >Profile</span>
              </div>
            </Link>
            {/* END FOR PROFILE ICON */}

            {/* MORE ICON */}
            <Link to="/More" className="w-fit sm:block hidden">
              <div className="flex items-center p-2 gap-3 pr-4 text-[20px] hover:bg-gray-950  hover:rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
                  <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
                </svg>
                <span className="md:block hidden" >More</span>
              </div>
            </Link>
            {/* END FOR MORE ICON */}

            {/* POST BUTTON */}
            <div className="sm:block hidden justify-items-center text-center cursor-pointer sm:bg-white bg-blue-400 sm:text-black text-white  rounded-full md:py-3 py-1 mt-3 font-bold w-9 md:w-[92%]"><p className="hidden md:block">Post</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  md:hidden block text-center" aria-hidden="true">
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </svg>
            </div>
            {/* END FOR POST BUTTON */}

            {/* LOGOUT SECTION */}
            <div className="sm:block hidden cursor-pointer py-5 md:flex fixed bottom-0 items-center justify-end rounded-full mt-3 font-bold w-fit">

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


          </div>
          {/* END FOR LEFT NAV BAR */}

          {/* CONTENT DISPLAY */}
          <div className="w-full md:w-[80%] bg-black h-[100vh] flex-grow text-white border-gray-800 border-l-1">
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path='/Explore' element={<Explore />} />
              <Route path='/Notifications' element={<Notifications />} />
              <Route path='/Messages' element={<Messages />}>
                <Route path='UserMessageOne' element={<UserMessageOne />} />
                <Route path='UserMessageTwo' element={<UserMessageTwo />} />
                <Route path='UserMessageThree' element={<UserMessageThree />} />
              </Route>
              <Route path='/Grok' element={<Grok />} />
              <Route path='/Communities' element={<Communities />} /> 
              <Route path='/Premium' element={<Premium />} />
              <Route path='/Business' element={<Business />} />
              <Route path='/Profile' element={<Profile />} />
              <Route path='/More' element={<More />} />

            </Routes>
          </div>
          {/* END FOR CONTENT DISPLAY ROUTES  */}

        </div>
        {/* WRAPING CONTAINER THAT HOLDS THE LEFT NAV BAR AND  */}


      </div>
    </BrowserRouter>
  )
}
