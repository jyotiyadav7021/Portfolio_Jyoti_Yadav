import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  M.Sc in Computer Science
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I hold an MSc in Computer Science, with expertise in areas like Data Structures, 
                and Software Development.This education has strengthened my technical and 
                problem-solving skills, preparing me to apply modern technologies to real-world challenges.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  B.Sc in Physics
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I graduated with a BSc in Physics from Patkar Varde College, where 
                I developed a strong understanding of physical principles and analytical 
                skills.
                </p>
              </span>
            </div>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
