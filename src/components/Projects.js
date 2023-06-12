import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import RefContext from '../context/RefContext';
import { projectsArray } from './ProjectList';


export default function Projects() {

  const {projectRef} = useContext(RefContext);
  const listRef = useRef([]);
  
  
  useEffect(() => {

    const observerOptions = {
      root: null,
      rootMargin: '-5px',
      threshold: 0.0,

    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(listRef.current,
            { opacity: 0, x: 100, },
            { x: 0, opacity: 1, stagger: 0.3, ease: "elastic.out(1,0.5)", duration: 0.7, }
          );
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(projectRef.current)

    return () => {
      observer.disconnect();
    };
    ;
  }, );


//----------------------------------------------------------------------------------
  return (


    <div className='py-4 group/section' ref={projectRef}>

      <h2 className='text-2xl group-hover/section:text-teal-500'>Projects</h2>
      {projectsArray.map((projectelement, index) => (

        <div key={index} ref={el => (listRef.current[index] = el)} className=' group opacity-0 m-1 p-1 hover:border-slate-700 border rounded-xl border-slate-900 '>

          <h3 className="text-xl group-hover:font-semibold  text-teal-500" > {projectelement.title}  </h3>

          <div className='flex justify-between transition duration-500'>

            <div>
              <p>{projectelement.description}</p>
              <p>{projectelement.description2}</p>
              <ul>{projectelement.technologies.map((item, index2) => <span key={index2} className="m-1 inline-block 
          transition duration-500
           group-hover:translate-x-1 hover:bg-slate-700 border-teal-700 border-2 rounded-full p-1 hover:text-teal-400" >{item}</span>)}</ul>
            </div>

            <div className='text-center opacity-0 flex-col flex  group-hover:opacity-100 transition duration-500 '>

              {projectelement.demolink ? <a target='_blank' rel='noreferrer' href={projectelement.demolink} className=" transition duration-500 group-hover:-translate-x-1 m-1 p-1 rounded-full font-semibold text-slate-400  border-teal-700 border-2  hover:bg-teal-600 hover:text-slate-800 hover:border-slate-700">
                Demo</a >
                : ""}


              {projectelement.githublink ? <a className=" transition duration-500 group-hover:-translate-x-1 m-1 p-1 rounded-full font-semibold text-slate-400  border-teal-700 border-2  hover:bg-teal-600 hover:text-slate-800 hover:border-slate-700" target='_blank' rel='noreferrer' href={projectelement.githublink}> Github </a> : ""}


            </div></div></div>))}
      <p className='text-slate-400' > To see my other projects please checkout <a target='_blank' rel='noreferrer' href='https://github.com/RmnSoni' className='hover:text-teal-500' >my github account</a>.</p>


    </div>
  )
}
