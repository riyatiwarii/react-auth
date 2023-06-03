import { Link} from "react-router-dom"
import { useState } from "react"
import useAuth from "../utils/useAuth"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { user, logout } = useAuth();
    console.log(user);
    const handleLogout = () => {
      logout();
    };
    return (
        <nav className="flex items-center justify-between flex-wrap px-6 py-3">
            <div className="flex items-center flex-shrink-0 text-dark md:text-right mr-6">
                <span className="font-semibold text-xl tracking-tight hover:text-blue-800">
                <Link to="/">TASK TRACKER</Link>
                </span>
            </div>
            <div className="block md:hidden ">
                <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
                onClick={() => { setShowMenu(!showMenu) }}>
                <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
                </button>
            </div>
            <div className={`w-full flex-grow md:items-center md:w-auto ${showMenu ? 'flex' : 'hidden md:flex'}  pt-6 md:pt-0 md:text-right`}>
                <div className="text-[1.05rem] md:flex-grow">
                <Link to="/" className="block md:mt-4 md:inline-block lg:mt-0 text-dark-200 hover:text-blue-800 mr-4">Dashboard</Link>
                {
                    !user ? <>
                    <Link to="/signin" className="block md:mt-4 mt-3 md:inline-block text-dark-200 hover:text-blue-800 lg:py-3 md:py-0 mr-4">Log In</Link>
                    <Link to="/signup" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-100 uppercase py-1 px-4 mt-4 md:mt-0 rounded-full inline-block hover:text-white">Sign Up</Link>
                    </> : <button onClick={handleLogout} className="bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-100 uppercase py-1 px-4 mt-4 md:mt-0 rounded-full inline-block hover:text-white">Log out</button>
                }
                </div>
            </div>
        </nav>
    )
}

export default Header