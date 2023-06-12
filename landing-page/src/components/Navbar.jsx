import { useState } from 'react'
import { navLinks } from '../constants'
import {logo , close , menu } from '../assets'

const Navbar = () => {
  const [toggle, settoggle] = useState(false)  

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href=""><img src={logo} alt="ESSAC" className="w-[184px] h-[52px]" /></a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key = {nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'}
          text-[#ed3237] uppercase`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-cent">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain"
         onClick={() => settoggle((prev) => !prev)}/>
      </div>

      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
      <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key = {nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index == navLinks.length - 1 ? 'mr-0' : 'mb-4'}
           text-white uppercase`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar