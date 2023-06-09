
import React, { useRef } from 'react';

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

    <div className='sm:h-screen  '>
      <div className=' hidden h-1/4 sm:block' ></div>

      <h1 className='text-5xl' > Hi, I am Raman &#x1f44b;</h1>
      <p>Open to work.</p>

      <div className=' py-16 hidden sm:block '>
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

      <div className='flex text-3xl p-20 justify-center  '>
        <a target='_blank' className='m-2 hover:text-teal-600 flex-1' href='https://www.linkedin.com/in/rmnsoni/'><FaLinkedin /></a>
        <a target='_blank' className='m-2 hover:text-teal-600 flex-1' href='https://github.com/RmnSoni' ><FaGithub/></a>
        <a className='m-2 hover:text-teal-600 flex-1' href='mailto:soni.raman.1602@gmail.com' >< FaEnvelope/></a>
        <a className='m-2 hover:text-teal-600 flex-1' href='../asset/RamanSoni_resumesde.pdf'download='placeholderResume.pdf' >< HiDocumentArrowDown/></a>
      </div>
    </div>

  )
} export default Home;
