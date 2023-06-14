
import React, { useContext } from 'react';
import Resume from "../asset/RamanSoni_resumesde.pdf";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import RefContext from '../contexts/GlobalContext';
import DarkModeButton from './DarkModeButton';



function Home() {

  const { isDarkMode, educationRef, workRef, skillsRef, contactRef, projectRef } = useContext(RefContext);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
  
    <div className='my-4'>

      <h1 className=' text-6xl my-2 font-bold' >Raman Soni</h1>
      <p className='  m-1 text-center sm:text-left   ' >Hey &#x1f44b;, I am open to work.</p>

      <div className=' my-10 hidden sm:block '>
        <ul className=''>
          <li>
            <button onClick={() => scrollToSection(workRef)} 
            className={`${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' } `}>EXPERIENCE</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(skillsRef)}
            className={`${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' } `} >SKILLS</button>
          </li>
          <li>
            <button  onClick={() => scrollToSection(educationRef)}
            className={`${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' } `} >EDUCATION</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(projectRef)} 
            className={`${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' } `} >PROJECTS</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(contactRef)} 
            className={`${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' } `} >CONTACT ME</button>
          </li>

        </ul>
      </div>
      
      <div className='flex w-full  text-3xl mt-5 text-center justify-between'>
        
        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/rmnsoni/'
        className= {` homebar-icon group transition-all ${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' }  hover:text-4xl` }
        ><FaLinkedin />
        
        <p className='text-sm sm:text-lg sm:opacity-0 group-hover:opacity-100 '> LinkedIn </p></a>
        
        <a rel="noreferrer" target='_blank' href='https://github.com/RmnSoni' 
        className= {` homebar-icon group transition-all ${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' }  hover:text-4xl` }        ><FaGithub/>
          <p className='text-sm sm:text-lg sm:opacity-0 group-hover:opacity-100 '> GitHub </p></a>
        
        <a rel="noreferrer" href='mailto:soni.raman.1602@gmail.com'
        className= {` homebar-icon group transition-all ${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' }  hover:text-4xl` }        ><FaEnvelope/> 
          <p className='text-sm sm:text-lg  sm:opacity-0 group-hover:opacity-100 '> Email </p></a>
        
        <a rel="noreferrer" href={Resume} download='RamanSoniResume.pdf'
        className= {` homebar-icon group transition-all ${ isDarkMode ? 'hover:text-teal-400' : 'hover:text-teal-700' }  hover:text-4xl` }><HiDocumentArrowDown/>
          <p className='text-sm sm:text-lg sm:opacity-0 group-hover:opacity-100 '> Resume </p></a>  

      </div>
          <DarkModeButton />
    </div>

  )
} export default Home;
