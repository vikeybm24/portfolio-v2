import ott_img from "../../assets/images/ott_img.jpg";
import secureXtractai_img from "../../assets/images/secureXtractai_img.png";
import findit_ai_img from "../../assets/images/findit_ai_img_head.png";
import findit_doc from "../../assets/images/finditai_document-8-51 copy.pdf";
import bookit_img from "../../assets/images/bookit_img.png";

export const project = [
  {
    title: "SecureXtractAI",
    description:
      "A local LLM-based document processing system using Ollama and RAG with secure PDF/image handling and intelligent Q&A, ensuring complete data privacy.",
    image: secureXtractai_img,
    tags: ["Python", "Ollama", "RAG", "LLM"],
    sourceCode: "https://github.com/vikeybm24/secureXtractAI",
    demo: "https://securextractai.netlify.app/",
  },
  {
    title: "CineStream OTT",
    description:
      "CineStream OTT is a React.js-based movie streaming platform styled with Tailwind CSS, using Axios to fetch movie data from the OMDb API.",
    image: ott_img,
    tags: ["React js", "Tailwind css", "Axios"],
    sourceCode: "https://github.com/vikeybm24/ott_platform",
    demo: "https://vikeybm24.github.io/ott_platform/",
  },
  {
    title: "FindIt AI",
    description:
      "AI-powered Lost & Found platform using Django and Hugging Face for smart item matching and QR-based verification.",
    image: findit_ai_img,
    tags: ["Django", "Hugging Face", "Python", "Web"],
    sourceCode: "https://github.com/vikeybm24/findit_AI",
    demo: "#",
    doc: findit_doc,
    comingSoon: true,
  },
  {
    title: "BookIt",
    description:
      "An Android movie booking app using Java and Firebase with real-time ticket tracking and authentication.",
    image: bookit_img,
    tags: ["Android", "Java", "Firebase", "Mobile"],
    sourceCode: "https://github.com/vikeybm24/bookit/",
    demo: "https://vikeybm24.github.io/bookit/",
  },
];
