import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div className='py-4 group/section'>
                <h2 className='group-hover/section:text-teal-500 text-2xl ' > Work Experience</h2>
                <div className='flex group' >
                    <div className='text-slate-400 min-w-fit m-1 p-1'> Aug - Dec 2022</div>
                    <div className='m-1 p-1' >
                        <h3 className='text-teal-500 text-xl group-hover:font-semibold' >Management Trainee</h3>
                        <a className=" hover:text-teal-500" rel="noreferrer" href='https://www.icicibank.com/' target='_blank'> ICICI Bank Ltd.</a>
                        <ul className=''>
                            <li>Initiated and managed the development and implementation of a digital visiting card solution  for over 125,000 ICICI employees, significantly reducing reliance on printed cards. This involved coordination with teams of business analyst, developers, designers.</li>
                            <li>In my role as the application owner, I undertook the responsibility of ensuring the maintenance, scalability, new enhancements, and technical support for iSpace—an indispensable application relied upon by a vast user base of over 125,000 banking professionals on a daily basis.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
