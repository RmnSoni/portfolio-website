
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

      <h1 className='text-6xl' >Raman Soni</h1>
      <p className='m-1' >Hey &#x1f44b;, I am open to work.</p>

      <div className='py-10 hidden sm:block '>
        <ul className='text-slate-400'>
          <li>
            <button onClick={() => scrollToSection(workRef)}
            className='hover:text-teal-500'>EXPERIENCE</button>
          </li>
          <li>
            <button className='hover:text-teal-500' onClick={() => scrollToSection(skillsRef)}>SKILLS</button>
          </li>
          <li>
            <button className='hover:text-teal-500' onClick={() => scrollToSection(educationRef)}>EDUCATION</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(projectRef)}  className='hover:text-teal-500'>PROJECTS</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(contactRef)}  className='hover:text-teal-500'>CONTACT ME</button>
          </li>

        </ul>
      </div>
      
      
      <div className='flex w-full text-3xl pt-5 text-center justify-between'>
        <a rel="noreferrer" target='_blank' className='m-2  hover:text-teal-600 flex-1 flex justify-center' href='https://www.linkedin.com/in/rmnsoni/'><FaLinkedin /></a>
        <a rel="noreferrer" target='_blank' className='m-2 hover:text-teal-600 flex-1 flex justify-center' href='https://github.com/RmnSoni' ><FaGithub/></a>
        <a rel="noreferrer" className='m-2 hover:text-teal-600 flex-1 flex justify-center' href='mailto:soni.raman.1602@gmail.com' >< FaEnvelope/></a>
        <a rel="noreferrer" className='m-2 hover:text-teal-600 flex-1 flex justify-center' href={Resume} download='placeholderResume.pdf'><HiDocumentArrowDown/></a>  
      </div>

    
    </div>

  )
} export default Home;
