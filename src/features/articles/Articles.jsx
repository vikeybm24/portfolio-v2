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
import databricks_thumb from "../../assets/images/databricks_thumb.png";

// Importing PDF Certifications
import DAA_pdf from "../../assets/images/DAA-databricks.pdf";
import DEA_pdf from "../../assets/images/DEA-databricks.pdf";
import DEP_pdf from "../../assets/images/DEP-databricks.pdf";
import GenAI_pdf from "../../assets/images/GenAI-databricks.pdf";
import agri_hackathon from "../../assets/images/agri_hackathon.jpeg";
import python_nptel from "../../assets/images/Programming, Data Structures and Algorithms using Python.pdf";
import iot_nptel from "../../assets/images/selvam_iot_certificate.pdf";

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
        <h1 className="pb-8 text-3xl font-semibold text-textColor text-center md:text-left">
          Awards & Recognition
        </h1>
        <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center md:justify-items-start">
          {awards &&
            awards.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  image={article.imgPath}
                  title={article.title}
                  url={article.url}
                />
              );
            })}
        </div>

        {/* Certificates Section */}
        <h1 className="pb-8 text-3xl font-semibold text-textColor mt-16 text-center md:text-left">
          Certificates
        </h1>
        <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center md:justify-items-start">
          {certificates &&
            certificates.map((article) => {
              return (
                <ArticleCard
                  key={article.id}
                  image={article.imgPath}
                  title={article.title}
                  url={article.url}
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
    {
      imgPath: agri_hackathon,
      title: "Agri Tech Hardware Hackathon Honorable Mention (2026)",
      id: 10,
    },
  ];

  const certificates = [
    {
      imgPath: DAA_pdf,
      url: DAA_pdf,
      title: "Certified Data Analyst Associate",
      id: 101,
    },
    {
      imgPath: DEA_pdf,
      url: DEA_pdf,
      title: "Certified Data Engineer Associate",
      id: 102,
    },
    {
      imgPath: DEP_pdf,
      url: DEP_pdf,
      title: "Certified Data Engineer Professional",
      id: 103,
    },
    {
      imgPath: GenAI_pdf,
      url: GenAI_pdf,
      title: "Generative AI Fundamentals",
      id: 104,
    },
    {
      imgPath: python_nptel,
      url: python_nptel,
      title: "Programming, Data Structures And Algorithms Using Python",
      id: 105,
    },
    {
      imgPath: iot_nptel,
      url: iot_nptel,
      title: "Introduction To Internet Of Things",
      id: 106,
    },
    {
      imgName: "Certificate_3.jpg",
      imgPath: certificate3,
      title: "Meta Full-Stack Developer",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/Y9L2XQ2E8Q9L", // Example Coursera link or local PDF if available
      id: 7,
    },
  ];

  return { awards, certificates };
}

export default Articles;
