import React, { useContext } from 'react'
import RefContext from '../contexts/GlobalContext'

export default function Work() {
const { workRef, isDarkMode } = useContext(RefContext)

    return (
        <div className='py-4 group/section' ref= {workRef}>
            <h2 className={` ${ isDarkMode ? 'group-hover/section:text-teal-500' : 'group-hover/section:text-teal-800' } text-2xl `} > Work Experience</h2>
            <div className={`group hover:bg-opacity-5  rounded ${isDarkMode? 'hover:bg-slate-300' :'hover:bg-slate-700' } `}>
                <div className='flex'>
                    <div className='text-slate-500 min-w-fit m-1 p-1'> Aug - Dec 2022</div>
                    <div className='m-1 p-1' >
                        <h3 className={`${ isDarkMode ? 'text-teal-500' : 'text-teal-700' } text-xl `} >Management Trainee</h3>
                        <a className=" hover:text-teal-500" rel="noreferrer" href='https://www.icicibank.com/' target='_blank'> ICICI Bank Ltd.</a>
                        <ul className='hidden sm:block'>
                            <li>Initiated and managed the development and implementation of a digital visiting card solution for over 125,000 ICICI employees, significantly reducing reliance on printed cards. This involved coordination with teams of business analyst, developers, designers.</li>
                            <li>In my role as the application owner, I undertook the responsibility of ensuring the maintenance, scalability, new enhancements, and technical support for iSpace—an indispensable application relied upon by a vast user base of over 125,000 bank's employees on a daily basis.</li>
                        </ul>
                    </div>
                </div>
                {/* Needs code improvement */}
                <ul className='sm:hidden p-1'>
                    <li>Initiated and managed the development and implementation of a digital visiting card solution for over 125,000 ICICI employees, significantly reducing reliance on printed cards. This involved coordination with teams of business analyst, developers, designers.</li>
                    <li>In my role as the application owner, I undertook the responsibility of ensuring the maintenance, scalability, new enhancements, and technical support for iSpace—an indispensable application relied upon by a vast user base of over 125,000 bank's employees on a daily basis.</li>
                </ul>
            </div>
        </div>
    )
}

