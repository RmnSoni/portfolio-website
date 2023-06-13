import { gsap } from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import RefContext from '../context/RefContext';



const skills = [
    "Python",
    "C++",
    "HTML/CSS",
    "TailwindCSS",
    "JavaScript",
    "ReactJS",
]

function Skills() {
    const{ skillsRef } = useContext(RefContext);
    const listRef = useRef([]);


    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(listRef.current,
                        { x: 10, opacity: 0, },
                        { x: 0, opacity: 1, stagger: 0.1, ease: "elastic.out(1,0.5)", duration: 0.5, }
                    );
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(skillsRef.current)

        return () => {
            observer.disconnect();
        };
        ;
    },);


    const arraySkillItems = skills.map((skill, index) => {

        return (
            <div key={index} ref={(el) => (listRef.current[index] = el)} className="m-1 inline-block hover:bg-slate-700 opacity-1 border-teal-700 border-2 rounded-full p-1  hover:text-teal-500 ">{skill}</div>)
    })

    return (
        <div className='group' ref={skillsRef}>

            <h2 className='py-1 text-2xl group-hover:text-teal-500  '>Skills</h2>
            <ul className='py-1'>{arraySkillItems}</ul>

            <br />

        </div>
    )
}

export default Skills