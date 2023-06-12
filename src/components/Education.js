import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'



const courses = [
    "Data Structures and Alogirthms", "Operating Systems", "Computer Organisation", "Information and Database Systems", "Data Science I - Statistics", "Data Science II - Probablity", "Data Science III - Machine Learning", "Statistical Learning", "Data Handling and Visualization", "Special Topics in Deep Neural Networks",
];


function Education() {

    const listRef = useRef([]);
    const sectionRef = useRef();
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(listRef.current,
                        { opacity: 0, x: 10, },
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
        ;
    }, []);


    const arrayCourseItems = courses.map((course, index) =>
        <div key={index} ref={el => (listRef.current[index] = el)} className=' transform m-1 inline-block hover:bg-slate-700 border-teal-700 opacity-0 border-2 rounded-full p-1  hover:text-teal-500 '>{course}</div>)

    return (
        <div className='group/section'>
            {/* One Item in Education, copy this and make new when more*/}
            <section className=''>
                <h3 className='text-2xl group-hover/section:text-teal-500 ' > Education</h3>
                <div className='flex group'>
                    <div className='flex-none p-1 m-1 text-slate-500'>2018-2022</div>
                    <div className='flex-1 m-1 p-1'>
                        <p className='flex justify-between sm:pr-20 '>
                            <span className='text-xl group-hover:font-semibold text-teal-500'> Bachelor of Technology </span>
                            <span className='text-slate-500 hover:text-teal-600'> CGPA: 7.51/10</span>
                        </p>
                        <p>Indian Institute of Technology, Mandi </p>
                    </div>
                </div>
            </section>
            <section ref={sectionRef} className=''  >
                <div className='text-2xl pt-1  group-hover/section:text-teal-500   '> Coursework </div>
                <ul className='py-1'>{arrayCourseItems}</ul>
            </section>
            <br />
        </div>
    )
}

export default Education