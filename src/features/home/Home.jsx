import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selvam B | Home</title>
      </Helmet>

      <div className="relative  flex  min-h-[75svh]  items-center overflow-hidden ">
        <div className="absolute left-10 z-10   gap-y-0 text-[12rem] font-extrabold leading-none text-bgText max-sm:hidden">
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className="relative z-20 flex flex-col items-center gap-y-12 p-4 md:w-full md:flex-row md:items-center md:justify-between md:px-28">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-white md:text-6xl xl:text-9xl tracking-tighter">
              Selvam B
            </h2>
            <div className="typewriter w-max border-r-2 border-white">
              <h2 className="text-xl font-medium text-white/80 md:text-3xl tracking-widest uppercase">
                Python & GenAI Developer
              </h2>
            </div>
            <div className="flex gap-6 mt-12">
              <Link to="/projects">
                <button className="bg-white text-black px-10 py-3.5 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-white/10">
                  View Work
                </button>
              </Link>
              <Link to="/contact">
                <button className="glass text-white px-10 py-3.5 font-bold rounded-full hover:scale-105 transition-all duration-300 border border-white/20">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Home;

{
  /* <Link
className=" border-2 border-black px-4 py-3 font-medium   md:px-12 md:text-xl"
to={`${"/projects"}`}
>
View Work
</Link>
<Link
className="  border-2 border-black px-4 py-3 font-medium   md:px-12 md:text-xl"
to={`${"/contact"}`}
>
Contact Me
</Link> */
}
