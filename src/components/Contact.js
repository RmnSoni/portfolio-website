import React from 'react'
import {  FaEnvelopeSquare, FaFileDownload, FaLinkedin } from 'react-icons/fa'
import Resume from "../asset/RamanSoni_resumesde.pdf"
import { useContext } from 'react'
import RefContext from '../contexts/GlobalContext'
import { AiFillInstagram } from 'react-icons/ai'

export default function Contact() {

  const {contactRef, isDarkMode} = useContext(RefContext)
    return (
    <section className='py-4 group/section' ref={contactRef} >

      <h2 className={`${ isDarkMode ? 'group-hover/section:text-teal-500' : 'group-hover/section:text-teal-800' } text-2xl p-1 `}>Contact Me</h2>

      <p className='m-1 p-1 group' >
        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/rmnsoni/'>
          <FaLinkedin 
          className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`}  
          />
          Connect with me on my LinkedIn profile <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          > rmnsoni</span>.</a></p>

      <p className='m-1 p-1 group' >
        <a rel="noreferrer" href='mailto:soni.raman.1602@gmail.com'  >
          <FaEnvelopeSquare className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`}  /> Email me at <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          >  soni.raman.1602@gmail.com</span>.</a> </p>

      <p className='m-1 p-1 group'>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/i.aint.artist/' >
          < AiFillInstagram className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`}  />Although <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          >@i.aint.arist</span>, you can see my art on instagram.</a></p>

      <p className='m-1 p-1 group' >
        <a rel="noreferrer" href={Resume} download='RamanSoniResume.pdf' >
          <FaFileDownload className={`mx-1 inline ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' }`} />
          You can download <span 
          className={`${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-700' } group-hover:font-semibold`} 
          > my resume </span> by clicking here. </a></p>
    </section>
  )
}

