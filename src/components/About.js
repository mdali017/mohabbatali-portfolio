import React from 'react'
import image from '../assets/img/Mohabbat.jpg'

function About() {
  return (
    <section className='section bg-secondary'>
     <div className='container mx-auto'>
       <div className='flex flex-col xl:flex-row gap-24'>
          <img className='object-cover h-[400px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={image} alt="" />
          <div data-aos="fade-left"
               data-aos-anchor="#example-anchor"
               data-aos-offset="500"
               data-aos-duration="500" 
               className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Mohabbat Ali</h2>
            <p className='mb-4 text-accent'>Freelance Web Developer</p>
            <hr className='mb-8 opacity-5' />
            <p className='mb-8'>As a MERN Stack developer, I specialize in developing web applications using the MERN technology stack, which stands for MongoDB, Express.js, React.js, and Node.js. I have a strong understanding of each component in the stack, allowing me to build full-stack applications from the back-end to the front-end. <br /> In terms of back-end development, I am proficient in working with Node.js and Express.js to create robust and scalable server-side applications. </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact Me</button>
          </div>
       </div>
     </div>
    </section>
  )
}

export default About
