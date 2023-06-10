import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import './styles/styles.css'
import Skills from "./components/Skills";
import Education from "./components/Education";


function App() {

  return (
    <div className="h-screen w-screen   scrollable  overflow-auto sm:overflow-hidden 
    text-lg bg-slate-900  font-nunito   p-4 sm:p-0  text-slate-300 sm:flex">

      <header className=" sm:flex-none flex justify-center items-center  w-full sm:w-2/5 sm:p-10 "> <Home /> </header>

      <div className="sm:flex-auto w-full scrollable overflow-y-auto sm:w-1/2 sm:p-10">
        <main>
          <About />
          <Work />
          <Skills />
          <Education/>
          <Projects />
        </main>
        <footer>
          <Contact />
        </footer>
      </div>

      <div className="text-sm text-slate-500">
        {/* This website's theme is loosely derived from <a className=" hover:text-teal-400 " href="https://v4.brittanychiang.com/" target="_blank" > Britanny Chang </a> and made in Visual Studio Code using React and TailwindCSS */}
      </div>
      <div className="cursor-gradient"></div>
      <div></div>
    </div>

  );
}




export default App;
