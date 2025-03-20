import React from "react";

const ProjectCard = ({ title, main, imgSrc, link }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 md:w-96 min-h-[350px] bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-transform duration-300 hover:scale-105">
      <img className="p-4 w-full h-40 object-cover rounded-xl" src={imgSrc} alt={title} />

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
        {title}
      </h3>

      <p className="px-4 text-sm md:text-md leading-tight py-2 text-gray-300">
        {main}
      </p>

      <div className="mt-auto p-2 md:p-4 flex justify-center">
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 font-semibold rounded-3xl bg-[#465697]"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
