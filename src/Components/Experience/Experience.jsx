import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { GrHadoop } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="#F7DF1E" size={50} />
          </span>
          
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaPython color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Python Certification</h2>
              
              <ul className="text-sm p-2">
                <li>- From ExcelR</li>
                
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <GrHadoop color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Data Science</h2>
              
              <ul className="text-sm p-2">
                <li>- From BSE Institute</li>
                
              </ul>
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
