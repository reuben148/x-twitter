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
    <BrowserRouter className='flex'>
      
      <div className="w-[20%] bg-black text-white">

        {/* Home Icon & Navigation */}
        <div className="w-full">
          <Link to='/'>Home</Link>
        </div>

        <div className="w-full">
          <Link to='/Explore'>Explore</Link>
        </div>


      </div>
      
      <div className="w-[80%]">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Explore' element={<Explore/>}/>
          {/* <Route path='/Notifications' element={<Notifications/>}/>
          <Route path='/Messages' element={<Messages/>}/>
          <Route path='/Grok' element={<Grok/>}/>
          <Route path='/Communities' element={<Communities/>}/>
          <Route path='/Premium' element={<Premium/>}/>
          <Route path='/Business' element={<Business/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/More' element={<More/>}/> */}
        </Routes>
      </div>

    </BrowserRouter>
  )
}
