import React from 'react'
import img1 from '../assets/img/skills/html5.png'
import img2 from '../assets/img/skills/css3.png'
import img3 from '../assets/img/skills/js.png'
import img4 from '../assets/img/skills/nodejs.png'
import img5 from '../assets/img/skills/reactjs.png'
import img6 from '../assets/img/skills/nextjs.png'
import img7 from '../assets/img/skills/git.png'
import img8 from '../assets/img/skills/figma.png'

function Skills() {
  return (
    <section className='bg-tertiary py-12'>
     <div className='container mx-auto '>
       <div className='grid grid-cols-8 md:grid-flow-row'>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
       </div>
     </div>
    </section>
  )
}

export default Skills
