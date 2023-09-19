import React from 'react'
import { brands } from '../data'


function Brands() {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
       <div className='container mx-auto flex md:justify-between  items-center  flex-wrap  justify-evenly '>
         {
            brands.map( (brand, index) => {
                return (
                    <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" key={index}>
                        <img src={brand.img} alt="" />
                    </div>
                )
            })
         }
       </div>
    </section>
  )
}

export default Brands
