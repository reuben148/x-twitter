import { Link } from "react-router-dom"

export default function Terms() {
  return (
    <div className="mt-4 pb-7">

      <div className="flex text-gray-600 gap-2">
        <Link to='/'>Terms of Service</Link>
        <Link to='/'>Privacy Policy</Link>
        <Link to='/'>Cookie Policy</Link>
      </div>

      <div className="flex text-gray-600 gap-2">
        <Link to='/'>Accesibility</Link>
        <Link to='/'>Ads Info</Link>
        <Link to='/'>More...</Link>
        <h1>@2025 X Corp.</h1>
      </div>
    </div>
  )
}
