import { gsap } from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import RefContext from '../contexts/GlobalContext';
import { skills } from '../asset/ListsAddables';


function Skills() {
    const { skillsRef ,isDarkMode } = useContext(RefContext);
    const listRef1 = useRef([]);
    const sectionRef = useRef();

    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    gsap.fromTo(listRef1.current,
                        { x: 10, opacity: 0, },
                        { x: 0, opacity: 1, stagger: 0.1, ease: "elastic.out(1,0.5)", duration: 0.5, }
                    );
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        observer.observe(sectionRef.current)

        return () => {
            observer.disconnect();
        };
    }, []);


    const arraySkillItems = skills.map((skill, index) => {

        return (
            <div key={index} ref={(el) => (listRef1.current[index] = el)} className={` m-1 text-base inline-block ${isDarkMode? ' hover:bg-teal-700 border-teal-600':'hover:bg-slate-500 border-teal-800' } hover:bg-opacity-20 opacity-0 border-2 rounded-full p-1  `}>{skill}</div>)
    })

    return (
        <div className='group' ref={skillsRef}>

            <h2 className={` ${ isDarkMode ? 'group-hover:text-teal-500' : 'group-hover:text-teal-800' } text-2xl `} >Skills</h2>

            <ul className='m-1' ref={sectionRef}>{arraySkillItems}</ul>

            <br />

        </div>
    )
}

export default Skills