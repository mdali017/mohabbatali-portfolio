import React from 'react'
import project1 from '../assets/img/projects/project1.png'
import project2 from '../assets/img/projects/project2.png'
import project3 from '../assets/img/projects/project3.png'
import style from '../Custom Style/style.css'


function Projects() {
  return (
    <div>
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>

        <div className='border'>
          <div className='w-full   '>
            <div className='project-section-style'>
              <img className=' img-scroller' src={project1} alt="" />
            </div>
            <h2 className='mt-4'>Project Name: <span className='text-3xl text-orange-500'>vegFoods</span></h2>
            <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis deserunt reprehenderit, perspiciatis dignissimos adipisci placeat?</p>

            <div className='mt-5 '>

              <a href='https://zesty-cannoli-f6328d.netlify.app/' className='mr-5 btn border'>Live Site </a>
              <a href='https://github.com/mdali017/vegFoods' className='mr-5 btn border'>Client Site code</a>
              <a href='https://github.com/mdali017/vegFoods-server' className='mr-5 btn border'>Server Site code</a>

            </div>
          </div>
        </div>
        <div className='border'>
          <div className='w-full  scroll-m-7 border-1 border-white '>
            <div className='project-section-style'>
              <img className=' img-scroller' src={project2} alt="" />
            </div>
            <h2 className='mt-4'>Project Name: <span className='text-3xl text-orange-500'>DreamChef</span></h2>
            <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis deserunt reprehenderit, perspiciatis dignissimos adipisci placeat?</p>

            <div className='mt-5 '>
              <a href='https://mellow-custard-58dbcf.netlify.app/' className='mr-5 btn border'>Live Site </a>
              <a href='https://github.com/mdali017/vegFoods' className='mr-5 btn border'>Client Site code</a>
              <a href='https://github.com/mdali017/vegFoods-server' className='mr-5 btn border'>Server Site code</a>
            </div>
          </div>
        </div>
        <div className='border'>
          <div className='w-full  scroll-m-7 border-1 border-white '>
          <div className='project-section-style'>
              <img className=' img-scroller' src={project3} alt="" />
            </div>
            <h2 className='mt-4'>Project Name: <span className='text-3xl text-orange-500'>Kid Sport Academy</span></h2>
            <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magni recusandae iure eaque corporis deserunt reprehenderit, perspiciatis dignissimos adipisci placeat?</p>

            <div className='mt-5 '>
              <a href='https://kid-sports-academy.web.app/' className='mr-5 btn border'>Live Site </a>
              <a href='https://github.com/mdali017/vegFoods' className='mr-5 btn border'>Client Site code</a>
              <a href='https://github.com/mdali017/vegFoods-server' className='mr-5 btn border'>Server Site code</a>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Projects
