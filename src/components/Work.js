import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div className='py-4'>
                <h2 className='sm:hidden text-xl ' > Work Experience</h2>
                <div >
                    <div className='flex '>
                        <span className='flex-1'><h3>Management Trainee</h3></span>
                        <span className=' flex-1 text-right sm:pr-20 ' > 
                        <a className=" hover:text-teal-400 " href='https://www.icicibank.com/' target='_blank' >ICICI Bank Ltd.</a></span>
                    </div>
                    <p className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Non neque saepe ab ipsa aliquid harum fuga velit expedita.</p>
                    <p>  Quis, ab. Quisquam saepe voluptate odio suscipit? Quod qui aut accusantium sunt?</p>
                </div>
            </div>
        )
    }
}
