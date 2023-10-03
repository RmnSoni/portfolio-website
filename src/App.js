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
import RefContext from "./contexts/GlobalContext";
import MouseGradient from "./components/MouseGradient";




gsap.registerPlugin(ScrollTrigger);


function App() {

  const { aboutRef, isDarkMode } = useContext(RefContext)
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const [showButton, setShowButton] = useState(false);



  //Scroll To Top Logic---------------------------------------------
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
//--------------------------------------------------------------------

//Whole site Animation-------------------------------------------------
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
  //-----------------------------------------

  return (
    <div className={` h-screen w-screen fixed scrollable  overflow-auto md:overflow-hidden md:text-lg font-inter ${ isDarkMode ? 'bg-slate-900 text-slate-200' :'bg-slate-300 text-slate-900' } sm:flex ` }>

     <MouseGradient />
      <header ref={headerRef} className=" md:flex-none flex justify-center items-center w-full md:w-1/3 py-4 md:py-20 md:pl-20"> <Home /> </header>

      <div ref={scrollContainerRef} className="md:flex-auto w-full scrollable overflow-auto md:w-1/2 mb-10 md:m-0 p-4 md:p-20">

        <main>
          <About />
          <Work />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>

        <footer>
          
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