import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-16 flex justify-between items-center px-10 py-2 relative'>

      {/* Logo */}
      <h1 className='uppercase font-teacher text-3xl font-bold
        max-sm:text-2xl
      '>
        ishrat fayaz
      </h1>

      {/* Desktop Menu */}
      <ul className='flex justify-center items-center gap-8
        max-lg:hidden
      '>
        <Link to="/" className='font-tenor text-2xl font-light'>Home</Link>
        <Link to="/about" className='font-tenor text-2xl font-light'>About</Link>
        <Link to="/books" className='font-tenor text-2xl font-light'>Books</Link>
        <Link to="/podcasts" className='font-tenor text-2xl font-light'>Podcasts</Link>
        <Link to="/videos" className='font-tenor text-2xl font-light'>Videos</Link>
        <Link to="/shop" className='font-tenor text-2xl font-light'>Shop</Link>
      </ul>

      {/* Hamburger Icon (Mobile + Tablet) */}
      <div
        className='hidden max-lg:flex justify-center items-center'
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          absolute top-16 left-0 w-full bg-white shadow-md py-6 px-8 flex flex-col gap-6
          transition-all duration-300 z-50
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          max-lg:flex
          hidden
        `}
      >
        <Link onClick={() => setOpen(false)} to="/" className='font-tenor text-2xl font-light max-sm:text-xl'>Home</Link>
        <Link onClick={() => setOpen(false)} to="/about" className='font-tenor text-2xl font-light max-sm:text-xl'>About</Link>
        <Link onClick={() => setOpen(false)} to="/books" className='font-tenor text-2xl font-light max-sm:text-xl'>Books</Link>
        <Link onClick={() => setOpen(false)} to="/podcasts" className='font-tenor text-2xl font-light max-sm:text-xl'>Podcasts</Link>
        <Link onClick={() => setOpen(false)} to="/videos" className='font-tenor text-2xl font-light max-sm:text-xl'>Videos</Link>
        <Link onClick={() => setOpen(false)} to="/shop" className='font-tenor text-2xl font-light max-sm:text-xl'>Shop</Link>
      </div>

    </div>
  )
}

export default Navbar
