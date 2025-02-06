import { Link } from "react-router-dom"

export default function WhoToFollow() {
  return (
    
    <div className="w-[95%] border-1 border-gray-800 rounded-2xl mt-4  ">

    <h5 className="font-extrabold text-2xl p-5">Who to follow</h5>

    {/* CONTENT */}
    <div className="p-3 px-5 hover:bg-gray-950 flex">

        <div className="w-[15%]">
            <img src="/akan.jpg" className="rounded-full" />
        </div>

        <div className="w-[85%] flex justify-between pl-2 items-center ">

            <div>
            <h1 className="font-bold">Mano Dav</h1>
            <h1 className="text-gray-500 text-sm">Trending in Niger</h1>
            </div>

            <button className="bg-blue-500 px-4 py-2 rounded-2xl font-medium">Follow</button>


        </div>



         
      
        

    </div>
    {/* END FOR CONTENT */}


   

    
    




</div>

  )
}
