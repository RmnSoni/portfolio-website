import { gsap } from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import RefContext from '../context/RefContext';
import { skills } from '../asset/ListsAddables';


function Skills() {
    const { skillsRef } = useContext(RefContext);
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
                    console.log("hila")
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
            <div key={index} ref={(el) => (listRef1.current[index] = el)} className="m-1 inline-block hover:bg-slate-700 opacity-1 border-teal-700 border-2 rounded-full p-1  hover:text-teal-500 ">{skill}</div>)
    })

    return (
        <div className='group' ref={skillsRef}>

            <h2 className='py-1 text-2xl group-hover:text-teal-500  '>Skills</h2>

            <ul className='m-1' ref={sectionRef}>{arraySkillItems}</ul>

            <br />

        </div>
    )
}

export default Skills