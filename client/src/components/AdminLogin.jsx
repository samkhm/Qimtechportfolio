import { Link } from "react-router-dom";

export default function AdminLogin(){
    return(
<Link
  to="/login"
  className="w-fit h-fit px-4 py-1 m-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
   >
  Login
</Link>

    )
}