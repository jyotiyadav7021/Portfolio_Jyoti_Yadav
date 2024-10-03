import React from "react";
import ProjectCard from "./ProjectCard";
import clone from "../../assets/clone.jpeg";
import articleImg from "../../assets/article.jpeg";
import todo from "../../assets/to-do.jpeg";
import landingp from "../../assets/landing.jpeg";


const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Article Posting Hub "
          main="This React-based article posting website enables users to create, view, edit, and delete articles with a clean UI. 
          It features user authentication, real-time updates, article categorization, and search functionality."
          imgSrc={articleImg}
        />
        <ProjectCard
          title="Myntra Clone"
          main="Built an e-commerce application mimicking Myntra. Developed a responsive front-end with React.js, managed server-side
          operations with Node.js and Express.js, and used MongoDB for data storage, featuring product listings and user authentication."
          imgSrc={clone}
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
        
      </div>
    </div>
  );
};

export default Projects;
