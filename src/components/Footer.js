import React from 'react'
import { social } from '../data'

import logo from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row lg:space-y-8 items-center  justify-between'>
                <div className='flex space-x-6 items-center justify-center'>
                    {
                        social.map( (item, index) =>{
                            const {href, icon} = item;
                            return (
                                <a className='text-accent text-base ' href={href} key={index}>
                                    {icon}
                                </a>
                            )
                        } )
                    }
                </div>
                <div>
                    <h1 className='italic text-2xl'>Mohabbat Ali</h1>
                </div>
                <p>&copy: 2023 Mohabbat Ali. All rights reserved</p>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
