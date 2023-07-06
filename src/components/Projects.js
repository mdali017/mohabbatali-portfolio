import React from 'react'



import project1 from '../assets/img/projects/project1.png'

function Projects() {  
  return (
   <div>
    <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
      
      <div className='border'>
         <div className='w-full  scroll-m-7 border-1 border-white container'>
          <img className='h-70' src={project1} alt="" />
          <h2 className='mt-4'>Project Name: <span className='text-3xl text-orange-500'>vegFoods</span></h2>
          <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis deserunt reprehenderit, perspiciatis dignissimos adipisci placeat?</p>
          
            <div className='mt-5 '>
              <button className='mr-5 btn border'>Live Site</button>
              <button className='mr-5 btn border'>Client Site code</button>
              <button className='mr-5 btn border'>Server Site code</button>
            </div>
         </div>
      </div>
      <div className='border'>
         <div className='w-full  scroll-m-7 border-1 border-white container'>
          <img className='h-70' src={project1} alt="" />
          <h2 className='mt-4'>Project Name: <span className='text-3xl text-orange-500'>vegFoods</span></h2>
          <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis deserunt reprehenderit, perspiciatis dignissimos adipisci placeat?</p>
          
            <div className='mt-5 '>
              <button className='mr-5 btn border'>Live Site</button>
              <button className='mr-5 btn border'>Client Site code</button>
              <button className='mr-5 btn border'>Server Site code</button>
            </div>
         </div>
      </div>
      <div className='border'>
         <div className='w-full  scroll-m-7 border-1 border-white container'>
          <img className='h-70' src={project1} alt="" />
          <h2 className='mt-4'>Project Name: <span className='text-3xl text-orange-500'>vegFoods</span></h2>
          <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis deserunt reprehenderit, perspiciatis dignissimos adipisci placeat?</p>
          
            <div className='mt-5 '>
              <button className='mr-5 btn border'>Live Site</button>
              <button className='mr-5 btn border'>Client Site code</button>
              <button className='mr-5 btn border'>Server Site code</button>
            </div>
         </div>
      </div>
    </section>
   </div>
    
  )
}

export default Projects
