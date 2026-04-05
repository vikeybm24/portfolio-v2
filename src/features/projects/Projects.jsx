import { Helmet, HelmetProvider } from "react-helmet-async";
import { project } from "./project";

function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selvam B | Projects</title>
      </Helmet>
      <div className="bg-mainBg p-8 min-h-screen">
        <h1 className="pb-10 text-4xl font-bold text-white text-center md:text-left tracking-tight">
          Stuff I&apos;ve Built So Far
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {project.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl glass border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white group-hover:text-accentColor transition-colors">
                  {item.title}
                </h2>
                <p className="text-white/60 line-clamp-3 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex gap-4">
                    <a
                      href={item.sourceCode}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2.5 text-sm font-bold text-white border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all"
                    >
                      Source Code
                    </a>
                    {item.doc && (
                      <a
                        href={item.doc}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2.5 text-sm font-bold text-white border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all"
                      >
                        Project Doc
                      </a>
                    )}
                  </div>
                  {item.comingSoon ? (
                    <div className="group/btn relative w-full">
                      <button
                        className="w-full text-center py-2.5 text-sm font-bold text-white/30 bg-white/5 border border-white/5 rounded-xl cursor-not-allowed"
                        disabled
                      >
                        Live Demo
                      </button>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                        <span className="text-white text-xs font-bold uppercase tracking-widest">Coming Soon</span>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center py-2.5 text-sm font-bold text-black bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg shadow-white/5"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Projects;
