import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowCircleUp } from "react-icons/fa";
import RefContext from "./context/RefContext";




gsap.registerPlugin(ScrollTrigger);


function App() {
  const { aboutRef } = useContext(RefContext)
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current; // Create a local variable to hold the current ref value

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop;

      if (scrollPosition > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{

    const header=headerRef.current;
    const baaki = scrollContainerRef.current;

    gsap.fromTo(header,
      {
        opacity:0, x:-500
      },{
        x:0 , opacity:1, duration:0.5, ease:'power2.out'
      });

      gsap.fromTo(baaki,
        {
          opacity:0, x:500
        },{
          x:0 , opacity:1, duration:0.5, ease:'power2.out'
        });

  },[]);


  // const handleScrollToTop = () => {
  //   scrollContainerRef.current.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  // hover effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector('.cursor-gradient');
      const x = event.clientX;
      const y = event.clientY;
      cursor.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(45,212,192,0.15), rgba(0, 0, 0, 0) 50% )`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className=" h-screen w-screen fixed scrollable  overflow-auto sm:overflow-hidden sm:text-lg bg-slate-900  font-nunito    text-slate-200 sm:flex">

      <div className="cursor-gradient"></div>

      <header ref={headerRef} className=" sm:flex-none flex justify-center items-center w-full sm:w-2/5 p-4 sm:p-10 "> <Home /> </header>

      <div ref={scrollContainerRef} className="sm:flex-auto w-full scrollable overflow-auto sm:w-1/2 mb-10 sm:m-0 p-4 sm:p-10">

        <main>
          <About />
          <Work />
          <Skills />
          <Education />
          <Projects />
        </main>

        <footer>
          <Contact />
          <div className="text-sm group text-slate-500">
            This website's is hosted on <span className="group-hover:text-teal-500">GitHub Pages</span>, made in <span className="group-hover:text-teal-500">Visual Studio Code</span> using <span className="group-hover:text-teal-500"> ReactJS</span>, <span className="group-hover:text-teal-500">TailwindCSS</span> and <span className="group-hover:text-teal-500">GSAP</span> .
          </div>
        </footer>



      </div>
      {showButton && (
        <button onClick={() => scrollToSection(aboutRef)}
          className=" transition-color duration-200 fixed bottom-4 right-4 p-2 text-3xl hover:text-teal-500 hover:text-4xl" ><FaArrowCircleUp />
        </button>)}
    </div>
  );
}


export default App;