/*  Project template, add it in the array below
{  
  id:0,
  title:"placeholder project",
  description: "yaha pe peroject ak description liklhna hai bohot saara",
  description2: "incase kuch second para me likhna ho",
  technologies: ["tech 1",'tech2' ,'tech3'],
  demolink:'',
  githublink:'',  
} 

Work Experience 
  {
    jobTitle: "Frontend Developer Intern",
    company: "Dyord AItech Pvt. Ltd.",
    companyLink: "",
    dates: "",
    description1: "",
    description2: ""
  },

*/

export const projectsArray = [
  {
    title: "3-Band Audio Equalizer",
    description:
      "Real-time VST equalizer plugin enhances live audio, reducing noise and boosting voices for meetings and games, perfect for improving quality in modest microphone setups. ",
    description2:
      "Light weight UI with Spectrum Analyzer and Response Curve with simple noise reduction and voice enhancement made with modern C++ using  DSP from JUCE framework.",
    technologies: ["C++", "JUCE"],
    demolink: "",
    githublink: "https://github.com/RmnSoni/3BandEQ",
  },

  {
    title: "Sharespeare",
    description:
      "A social media platform for sharing quotes and poems with the world.",
    description2:
      "A MERN stack application with features like liking post, commenting, sharing, connecting and messaging.",
    technologies: [
      "ReactJS",
      "MaterialUI",
      "Redux",
      "MongoDB",
      "NodeJs",
      "Express",
    ],
    demolink: "https://sharespeare.vercel.app/",
    githublink: "https://github.com/RmnSoni/social-media-app",
  },

  {
    title: "Blog Platform",
    description:
      "A portfolio cum personal blog platform for a PhD. scholar, you can see his current usage at the demo.",
    description2:
      "A firebase based app that can have editable portfolio content and generates blog from markdown files uploaded by the user. ",
    technologies: ["ReactJS", "Tailwind", "Firebase", "Firestore"],
    demolink: "https://www.kushalsoni.in/",
    githublink: "https://github.com/RmnSoni/blogapp",
  },
];

export const skills = [
  "Python",
  "C++",
  "HTML/CSS",
  "TailwindCSS",
  "JavaScript",
  "ReactJS",
];

export const workExperienceList = [
  {
    jobTitle: "Assossiate Solution Leader",
    company: "Brane Enterprises Pvt. Ltd.",
    companyLink: "https://www.braneenterprises.com/",
    dates: "Jan 2024 - Present",
    description1: "",
    description2: "",
  },

  {
    jobTitle: "Frontend Developer Intern",
    company: "Dyord AItech Pvt. Ltd.",
    companyLink: "https://dyord.com/",
    dates: "Sep 2023 - Nov 2023",
    description1:
      "Worked for a pre-production project at a startup, specializing in ReactJS, Redux, and Tailwind CSS to create responsive and user-friendly web interfaces.",
    description2: "",
  },

  {
    jobTitle: "Management Trainee",
    company: "ICICI Bank Ltd.",
    companyLink: "https://www.icicibank.com/",
    dates: "Aug 2022 - Dec 2022",
    description1:
      "Initiated and managed the development and implementation of a digital visiting card solution for over 125,000 ICICI employees, significantly reducing reliance on printed cards. This involved coordination with teams of business analyst, developers, designers.",
    description2:
      "In my role as the application owner, I undertook the responsibility of ensuring the maintenance, scalability, new enhancements, and technical support for iSpace—an indispensable application relied upon by a vast user base of over 125,000 bank's employees on a daily basis.",
  },
];
