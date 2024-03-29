import React from 'react'
import Resume from "../asset/RamanSoni_resume.pdf"
import { useContext } from 'react'
import RefContext from '../contexts/GlobalContext'
import { PiBookOpenTextDuotone, PiEnvelopeOpenDuotone, PiFileArrowDownDuotone, PiInstagramLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi'

export default function Contact() {

  const {contactRef, isDarkMode} = useContext(RefContext)
    return (
    <section className='py-4 group/section' ref={contactRef} >

      <h2 className={`${ isDarkMode ? 'group-hover/section:text-teal-500' : 'group-hover/section:text-teal-800' } text-2xl p-1 `}>Contact Me</h2>

      <p className='m-1 p-1 group' >
        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/rmnsoni/'>
          <PiLinkedinLogoDuotone 
          className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`}  
          />
          Connect with me on my LinkedIn profile <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          > rmnsoni</span>.</a></p>

      <p className='m-1 p-1 group' >
        <a rel="noreferrer" href='mailto:soni.raman.1602@gmail.com'  >
          <PiEnvelopeOpenDuotone className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`}  />Email me at <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          >  soni.raman.1602@gmail.com</span>.</a> </p>

      <p className='m-1 p-1 group'>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/i.aint.artist/' >
          <PiInstagramLogoDuotone className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`}  />Although <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          >@i.aint.arist</span>, you can see my art on instagram.</a></p>

<p className='m-1 p-1 group' >
        <a rel="noreferrer" href={Resume} download='RamanSoniResume.pdf' >
          <PiFileArrowDownDuotone className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`} />
          You can download <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          > my resume </span> by clicking here. </a></p>
          
          <p className='m-1 p-1 group' >
            <a target='-blank' rel="noreferrer" href="https://blog.ramansoni.in/" >
              <PiBookOpenTextDuotone className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`} />
              See my journey of learning tech in<span 
              className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
              > my blogs</span>. </a></p>
    </section>
  )
}

