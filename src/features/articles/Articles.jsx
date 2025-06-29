import { Helmet, HelmetProvider } from "react-helmet-async";
import ArticleCard from "./ArticleCard";
import { useLoaderData } from "react-router";

// Importing images for Awards and Certificates
import sem1_stage from "../../assets/images/Sem_1_stage.jpg";
import sem3_stage from "../../assets/images/Sem_2_top_stage.jpg";
import Sem_1_perform from "../../assets/images/Sem_1_perform.jpg";
import uxui from "../../assets/images/Ux_ui.jpg";
import certificate1 from "../../assets/images/Best_per_cet.jpeg";  
import certificate2 from "../../assets/images/Sem_1_top.jpeg";  
import certificate3 from "../../assets/images/Coursera_selvam.jpg";  

function Articles() {
  const awards = useLoaderData().awards; // Load awards separately
  const certificates = useLoaderData().certificates; // Load certificates separately
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selvam B | Achievements</title>
      </Helmet>
      <div className="p-8">
        
        {/* Awards Section */}
        <h1 className="pb-8 text-3xl font-semibold text-textColor">
          Awards & Recognition
        </h1>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
          {awards &&
            awards.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  image={article.imgPath}
                  title={article.title}
                />
              );
            })}
        </div>
        
        {/* Certificates Section */}
        <h1 className="pb-8 text-3xl font-semibold text-textColor mt-16">
          Certificates
        </h1>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-4">
          {certificates &&
            certificates.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  image={article.imgPath}
                  title={article.title}
                />
              );
            })}
        </div>
        
      </div>
    </HelmetProvider>
  );
}

export async function loader() {
  // Returning separate objects for awards and certificates
  const awards = [
    {
      imgName: "sem1_stage.jpg",
      imgPath: sem1_stage,
      title: "I Year Class Topper 2022",
      id: 1,
    },
    {
      imgName: "Sem_1_perform.jpg",
      imgPath: Sem_1_perform,
      title: "Best Performance 2022",
      id: 2,
    },
    {
      imgName: "uxui.jpg",
      imgPath: uxui,
      title: "3rd Place UI/UX Design Competition 2022",
      id: 3,
    },
    {
      imgName: "sem3_stage.jpg",
      imgPath: sem3_stage,
      title: "II Year Class Topper 2023",
      id: 4,
    },
  ];

  const certificates = [
    {
      imgName: "Certificate_1.jpg",
      imgPath: certificate1,
      title: "Best Performance",
      id: 5, // Unique ID for the first certificate
    },
    {
      imgName: "Certificate_2.jpg",
      imgPath: certificate2,
      title: "Academic Topper",
      id: 6, // Unique ID for the second certificate
    },
    {
      imgName: "Certificate_3.jpg",
      imgPath: certificate3,
      title: "Meta Full-Stack Developer",
      id: 7, // Unique ID for the second certificate
    },
  ];

  return { awards, certificates };
}

export default Articles;
