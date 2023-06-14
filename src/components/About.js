import React, { useContext } from 'react'
import RefContext from '../contexts/GlobalContext'




function About() {
  const { aboutRef ,  isDarkMode} = useContext(RefContext)

  return (

    <div className='py-4  group' ref={aboutRef}>

    <h2 className={`sm:hidden ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-800' } text-2xl `} > About Me</h2>
    <p className='my-1'>As B.Tech graduate form IIT Mandi transitioning from being a management trainee into the world of software engineering, I bring a unique blend of skills and a deep passion for music.</p>
    <p className='my-1'> While I may not have direct industry experience in development, my strong analytical thinking, leadership abilities, and adaptability enable me to quickly learn and thrive in new environments. I am excited to combine my management learnings with my love for coding, and I am open to new opportunities to contribute to innovative projects and new technologies.</p>

    </div>
  )
}
export default About ;