import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'


/*  Project template, add it in the array below
{  
  id:0,
  title:"placeholder project",
  description: "yaha pe peroject ak description liklhna hai bohot saara",
  description2: "incase kuch second para me likhna ho",
  technologies: ["tech 1",'tech2' ,'tech3'],
  demolink:'',
  githublink:'',  
} */


const projectsArray = [
  {
    id: 1,
    title: "1st title",
    description: "yaha pe peroject ak descri[ption liklhna hai bohot saara",
    description2: "incase kuch second para me likhna ho",
    technologies: [ "tech 1" ,'tech2' ,  'tech3' ],
    demolink: 'https://www.google.com',
    githublink: 'https://github.com',
  },
  {
    id: 2,
    title: "2o title",
    description: " iska second para khali hai",
    description2: "",
    technologies: ["tech 4" , 'tech5', 'tech6' ],
    demolink: 'https://www.google.com',
    githublink: 'https://github.com',
  },
  {
    id: 3,
    title: "no title",
    description: "yaha pe peroject ak descri[ption liklhna hai bohot saara",
    description2: "incase kuch second para me likhna ho",
    technologies: ["tech 1" , 'tech2' ,'tech3' ],
    demolink: 'https://www.google.com',
    githublink: 'https://github.com',
  }
];

export default function Projects() {


  const listRef = useRef([]);

  useEffect(() => {

    console.log(listRef)
      const observerOptions = {
          root: null,
          rootMargin: '10px',
          threshold: 0.2,

      };

      const observerCallback = (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  gsap.fromTo(listRef.current,
                      { opacity: 0, x: 20, },
                      { x: 0, opacity: 1, stagger: 0.5, ease: "elastic.out(1,1)", duration: 0.5, }
                  );
              }
          });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      listRef.current.forEach((item) => {
          observer.observe(item);
      });

      return () => {
          observer.disconnect();
      };
      ;
  }, []);



  return (


    <div className='py-4 group/section'>
      <h2 className='text-2xl group-hover/section:text-teal-500'>Projects</h2>
      {projectsArray.map((projectelement,index) => (
        <div key={index} ref={el=>(listRef.current[index]=el)} className='group m-1 p-1 hover:border-slate-700 border rounded-xl border-slate-900 '>
          <h3 className="text-xl group-hover:font-semibold  text-teal-500" > {projectelement.title} </h3>
          <p>{projectelement.description}</p>
          <p>{projectelement.description2}</p>
          <ul>{projectelement.technologies.map((item,index2) => <span key={index2} className="m-1 inline-block 
          transition duration-1000
           group-hover:translate-x-1 hover:bg-slate-700 border-teal-700 border-2 rounded-full p-1 hover:text-teal-400" >{item}</span>)}</ul>
          <a target='_blank' rel='noreferrer' href={projectelement.demolink} >See Demo</a>
          <a target='_blank' rel='noreferrer' href={projectelement.githublink}>Github Repository</a>
        </div>
      ))
      }
      <p className='text-slate-400' > To see my other projects please checkout <a target='_blank' rel='noreferrer' href='https://github.com/RmnSoni' className='hover:text-teal-500' >my github account</a>.</p>


    </div>
  )
}
