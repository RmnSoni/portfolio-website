import React, { useContext } from 'react'
import RefContext from '../contexts/GlobalContext'




function About() {
  const { aboutRef ,  isDarkMode} = useContext(RefContext)

  return (

    <div className='py-4  group' ref={aboutRef}>

    <h2 className={`sm:hidden ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-800' } text-2xl `} > About Me</h2>
    <p className='my-1'>As B.Tech graduate form IIT Mandi transitioning from being a management trainee into the world of software engineering, I bring a unique blend of skills from both sides of the spectrum.</p>
    <p className='my-1'>I am currently employed but remain open to discussing potential opportunities that align with my skills and interests. Feel free to reach out if you have an exciting project or position you'd like to discuss further.</p>
    </div>
  )
}
export default About ;