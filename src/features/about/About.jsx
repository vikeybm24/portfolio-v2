import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import python_icon from "../../assets/icons/python-5.svg";
import selvaImage from '../../assets/images/selva.jpg';
import resume from '../../assets/images/resume.pdf'; // Path to your resume

// Importing icons for Design Tools
import photoshop_icon from "../../assets/icons/ps_icon.png";
import figma_icon from "../../assets/icons/figma_icon.png";
import canva_icon from "../../assets/icons/canva_icon.svg";

import best_performance from "../../assets/images/Best_per_cet.jpeg";
import sem_top from "../../assets/images/Sem_1_top.jpeg";

function About() {
  const techStack = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    tailwind_icon,
    python_icon,
  ];

  // Design tools (not part of the tech stack but displayed similarly)
  const designTools = [
    photoshop_icon,
    figma_icon,
    canva_icon,
  ];

  // Education details
  const education = [
    { degree: "MCA", institution: "Bharathiar University - Coimbatore", duration: "2024-2026", grade: "80%" },
    { degree: "BCA", institution: "Bishop Heber College - Tiruchirappalli", duration: "2021-2024", grade: "80%" },
    { degree: "HSC", institution: "S.V.V.Hr.Sec.School - Vairichettipalayam", duration: "2020-2021", grade: "83%" },
    { degree: "SSLC", institution: "S.V.V.Hr.Sec.School - Vairichettipalayam", duration: "2018-2019", grade: "74%" },
  ];

  // Experience details
  const experience = [
    {
      jobRole: "Data Engineer Intern",
      company: "Breakthru.ai, Coimbatore",
      duration: "Jan 2026 – Present",
      description: "Developed UI components for telecom monitoring systems (RAMS), integrated AI models for financial analytics in Databricks, and contributed to responsive company website development."
    },
    {
      jobRole: "Graphics Designer",
      company: "i Way Pickup and Delivery Services - Tiruchirappalli",
      duration: "Aug 2023 - Feb 2024",
      description: "Created social media campaigns and marketing content, improving audience engagement through creative design strategies."
    }
  ];

  // Certifications
  const certifications = [
    "Meta Full Stack Developer Certification",
    "Databricks: Data Analyst / Engineer Associate",
    "Generative AI Fundamentals",
    "NPTEL: Programming, DSA Using Python",
    "NPTEL: Introduction To Internet Of Things"
  ];

  // Achievements
  const achievements = [
    {
      title: "Agri Tech Hardware Hackathon",
      detail: "Honorable Mention (2026)",
      image: null
    },
    {
      title: "Academic Excellence",
      detail: "Top Performer in Semester Examinations",
      image: best_performance
    },
    {
      title: "First Place",
      detail: "Ranked 1st in Semester Analytics",
      image: sem_top
    }
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Selvam B | About</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className="xl:order-2">
            <img
              src={selvaImage}
              alt="Selvam B"
              className="box-glass border-4 border-white/20 object-cover object-[50%_45%] shadow-2xl shadow-white/10"
            />
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl drop-shadow-lg">
              Python Developer & <br /> GenAI Enthusiast
            </h1>
            <h2 className="text-xl max-sm:hidden text-white/80">
              <br /> Hi, I'm Selvam B. A passionate Python & Full Stack Developer <br />{" "}
              specializing in GenAI and Scalable Solutions. 📍
            </h2>
          </div>
        </div>

        <div className="xl:flex xl:gap-x-24 xl:flex-row w-full mt-10">
          <div className="order-1 space-y-4 text-center xl:w-1/2 p-6 glass rounded-2xl">
            <h2 className="text-2xl font-semibold text-white xl:text-3xl">
              About me
            </h2>
            <p className="text-lg font-medium leading-loose text-white/70 xl:text-xl text-justify">
              I am a Python Developer with Python as my core strength, complemented by experience in web development, mobile application development, and Generative AI. I have hands-on experience building full-stack and AI-powered applications using React.js, REST APIs, and databases, focusing on scalable and efficient solutions.
            </p>
            <div className="mt-8 text-center">
              <a
                href={resume}
                download="Selvam_B_Resume"
                className="px-8 py-3 text-lg font-bold text-black bg-white rounded-full hover:scale-105 hover:shadow-lg hover:shadow-white/25 transition-all duration-300 inline-block"
              >
                Download My Resume
              </a>
            </div>
          </div>

          <div className="xl:w-1/2 p-6 glass rounded-2xl max-sm:mt-8">
            <h3 className="my-4 text-center text-lg font-semibold text-white underline-offset-8 max-sm:underline xl:text-3xl">
              Tech Stack
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3 flex-wrap">
              {techStack.map((item, i) => (
                <img
                  className="h-14 w-14 cursor-pointer rounded-full p-2 transition-all duration-500 border border-white/10 bg-white/5 shadow-inner shadow-white/5"
                  key={i}
                  src={item}
                  alt="tech-stack"
                />
              ))}
            </div>

            <h3 className="my-8 text-center text-lg font-semibold text-white underline-offset-8 max-sm:underline xl:text-3xl">
              Design Tools
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3 flex-wrap">
              {designTools.map((item, i) => (
                <img
                  className="h-14 w-14 cursor-pointer rounded-full p-2 transition-all duration-500 border border-white/10 bg-white/5 shadow-inner shadow-white/5"
                  key={i}
                  src={item}
                  alt="design-tool"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12 p-4">
          {/* Education Section */}
          <div className="p-8 glass rounded-3xl">
            <h3 className="mb-6 text-center text-xl font-bold text-white underline-offset-8 xl:text-4xl uppercase tracking-widest">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 text-white p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-lg text-white/80">{edu.institution}</p>
                  <p className="text-sm text-white/50">{edu.duration}</p>
                  <p className="text-lg font-mono mt-2">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="p-8 glass rounded-3xl">
            <h3 className="mb-6 text-center text-xl font-bold text-white underline-offset-8 xl:text-4xl uppercase tracking-widest">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 text-white p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold">{exp.jobRole}</h4>
                  <p className="text-lg text-white/80">{exp.company}</p>
                  <p className="text-sm text-white/50">{exp.duration}</p>
                  <p className="text-sm mt-3 leading-relaxed text-white/60">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider >
  );
}

export default About;
