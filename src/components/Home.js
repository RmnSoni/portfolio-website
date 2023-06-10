
import React, { useRef } from 'react';
import Resume from "../asset/RamanSoni_resumesde.pdf";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocumentArrowDown } from 'react-icons/hi2';


function Home() {

  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const helpRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };



  return (

    <div className=''>

      <h1 className='text-6xl' >Raman Soni</h1>
      <p className='m-1' >Hey &#x1f44b;, I am open to work.</p>

      <div className='py-10 hidden sm:block '>
        <ul>
          <li>
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(helpRef)}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(workRef)}>Work</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(projectRef)}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(contactRef)}>Contact Me</button>
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
