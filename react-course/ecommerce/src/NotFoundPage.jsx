import { Link } from "react-router-dom"

function NotFound(params) {
  
  return(
    <div className="h-screen bg-black text-white flex flex-col gap-2" >
      404 page not found
      <Link to = "/">Home</Link>
    </div>
  )
}

export default NotFound