
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


      <div className='flex p-20 justify-center  '>
        < FaLinkedin className='flex-1'/>
        <FaGithub className='flex-1' />
        < HiDocumentArrowDown className='flex-1'/>
        < FaEnvelope className='flex-1'/>
      </div>
    </div>

  )
} export default Home;
