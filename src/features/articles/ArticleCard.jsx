/* eslint-disable react/prop-types */
function ArticleCard({ image, title }) {
  return (
    <div className="flex max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg hover:shadow-md hover:shadow-white hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={image}  // The imported image path is used directly here
        className="h-[200px] w-full object-cover object-center rounded-t-lg transition-all duration-300 ease-in-out"
        alt={title}  // Added alt text for accessibility
      />
      <div className="flex flex-col gap-y-2 p-4">
        <h2 className="text-2xl font-semibold text-accentColor transition-all duration-300 ease-in-out">{title}</h2>
      </div>
    </div>
  );
}

export default ArticleCard;
