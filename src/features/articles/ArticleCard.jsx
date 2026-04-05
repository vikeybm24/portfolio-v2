/* eslint-disable react/prop-types */
function ArticleCard({ image, title, url }) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const isPDF = typeof image === "string" && image.toLowerCase().endsWith(".pdf");

  return (
    <div
      onClick={handleClick}
      className="flex max-w-xs cursor-pointer flex-col rounded-2xl glass border border-white/10 hover:border-white/20 hover:scale-105 transition-all duration-500 ease-in-out overflow-hidden hover:shadow-2xl hover:shadow-white/5"
    >
      <div className="h-[200px] w-full overflow-hidden rounded-t-2xl relative bg-black/40">
        {isPDF ? (
          <iframe
            src={`${image}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full pointer-events-none transition-opacity"
            style={{ border: "none" }}
            title={title}
          />
        ) : (
          <img
            src={image}
            className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out"
            alt={title}
          />
        )}
        {/* Overlay to ensure clicks are caught even over the iframe */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
           <span className="text-white text-xs font-bold uppercase tracking-widest">View Document</span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 p-5 bg-white/5">
        <h2 className="text-lg font-bold text-white transition-all duration-300 ease-in-out line-clamp-2">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default ArticleCard;
