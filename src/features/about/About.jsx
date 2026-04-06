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
  // Full Tech List (excluding Python for central position)
  const allTechs = [
    { name: "LLM", icon: "https://www.agora.software/wp-content/uploads/2024/08/icon-llm-new.svg" },
    { name: "RAG", icon: "https://static.vecteezy.com/system/resources/previews/042/002/496/non_2x/rag-creative-icon-design-vector.jpg" },
    { name: "Hugging Face", icon: "https://avatars.githubusercontent.com/u/25720743?s=280&v=4" },
    { name: "Ollama", icon: "https://www.drupal.org/files/project-images/ollama-logo.png" },
    { name: "Django", icon: "https://www.svgrepo.com/show/373554/django.svg" },
    { name: "FastAPI", icon: "https://gitlab.com/uploads/-/system/project/avatar/42941426/fastapi.png" },
    { name: "Express.js", icon: "https://static.vecteezy.com/system/resources/thumbnails/060/194/937/small/javascript-programming-language-3d-icon-transparent-background-free-png.png" },
    { name: "React", icon: react_icon },
    { name: "Tailwind", icon: tailwind_icon },
    { name: "PostgreSQL", icon: "https://images.ctfassets.net/6yom6slo28h2/fJUJrqHAzWweaJZvNXgWS/446631a4e2f0cc825292c982c12e173a/postgresql.jpg?w=500&h=324&fl=progressive&q=100&fm=jpg" },
    { name: "MongoDB", icon: "https://www.developer-tech.com/wp-content/uploads/2021/02/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg" },
    { name: "Firebase", icon: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" },
    { name: "Databricks", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpR53ixkfZvuntB9YIbi98vM9YH0vJ9oUi2A&s" },
    { name: "GitHub", icon: "https://as2.ftcdn.net/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg" },
    { name: "n8n", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKiN8RzOvKgUc7WZL621iwbdgIs3YVIyktg&s" },
  ];

  const pythonTech = { 
    name: "Python", 
    icon: "https://img.icons8.com/3d-fluency/1200/python.jpg" 
  };

  // Design tools
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
      <div className="flex flex-col items-start justify-center gap-y-4 p-8 text-textColor xl:gap-y-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center xl:items-start justify-between w-full xl:flex-row gap-12">
          <div className="xl:order-2">
            <img
              src={selvaImage}
              alt="Selvam B"
              className="box-glass border-4 border-white/20 h-64 w-64 xl:h-80 xl:w-80 rounded-full object-cover shadow-2xl shadow-white/10"
            />
          </div>
          <div className="flex flex-col items-center xl:items-start text-center xl:text-start space-y-4 max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white xl:text-7xl drop-shadow-lg leading-tight uppercase tracking-tight">
              Python Developer & <br className="hidden xl:block" /> GenAI Enthusiast
            </h1>
            <p className="text-xl text-white/70 font-medium">
              Hi, I'm Selvam B. A passionate Python & Full Stack Developer <br className="hidden xl:block" />{" "}
              specializing in GenAI and Scalable Solutions. 📍
            </p>
            <div className="pt-4">
              <a
                href={resume}
                download="Selvam_B_Resume.pdf"
                className="px-10 py-4 text-xl font-bold text-black bg-white rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 inline-block"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>

        <div className="xl:flex xl:gap-x-24 xl:flex-row w-full mt-10">
          <div className="order-1 space-y-6 text-center xl:w-1/2 p-8 glass rounded-2xl">
            <div>
              <h2 className="text-2xl font-bold text-white xl:text-3xl mb-6">
                About me
              </h2>
              <p className="text-lg font-medium leading-relaxed text-white/70 xl:text-xl text-justify mb-8">
                I am a Python Developer with Python as my core strength, complemented by experience in web development, mobile application development, and Generative AI. I have hands-on experience building full-stack and AI-powered applications using React.js, REST APIs, and databases, focusing on scalable and efficient solutions.
              </p>

              {/* Highlights/Certifications to fill space */}
              <div className="space-y-4 text-start">
                <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">
                  Certifications & Highights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => {
                    const icons = ["🏆", "📊", "🤖", "🐍", "🌐"];
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-xl">{icons[index % icons.length]}</span>
                        <span className="text-xs font-semibold text-white/80 leading-snug">{cert}</span>
                      </div>
                    );
                  })}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors border-dashed border-white/20">
                    <span className="text-xl">🚀</span>
                    <span className="text-xs font-semibold text-white/80 leading-snug">GenAI Focused & Scalable Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 p-6 glass rounded-2xl max-sm:mt-8 flex flex-col items-center">
            <h3 className="text-center text-2xl font-bold text-white uppercase tracking-wider mb-8">
              Tech Stack
            </h3>
            
            {/* Radial Tech Stack */}
            <div className="relative h-[480px] w-full flex items-center justify-center overflow-visible">
              {/* Central Python Icon */}
              <div className="group relative z-10">
                <img
                  className="h-40 w-40 cursor-pointer rounded-full object-cover transition-all duration-500 bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-110"
                  src={pythonTech.icon}
                  alt={pythonTech.name}
                />
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-sm font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {pythonTech.name}
                </div>
              </div>

              {/* Rotating Orbital Container */}
              <div className="absolute inset-0 flex items-center justify-center animate-orbit">
                {allTechs.map((tech, i) => {
                  const angle = (i / allTechs.length) * 2 * Math.PI;
                  const radius = window.innerWidth < 640 ? 150 : 230; // Slightly increased for legibility
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div 
                      key={i} 
                      className="group absolute transition-all duration-700 hover:z-20"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <img
                        className="h-16 w-16 cursor-pointer rounded-full object-cover transition-all duration-500 bg-white/5 shadow-inner shadow-white/5 hover:scale-125 hover:bg-white/10 animate-counter-orbit"
                        src={tech.icon}
                        alt={tech.name}
                      />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none animate-counter-orbit">
                        {tech.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full pt-8 border-t border-white/5 mt-4">
              <h4 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em] text-center mb-6">
                Design Tools
              </h4>
              <div className="flex items-center justify-center gap-5 flex-wrap">
                {designTools.map((item, i) => (
                  <img
                    className="h-14 w-14 cursor-pointer rounded-full p-2 transition-all duration-500 border border-white/10 bg-white/5 shadow-inner shadow-white/5 hover:scale-110 hover:border-white/30"
                    key={i}
                    src={item}
                    alt="design-tool"
                  />
                ))}
              </div>
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
