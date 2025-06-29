import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import python_icon from "../../assets/icons/python-5.svg";
import oneImage from '../../assets/images/1.jpg';
import resume from '../../assets/images/resume.pdf'; // Path to your resume

// Importing icons for Design Tools
import photoshop_icon from "../../assets/icons/ps_icon.png";
import figma_icon from "../../assets/icons/figma_icon.png";
import canva_icon from "../../assets/icons/canva_icon.svg";

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
    { degree: "MCA", institution: "Bharathiar University - Coimbatore", duration: "2024-2026", grade: "Grade A" },
    { degree: "BCA", institution: "Bishop Heber College - Tiruchirappalli", duration: "2021-2024", grade: "Grade A+" },
    { degree: "HSC", institution: "S.V.V.Hr.Sec.School - Vairichettipalayam", duration: "2020-2021", grade: "83%" },
    { degree: "SSLC", institution: "S.V.V.Hr.Sec.School - Vairichettipalayam", duration: "2018-2019", grade: "74%" },
  ];

  // Experience details
  const experience = [
    {
      jobRole: "Graphics Designer",
      company: "i Way Pickup and Delivery Services -  Tiruchirappalli",
      duration: "Aug 2023 - Feb 2024",
      description: "Worked on branding, social media graphics, and visual content creation for marketing campaigns."
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
              src={oneImage}
              alt="Description of Image"
              className="box border-6 border-accentColor xl:h-[300px] xl:w-[300px] object-cover object-[40%_20%]"
            />
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Full Stack <br /> Web Developer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              <br /> Hi, I'm Selvam B. A passionate Full Stack Web Developer <br />{" "}
              based in TamilNadu,India. 📍
            </h2>
          </div>
        </div>

        <div className="xl:flex xl:gap-x-24 xl:flex-row">
          <div className="order-1 space-y-4 text-center xl:w-1/2">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
              As a Junior Full-Stack Developer, I'm skilled in Django, Python, JavaScript, and React. I build complete web applications with strong backends and responsive frontends. I enjoy collaborating with teams to create efficient, user-friendly solutions.
            </p>
            <div className="mt-8 text-center">
              <a
                href={resume}  // Path to your resume
                download="Selvam_B_Resume"       // Optional: Rename the downloaded file to "Selvam_B_Resume.pdf"
                className="px-6 py-3 text-lg font-semibold text-white bg-accentColor rounded-lg hover:scale-105 hover:shadow-white hover:shadow-md transition-transform"
              >
                Download My Resume
              </a>
            </div>
          </div>

          {/* Tech Stack and Design Tools section combined */}
          <div className="xl:w-1/2">
            <h3 className="my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
              Tech Stack
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack.map((item, i) => {
                return (
                  <img
                    className="h-14 w-14 cursor-pointer rounded-full p-2 shadow-md shadow-accentColor"
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>

            {/* Design Tools section below the Tech Stack */}
            <h3 className="my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
              Design Tools
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {designTools.map((item, i) => {
                return (
                  <img
                    className="h-14 w-14 cursor-pointer rounded-full p-2 shadow-md shadow-accentColor"
                    key={i}
                    src={item}
                    alt="design-tool"
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Education and Experience section */}
        <div className="flex flex-col xl:flex-row xl:gap-x-24 mt-12 xl:mt-24">
          {/* Education Section */}
          <div className="xl:w-1/2">
            <h3 className="my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white p-4 rounded-lg hover:scale-105 hover:shadow-white hover:shadow-md transition-transform"
                >
                  <h4 className="text-2xl font-bold">{edu.degree}</h4>
                  <p className="text-xl text-accentColor">{edu.institution}</p>
                  <p className="text-sm">{edu.duration}</p>
                  <p className="text-xl text-accentColor">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="xl:w-1/2">
            <h3 className="my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl">
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white p-4 rounded-lg hover:scale-105 hover:shadow-white hover:shadow-md transition-transform"
                >
                  <h4 className="text-2xl font-bold">{exp.jobRole}</h4>
                  <p className="text-xl text-accentColor">{exp.company}</p>
                  <p className="text-sm">{exp.duration}</p>
                  <p className="text-base">{exp.description}</p>
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
