import gsap from 'gsap';
import React, { useEffect, useRef, useContext } from 'react'
import RefContext from '../contexts/GlobalContext';


const courses = [
    "Data Structures and Alogirthms",  "Operating Systems", "Computer Organisation", "Information and Database Systems", "Data Science I - Statistics", "Data Science II - Probablity", "Data Science III - Machine Learning", "Statistical Learning", "Data Handling and Visualization", "Special Topics in Deep Neural Networks","Computer Graphics and Game Design" ,];

function Education() {

    const { educationRef ,  isDarkMode } = useContext(RefContext);
    const listRef = useRef([]);
    const sectionRef = useRef();

    
    useEffect(() => {

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(listRef.current,
                        { opacity: 0, x: 30, },
                        { x: 0, opacity: 1, stagger: 0.08, ease: "elastic.out(1,0.5)", duration: 0.5, }
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


    const arrayCourseItems = courses.map((course, index) =>
        <div key={index} ref={el => (listRef.current[index] = el)} className={`text-base m-1 inline-block ${isDarkMode? ' hover:bg-teal-700 border-teal-600':'hover:bg-slate-500 border-teal-800' } hover:bg-opacity-20 opacity-0 border-2 rounded-full p-1 `} >{course}</div>)

    return (
        <div className='group/section' ref={educationRef}>
            {/* One Item in Education, copy this and make new when more*/}
            <section className=''>
                <h3 className={` ${ isDarkMode ? 'group-hover/section:text-teal-500' : 'group-hover/section:text-teal-800' } text-2xl `} > Education</h3>
                <div className='flex group'>
                    <div className='flex-none p-1 m-1 text-slate-500'>2018-2022</div>
                    <div className='flex-1 m-1 p-1'>
                        <p className='flex justify-between sm:pr-20 '>
                            <span className={` group-hover:font-semibold ${ isDarkMode ? 'group-hover/section:text-teal-500' : 'group-hover/section:text-teal-800' }`}> Bachelor of Technology </span>
                            <span className='text-slate-500 hover:text-teal-600'> CGPA: 7.51/10</span>
                        </p>
                        <p>Indian Institute of Technology, Mandi </p>
                    </div>
                </div>
            </section>

            <section>
                <h className={` ${ isDarkMode ? 'group-hover/section:text-teal-500' : 'group-hover/section:text-teal-700' } text-2xl `} > Coursework </h>
                <section ref={sectionRef}>
                    <ul className='py-1'>{arrayCourseItems}</ul>
                </section></section>
            <br />
        </div>
    )
}

export default Education;