import { Link } from "react-router-dom"

export default function SubToPremium() {
  return (
    <div className="w-[95%] border-1 border-gray-800 rounded-2xl p-3 px-5 mt-4 gap-y-5 ">

      <h5 className="font-extrabold text-xl mb-3">Subscribe to Premium</h5>

      <p className="text-lg font-normal">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>

      <Link to='/Premium'>
      <button className="bg-blue-500 rounded-full p-1 font-medium text-lg px-6 mt-3">Subscribe</button>
      </Link>

    </div>
  )
}
