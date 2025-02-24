import { Link } from "react-router-dom"
import PostIcons from "./PostIcons"

export default function Post() {
  return (
    <div className='flex p-3 py-4 gap-2 border-b-1 border-gray-900  '>

      <div className="w-[10%] items-end">
        <Link to='/Profile'>
            <img src='/akan.jpg' className='w-11 h-11 rounded-full' />
        </Link>
      
      </div>

      <div className="w-[90%]">

        {/* INPUT FIELD FOR POST */}
        <div>
            <input type="text" id=""  className="w-full text-xl mt-2 mb-4" placeholder="What is happening?!"/>
        </div>
        {/* END FOR INPUT FIELD FOR POST */}

        {/* ICONS AND POST BUTTON SECTION */}
        <div className="justify-between flex items-center  ">

            {/* ICONS */}
            <div>
              <PostIcons/>
            </div>
            {/* END FOR ICONS */} 
            
            <button className="bg-white text-black font-semibold  px-4 py-2  rounded-3xl ">Post</button>
        </div>
        {/* END FOR ICONS AND POST BUTTON SECTION */}

      </div>

    </div>
  )
}
