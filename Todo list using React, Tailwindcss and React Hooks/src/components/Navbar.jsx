import React from 'react'


const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2c5364]
  text-white h-14 flex items-center justify-between font-bold px-4 md:px-40'>
      <div className="logo">
        <span>myTodo</span>
      </div>
      <ul className='flex gap-8  font-bold'>
        <li className='cursor-pointer hover:scale-110'>Home</li>
        <li className='cursor-pointer hover:scale-110'>About</li>
      </ul>
    </nav>
  ) 
}

export default Navbar
