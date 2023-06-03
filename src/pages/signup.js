import { useState } from "react"
import { Link } from "react-router-dom"
import useAuth from "../utils/useAuth"
const initialState = {
    email : "",
    password : "",
    confirmPassword: "",
  }
const SignUp = () => {
    const [signUpValues, setSignUpValues] = useState(initialState)
    const {email, password, confirmPassword} = signUpValues
    const handleChange = (e) => {
        setSignUpValues({ ...signUpValues, [e.target.name] : e.target.value })
    }
    const { signup } = useAuth();

    const handleSignup = async () => {
        // Perform form validation and retrieve email and password
        await signup(email, password);
      };
    
    return (
        <div className="flex flex-col justify-center py-8 bg-gray-50 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 lg:text-3xl text-[1.6rem] font-extrabold text-center text-gray-900 leading-9">
            Create a new account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600 leading-5 max-w">
            Or
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-1">Already registered user?</Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10"> 
            <div>
            <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 leading-5"
            >
                Email address
            </label>
            <div className="mt-1 rounded-md shadow-sm">
                <input
                id="email"
                name="email"
                type="email"
                required=""
                autofocus=""
                value = {email}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                />
            </div>
            </div>
            <div className="mt-6">
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 leading-5"
            >
                Password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
                <input
                id="password"
                name="password"
                type="password"
                required=""
                value = {password}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                />
            </div>
            </div>
            <div className="mt-6">
            <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 leading-5"
            >
                Confirm password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
                <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required=""
                value = {confirmPassword}
                onChange={handleChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                />
            </div>
            </div>
            <div className="mt-6 flex items-center">
            <input type="checkbox" id="agree"/>
            <label for="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
            </div>
            <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
                <button
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                onClick={handleSignup}>
                Sign Up
                </button>
            </span>
            </div>
            <hr class="my-6 border-gray-300 w-full"></hr>
            <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
                <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 focus:outline-none focus:shadow-outline-gray active:bg-gray-200 transition duration-150 ease-in-out"
                >
                <div className="flex items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
                >
                <defs>
                    <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                </defs>
                <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                </svg>
                <span className="ml-4">Sign up with Google</span>
                </div>
                </button>
            </span>
            </div>   
          </div>
        </div>
      </div>
    )
}

export default SignUp