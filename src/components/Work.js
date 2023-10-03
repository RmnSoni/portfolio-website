import React, { useContext } from 'react'
import RefContext from '../contexts/GlobalContext'
import { workExperienceList } from '../asset/ListsAddables.js'

export default function Work() {
  const { workRef, isDarkMode } = useContext(RefContext)

  return (
    <div className='py-4 group/section' ref= {workRef}>
      <h2 className={` ${ isDarkMode ? 'group-hover/section:text-teal-500' : 'group-hover/section:text-teal-800' } text-2xl `} > Work Experience</h2>
      { workExperienceList.map((work, key) => (
        <div className={`group hover:bg-opacity-5  rounded ${isDarkMode? 'hover:bg-slate-300' :'hover:bg-slate-700' } m-2 `}>
          <div className='flex'>
            <div className='text-slate-500 flex-none text-right w-1/4 m-1 p-1'> {work.dates}</div>
            <div className='m-1 p-1' >
              <h3 className={`${ isDarkMode ? 'text-teal-500' : 'text-teal-700' } text-xl `} >{work.jobTitle}</h3>
              <a className=" hover:text-teal-500" rel="noreferrer" href={work.companyLink} target='_blank'>{work.company}</a>
              <ul className='hidden sm:block'>
                <li> {work.description1} </li>
                <li> {work.description2} </li>
              </ul>
            </div>
          </div>
          {/* Needs code improvement */}
          <ul className='sm:hidden p-1'>
            <li> {work.description1} </li>
            <li> {work.description2} </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

