import React, { Component } from 'react'
import { FaDownload, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Resume from "../asset/RamanSoni_resumesde.pdf"



export default class Contact extends Component {
  render() {
    return (
      <div className='py-4 group/section'>

        <h2 className='group-hover/section:text-teal-500 text-2xl p-1 '>Contact Me</h2>

        <p className='m-1 p-1 group' >
          <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/rmnsoni/'>
          <FaLinkedin className='inline mx-1 group-hover:text-teal-500' />
          Connect with me on my LinkedIn profile <span className="group-hover:text-teal-500 group-hover:font-semibold"> rmnsoni</span></a></p>

        <p className='m-1 p-1 group' >
          <a rel="noreferrer"  href='mailto:soni.raman.1602@gmail.com'  >
          <FaEnvelope className='inline mx-1 group-hover:text-teal-500' /> Email me at <span className="group-hover:text-teal-500 group-hover:font-semibold" >  soni.raman.1602@gmail.com </span></a> </p>

        <p className='m-1 p-1 group'>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com/i.aint.artist/' >
            <FaInstagram className='inline mx-1  group-hover:text-teal-500' />Although <span className="group-hover:text-teal-500 group-hover:font-semibold" >@i.aint.arist</span>, you can see my art on instagram.</a></p>

        <p className='m-1 p-1 group' >
          <a rel="noreferrer"  href={Resume} download='placeholderResume.pdf' >
            <FaDownload className="mx-1 inline group-hover:text-teal-500" />
            You can download <span className="group-hover:text-teal-500 group-hover:font-semibold" > my resume </span> by clicking here. </a></p>
      </div>
    )
  }
}
