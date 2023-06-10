import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div className='py-4'>
                <h2 className='sm:hidden text-2xl ' > Work Experience</h2>
                <div className='flex group' >
                    <div className='text-slate-400 min-w-fit m-1 p-1'> Aug - Dec 2022</div>
                    <div className='m-1 p-1' >
                        <h3 className='text-teal-500 text-xl group-hover:font-semibold' >Management Trainee</h3>
                        <a className=" hover:text-teal-500" rel="noreferrer" href='https://www.icicibank.com/' target='_blank'> ICICI Bank Ltd.</a>
                        <ul className=''>
                            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li> Non neque saepe ab ipsa aliquid harum fuga velit expedita.</li>
                            <li> Quis, ab. Quisquam saepe voluptate odio suscipit? Quod qui aut accusantium sunt?</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
