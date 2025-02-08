import { Link } from "react-router-dom"

export default function WhoToFollow() {
  return (

    <div className="w-[95%] border-1 border-gray-800 rounded-2xl mt-4 ">

      <h5 className="font-extrabold text-2xl p-5">Who to follow</h5>

      {/* CONTENT */}
      <div className="p-3 px-5 hover:bg-gray-950 flex">

        <div className="w-[14%]">
          <img src="/akan.jpg" className="rounded-full" />
        </div>

        <div className="w-[85%] flex justify-between pl-2 items-center ">

          <div>
            <h1 className="font-bold">Mano Dev</h1>
            <h1 className="text-gray-500 text-sm">@manoah.dev</h1>
          </div>

          <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm">Follow</button>

        </div>

      </div>
      {/* END FOR CONTENT */}

      {/* CONTENT */}
      <div className="p-3 px-5 hover:bg-gray-950 flex">

        <div className="w-[14%]">
          <img src="/akan.jpg" className="rounded-full" />
        </div>

        <div className="w-[85%] flex justify-between pl-2 items-center ">

          <div>
            <h1 className="font-bold">Akan</h1>
            <h1 className="text-gray-500 text-sm">@Akanimoh__</h1>
          </div>

          <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm">Follow</button>

        </div>

      </div>
      {/* END FOR CONTENT */}


      {/* CONTENT */}
      <div className="p-3 px-5 hover:bg-gray-950 flex">

        <div className="w-[14%]">
          <img src="/akan.jpg" className="rounded-full" />
        </div>

        <div className="w-[85%] flex justify-between pl-2 items-center ">

          <div>
            <h1 className="font-bold">Jaytee</h1>
            <h1 className="text-gray-500 text-sm">@jaytee.dev</h1>
          </div>

          <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm">Follow</button>

        </div>

      </div>
      {/* END FOR CONTENT */}

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
