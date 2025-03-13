import React from "react";
import ProjectCard from "./ProjectCard";
import portfolio from "../../assets/portfolio.png"
import login from "../../assets/login.jpg"
import todo from "../../assets/to-do.jpeg";
import landingp from "../../assets/landing.jpeg";
import emc from "../../assets/emc.png"
import food from "../../assets/food.webp"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard 
          title="Employee Management System "
          main="An Employee Management System built with React.js and Tailwind CSS, using a local server backend to manage employee records with add, update, and delete functions in a user-friendly interface."
          imgSrc={emc}
        />
        <ProjectCard
          title="Login-Page"
          main="A responsive Login Page built with React.js and Tailwind CSS, 
          featuring a modern UI, input validation, and a seamless user experience."
          imgSrc={login}
        />

        <ProjectCard
          title="To-do List"
          main="This project is made by using React for managing tasks efficiently. Users can add, edit, delete, and mark tasks
          as completed, with support for filtering and clearing completed tasks. Tasks are stored locally for 
          persistent usage."
          imgSrc={todo}
        />
        <ProjectCard
          title="Product-Search-Engine"
          main="Created a basic product search engine using JavaScript, HTML, and CSS. Implemented a user-friendly interface 
          with real-time search capabilities for filtering products."
          imgSrc={landingp}

        />
        <ProjectCard
          title="Personal Portfolio"
          main="A personal portfolio website showcasing my skills, projects, and experience. Built with a modern tech stack, featuring a responsive design and smooth user experience."
          imgSrc={portfolio}

        />
        <ProjectCard
          title="Your-Food-App"
          main="A full-stack food delivery platform enabling users to browse restaurants, place orders, and track deliveries. Developed with an optimized backend for seamless performance."
          imgSrc={food}

        />
        
      </div>
    </div>
  );
};

export default Projects;
