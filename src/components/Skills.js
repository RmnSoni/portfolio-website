import React from 'react'

const courses = [
    "Data Structures and Alogirthms", "Operating Systems",
    "Computer Organisation", "Information and Database Systems",

    "Data Science I - Statistics", "Data Science II - Probablity", "Data Science III - Machine Learning",

    "Statistical Learning", "Data Handling and Visualization", "Special Topics in Deep Neural Networks",
];
const skills = [
    "Python", "C++", "HTML/CSS", "TailwindCSS", "JavaScript", "ReactJS",
]

function Skills() {

    const arrayCourseItems = courses.map((course,index1) =>
        <div key={index1} className='m-1 inline-block hover:bg-slate-700
         border-teal-700 border-2 rounded-full p-1  hover:text-teal-400 '>
            {course}</div>)
    const arraySkillItems = skills.map((skill,index2) =>
        <div key={index2} className='m-1 inline-block hover:bg-slate-700 
    border-teal-700 border-2 rounded-full p-1  hover:text-teal-400 '>
            {skill}</div>)

    return (
        <div>
            <div className='text-2xl sticky top-0 sm:hidden '> Education and Skills </div>



            <h2>Education</h2>
            {/* One Item in Education, copy this and make new when more*/}
            <div className='flex'>
                <div className='flex-none p-1 m-1 text-slate-400'>2018-2022</div>
                <div className='flex-1 m-1 p-1'>
                    <div className='flex justify-between sm:pr-20 '>
                        <p>B.Tech in Electrical Engineering</p>
                        <p className='text-slate-400 hover:text-teal-600'> CGPA: 7.51/10</p>
                    </div>
                    <div>Indian Institute of Technology, Mandi </div>

                </div>
            </div>



            <h2>Skills</h2>
            <ul className='py-1'>{arraySkillItems}</ul>



            <h2>Course Work</h2>
            <ul className='py-1'>{arrayCourseItems}</ul>
        </div>
    )
}

export default Skills