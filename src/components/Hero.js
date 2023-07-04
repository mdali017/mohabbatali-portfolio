import React from 'react'
import WomanImg from '../assets/img/banner-woman2.webp'

function Hero() {
  return (
    <section id='home' className='lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden '>
      <div className='container flex mx-auto h-full '>

        {/* left */}
       <div className="flex flex-1 flex-col lg:mt-40 items-center lg:items-start">
         <p className='text-lg text-accent mb-[22px]'>Hey, I'm Jane 🙂</p>
          <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>I Build & Design <br /> Web Interface</h1>
          <p className='pt-4 pb-8  md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:left'>Adipisicing elit. At nesciunt quod minima voluptate. Explicabo similique culpa quia libero totam officia?</p>
          <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Download CV</button>
       </div>

       {/* right */}
       <div className='hidden lg:flex flex-1 justify-center items-end h-full'>
        <img src={WomanImg} alt="" />
       </div>
      </div>
    </section>
  )
}

export default Hero
