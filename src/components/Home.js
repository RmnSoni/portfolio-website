
import React, { useContext } from 'react';
import Resume from "../asset/RamanSoni_resumesde.pdf";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import RefContext from '../context/RefContext';



function Home() {

  const { educationRef, workRef, skillsRef, contactRef, projectRef } = useContext(RefContext);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
  
    <div className=''>

      <h1 className=' text-6xl font-bold' >Raman Soni</h1>
      <p className='  m-1 text-center sm:text-left   ' >Hey &#x1f44b;, I am open to work.</p>

      <div className=' my-10 hidden sm:block '>
        <ul className='text-slate-300'>
          <li>
            <button onClick={() => scrollToSection(workRef)} className='hover:text-teal-400 '>EXPERIENCE</button>
          </li>
          <li>
            <button className='hover:text-teal-400' onClick={() => scrollToSection(skillsRef)}>SKILLS</button>
          </li>
          <li>
            <button className='hover:text-teal-400' onClick={() => scrollToSection(educationRef)}>EDUCATION</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(projectRef)}  className='hover:text-teal-400'>PROJECTS</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(contactRef)}  className='hover:text-teal-400'>CONTACT ME</button>
          </li>

        </ul>
      </div>
      
      <div className='flex w-full text-3xl mt-5 text-center justify-between'>
        
        <a rel="noreferrer" target='_blank' className='homebar-icon group transition-all  hover:text-teal-400 hover:text-4xl' href='https://www.linkedin.com/in/rmnsoni/'><FaLinkedin />
        
        <p className='text-base sm:text-lg sm:opacity-0 group-hover:opacity-100 '> LinkedIn </p></a>
        
        <a rel="noreferrer" target='_blank' className='homebar-icon group transition-all  hover:text-teal-400 hover:text-4xl ' href='https://github.com/RmnSoni' ><FaGithub/>
          <p className='text-base sm:text-lg sm:opacity-0 group-hover:opacity-100 '> GitHub </p></a>
        
        <a rel="noreferrer" className='group transition-all hover:text-4xl hover:text-teal-400 homebar-icon' href='mailto:soni.raman.1602@gmail.com' >
          < FaEnvelope/>
          <p className='text-base sm:text-lg  sm:opacity-0 group-hover:opacity-100 '> Email </p>
        </a>
        
        <a rel="noreferrer" className='group transition-all hover:text-4xl hover:text-teal-400 homebar-icon' href={Resume} download='RamanSoniResume.pdf'><HiDocumentArrowDown/>
          <p className='text-base sm:text-lg sm:opacity-0 group-hover:opacity-100 '> Resume </p></a>  
 
      </div>

    </div>

  )
} export default Home;
