import React from 'react'


const skills = [
    "Python", "C++", "HTML/CSS", "TailwindCSS", "JavaScript", "ReactJS",
]

function Skills() {


    const arraySkillItems = skills.map((skill, index2) =>
        <div key={index2} className='m-1 inline-block hover:bg-slate-700 
    border-teal-700 border-2 rounded-full p-1  hover:text-teal-500 '>
            {skill}</div>)

    return (
        <div>
            <div className='text-2xl sticky top-0 sm:hidden '> Education and Skills </div>


            <br />
            <h2>Skills</h2>
            <ul className='py-1'>{arraySkillItems}</ul>

            <br />
            
        </div>
    )
}

export default Skills