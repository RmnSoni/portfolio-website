import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import { useEffect, useState  } from "react";
import './styles/styles.css'
import Skills from "./components/Skills";


function App() {

  const hi ="sda";
  return (
    <div className="h-screen w-screen   scrollable  overflow-auto sm:overflow-hidden 
    text-lg bg-slate-900  font-nunito    text-slate-300 sm:flex">

      <div className=" sm:flex-none   w-full sm:w-2/5 px-10 pt-10"> <Home /></div>

      <div className="sm:flex-auto w-full scrollable overflow-y-auto sm:w-1/2 p-10">
        <About />
        <Work />
        <Skills/>
        <Projects />
        <Contact />
        <div className="text-sm text-slate-500">
        {/* This website's theme is loosely derived from <a className=" hover:text-teal-400 " href="https://v4.brittanychiang.com/" target="_blank" > Britanny Chang </a> and made in Visual Studio Code using React and TailwindCSS */}
        </div>
      </div>
      <div className="cursor-gradient"></div>
     <div></div>
    </div>

  );
}




export default App;
