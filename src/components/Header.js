import React from 'react'
import logo from '../assets/img/logo.svg'
import { useState } from 'react'
import { useEffect } from 'react';
import Nav from './Nav';
import Socials from './Socials';
import NavMobail from './NavMobail';
import { Link } from 'react-scroll';

function Header() {
    const [bg, setBg] = useState(false);

    useEffect( () =>{
        window.addEventListener( 'scroll', () =>{
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0 w-full  z-10 transition-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between '>

       
        <Link className='text-2xl italic' to=''>
          Mohabbat Ali
        </Link>
        <div className='hidden lg:block'>
          <Nav></Nav>
        </div>
        <div className='hidden lg:block'>
          <Socials></Socials>
        </div>
        <div className='lg:hidden'>
          <NavMobail></NavMobail>
        </div>
        
      </div>
    </header>
  )
}

export default Header
