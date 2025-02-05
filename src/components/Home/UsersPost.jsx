import { Link } from "react-router-dom"

export default function UsersPost() {
  return (
    <div className='flex p-3 py-4 gap-2 border-b-1 border-gray-900  '>

      {/* IMAGE OF THE USER */}
      <div className="w-[10%] items-end">
        <Link to='/Profile'>
          <img src='/akan.jpg' className='w-11 h-11 rounded-full' />
        </Link>

      </div>
      {/* END FOR THE USER IMAGE */}

      {/* USER POST CONTAINER */}
      <div className="w-[90%]">
        
        {/* USER DETAILS */}
        <div className="justify-between items-center flex">

          <div className="flex gap-2">
            <h1>Web3bridge</h1>
            <p>@Web3Bridge</p>
            <p>.</p>
            <p>53m</p>
          </div>

          <div>Hello Icons</div>

          <div>
            
          </div>

        </div>
        {/* END FOR USER DETAILS */}

        {/* POST WRITE-UP */}
        <div>
          
        </div>
        {/* END FOR POST WRITE-UP */}

        

      </div>
      {/* END FOR USER POST CONTAINER */}

    </div>
  )
}
