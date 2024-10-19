import React, { useContext } from 'react'
import RefContext from '../contexts/GlobalContext'



function About() {
  const { aboutRef ,  isDarkMode} = useContext(RefContext)

  return (

    <div className='py-4  group' ref={aboutRef}>
    <h2 className={`sm:hidden ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-800' } text-2xl `} > About Me</h2>
    <p className='my-1'>I am a software engineer graduated from IIT Mandi with 1.5 years of full-stack development experience. I am expanding my skillset to include iOS development.</p>
    <p className='my-1'>I am currently employed but remain open to discussing potential opportunities that align with my skills and interests. Feel free to reach out if you have an exciting project or position you'd like to discuss further.</p>
    </div>
  )
}
export default About ;