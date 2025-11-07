import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  const checkActive = ({ isActive }) => {
    return isActive
      ? "underline underline-offset-4 decoration-2 text-white transition-all"
      : "hover:underline hover:underline-offset-4 transition-all";
  }

 
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2c5364]
  text-white h-14 flex items-center justify-between font-bold px-4 md:px-40 '>
      <div className="logo ">
        <span>myTodo</span>
      </div>
      <ul className='flex gap-8 text-sm '>
        <li className='cursor-pointer hover:scale-110'>
          <NavLink to="/" end className={checkActive}>Home</NavLink>
        </li>
        <li className='cursor-pointer hover:scale-110'>
          <NavLink to="/about" className={checkActive}>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
