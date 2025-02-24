import Terms from "../components/Home/Terms";
import WhoToFollow from "../components/Home/WhoToFollow";
import Search from "./Search";

export default function Explore() {
  return (
    <div className='flex h-[100vh] w-full'>

    {/* MIDDLE FOR EXPLORE */}
    <div className="bg-red-500 w-[60%] overflow-y-auto relative no-scrollbar"> {/* Added overflow and relative */}

        <nav className="bg-amber-300 sticky top-0 z-10"> {/* Added sticky, top, and z-index */}
            <div className="flex">
              <Search/>
              <Link>
              <h1>Hello</h1>
              </Link>
            </div>
        </nav>

        <div className="bg-amber-950 h-[1000px] pt-16"> {/* Added pt for spacing below nav */}
            
        </div>

    </div>
    {/* END FOR MIDDLE FOR EXPLORE */}


    {/* RIGHT SIDE BAR */}
    <div className=" w-[40%] h-[100vh] sticky top-0 pl-8">
      <WhoToFollow/>
      <Terms/>
    </div>
    {/* END FOR RIGHT SIDE BAR */}

</div>

  )
}
