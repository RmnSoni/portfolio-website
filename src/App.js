import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import { useEffect, useState  } from "react";
import './styles/styles.css'


function App() {

  return (
    <div className="h-screen w-screen   scrollable  overflow-auto sm:overflow-hidden 
    text-lg bg-slate-900  font-nunito    text-slate-300 sm:flex">

      {/* <div className="h-40 -z-1 w-40 float" style={{background: "radial-gradient(circle , rgba(200,200,200,0.8),transparent 60%)"}}/> */}

      <div className=" sm:flex-none  w-full sm:w-1/3 px-10 pt-10">
      
      
        <Home />
      
      
      </div>

      <div className="sm:flex-auto w-full scrollable overflow-y-auto sm:w-1/2 p-10">
        <div className=' hidden h-10vh sm:block' ></div>

        <About />
        <Work />
        <Projects />
        <Contact />

        <div className="text-sm text-slate-500">
        This website's theme is loosely derived from
        <a className=" hover:text-teal-400 " href="https://v4.brittanychiang.com/" target="_blank" > Britanny Chang </a> 
        and made in Visual Studio Code using React and TailwindCSS
        </div>
      </div>
      <div className="cursor-gradient"></div>
    </div>
  );
}




export default App;
