import React, { useContext, useEffect, useState } from "react";
import Resume from "../asset/RamanSoni_resume.pdf";

import {
  PiBookOpenTextDuotone,
  PiBriefcaseDuotone,
  PiEnvelopeOpenDuotone,
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
} from "react-icons/pi";
import RefContext from "../contexts/GlobalContext";
import DarkModeButton from "./DarkModeButton";
import gsap from "gsap";

function Home() {
  const {
    isDarkMode,
    educationRef,
    workRef,
    skillsRef,
    contactRef,
    projectRef,
  } = useContext(RefContext);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Wave emoji wiggle
  const [isWiggling, setIsWiggling] = useState(true);

  const startWiggleAnimation = () => {
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 1000); // Reset the animation after 1 second
  };


  return (
    <div className="my-4">
      <h1 className=" text-6xl my-2 font-bold">Raman Soni</h1>
      <p className="  m-1 text-center sm:text-left   ">
        Hey <div className={` inline-block animate-emoji ${isWiggling ? 'wiggle' : ''}`} onClick={startWiggleAnimation} > &#x1f44b;</div>, I am open to work.
      </p>

      <div className=" my-10 hidden sm:block ">
        <ul className="">
          <li>
            <button
              onClick={() => scrollToSection(workRef)}
              className={`${
                isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
              } `}
            >
              EXPERIENCE
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className={`${
                isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
              } `}
            >
              SKILLS
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(educationRef)}
              className={`${
                isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
              } `}
            >
              EDUCATION
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(projectRef)}
              className={`${
                isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
              } `}
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(contactRef)}
              className={`${
                isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
              } `}
            >
              CONTACT ME
            </button>
          </li>
        </ul>
      </div>

      <div className="flex justify-between sm:block w-full text-3xl sm:text-2xl mt-5 text-center sm:item-left ">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/rmnsoni/"
          className={` homebar-icon group transition-all ${
            isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
          }  hover:text-4xl sm:flex-row flex-col`}
        >
          <PiLinkedinLogoDuotone />

          <p className="sm:pl-2 text-sm sm:group-hover:text-lg "> Linkedin </p>
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/RmnSoni"
          className={` homebar-icon group transition-all ${
            isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
          }  hover:text-4xl sm:flex-row flex-col`}
        >
          <PiGithubLogoDuotone />
          <p className="sm:pl-2 text-sm sm:group-hover:text-lg  "> GitHub </p>
        </a>

        <a
          rel="noreferrer"
          href="mailto:soni.raman.1602@gmail.com"
          className={` homebar-icon group transition-all ${
            isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
          }  hover:text-4xl sm:flex-row flex-col`}
        >
          <PiEnvelopeOpenDuotone />
          <p className="sm:pl-2 text-sm sm:group-hover:text-lg  "> Email Me</p>
        </a>

        <a
          rel="noreferrer"
          href="https://blog.ramansoni.in"
          className={` homebar-icon group transition-all ${
            isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
          }  hover:text-4xl sm:flex-row flex-col`}
        >
          <PiBookOpenTextDuotone />
          <p className="sm:pl-2 text-sm sm:group-hover:text-lg "> My Blogs </p>
        </a>

        <a
          rel="noreferrer"
          href={Resume}
          download="RamanSoniResume.pdf"
          className={` homebar-icon group transition-all ${
            isDarkMode ? "hover:text-teal-400" : "hover:text-teal-700"
          }  hover:text-4xl sm:flex-row flex-col`}
        >
          <PiBriefcaseDuotone />
          <p className="sm:pl-2 text-sm sm:group-hover:text-lg  ">
            {" "}
            My Resume{" "}
          </p>
        </a>
      </div>
      <DarkModeButton />
    </div>
  );
}
export default Home;
