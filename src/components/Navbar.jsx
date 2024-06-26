import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-3'>

        <div className="logo">
            <span className='font-bold text-xl mx-10'>To Do</span>
        </div>
        <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold hover:font-extrabold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>About</li>
            <li className='cursor-pointer hover:font-bold'>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar