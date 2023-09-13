/* eslint-disable react/no-unknown-property */
import logo from "../assets/logo.png";
import {useState}  from 'react'
import Toggle from "./Toggle";

function Header() {
    const [isActive, setIsActive] = useState(false)
    const innerWidth = window.innerWidth
    const device = innerWidth > 768 ? 'desktop' : 'mobile'

    const menuHandler = () =>{
        setIsActive((prev) => !prev)
    }
  return (
    <header className="shadow shadow-blue-500/40 md:shadow-indigo-500/40 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="mock-interview" />
        </div>
       
        <div className={isActive && device === 'mobile' ? 'items-center md:flex absolute h-54 p-10 top-20 left-0 w-full shadow-md bg-white z-10' : device === 'desktop' ? 'flex items-center'  :'hidden'} >
          <ul className="md:flex items-center text-sm ">
            <li className="md:mx-3 flex items-center cursor-pointer mb-5 md:mb-0">
              <span>Discover</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="auto"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-4 h-4 ml-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="md:mx-3 flex items-center cursor-pointer mb-5 md:mb-0">
              <span>Mentors</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="auto"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="md:mx-3 flex items-center cursor-pointer mb-5 md:mb-0">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="ato"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
          </ul>
          <button className="btn btn-primary mr-5 md:ml-5">Login</button>
          <button className="btn btn-transparent">Signup</button>
        </div>

        {
            device === "mobile" ? <Toggle  menuHandler={menuHandler} isActive={isActive}/> : <></>
        }
       
      </div>
    </header>
  );
}

export default Header;
