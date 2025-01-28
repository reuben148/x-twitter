import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ForYou from "../components/Home/ForYou";

export default function Home() {

  return (
    
    <div className=' border-gray-600 h-[100vh] flex overflow-auto  no-scrollbar '>
      <div>
       <Link to='ForYou'>For you</Link>
      </div>
      {/* MIDDLE HOME FOR CONTENT */}
      <div className='h-fit w-[60%] bg-green-200 '>
       
          
        <Routes>
        <Route path='ForYou' element={<ForYou />} />
        </Routes>
      

      </div>
      {/* END FOR MIDDLE HOME FOR CONTENT */}

      <div className='bg-green-700 w-[40%]'>
       
      </div>


    </div>
    

  )
}
