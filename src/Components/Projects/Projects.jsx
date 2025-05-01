import React from "react";
import ProjectCard from "./ProjectCard";
import portfolio from "../../assets/portfolio.png"
import login from "../../assets/login.jpg"
import todo from "../../assets/to-do.jpeg";
import landingp from "../../assets/landing.jpeg";
import emc from "../../assets/emc.png"
import food from "../../assets/food.webp"
import febri from "../../assets/febri.png"
import IFSC from "../../assets/IFSC.png"
import trip from "../../assets/trip.jpg"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard 
          title="Employee Management System "
          main="An Employee Management System built with React.js and Tailwind CSS, using a local server backend to manage employee records with add, update, and delete functions in a user-friendly interface."
          imgSrc={emc}
          link="https://luminous-bunny-da6c53.netlify.app/"
        />
        <ProjectCard 
          title="Custom Fabrication Website "
          main="A responsive website built with ReactJS, Vite, and Tailwind CSS to showcase Aarti Fabrication’s services. Features include project galleries, service details, and contact forms, ensuring a seamless user experience across devices."
          imgSrc={febri}
          link="https://680672ec258f4437c451e881--rad-mochi-1727c5.netlify.app/#home"
        />
        <ProjectCard
          title="AI Trip Planner"
          main="A smart travel planning app that generates personalized itineraries based on user preferences like destination, budget, and duration. Built with React for dynamic UI and Tailwind CSS for responsive styling. Features include AI-based suggestions, day-wise plans, and real-time itinerary generation."
          imgSrc={trip}
          link="https://portfolio-jyoti-yadav.netlify.app/"

        />
        <ProjectCard 
          title="IFSC-Finder "
          main="Built a full-stack app to search and filter bank details using IFSC codes, with CSV upload, pagination, and real-time API integration."
          imgSrc={IFSC}
          link="https://681304a14e84ef356f93826e--cozy-pixie-d6894f.netlify.app/"
        />
        <ProjectCard
          title="Personal Portfolio"
          main="A personal portfolio website showcasing my skills, projects, and experience. Built with a modern tech stack, featuring a responsive design and smooth user experience."
          imgSrc={portfolio}
          link="https://portfolio-jyoti-yadav.netlify.app/"

        />
        <ProjectCard
          title="Your-Food-App"
          main="A full-stack food delivery platform enabling users to browse restaurants, place orders, and track deliveries. Developed with an optimized backend for seamless performance."
          imgSrc={food}
          link="https://stupendous-salmiakki-27b010.netlify.app/"

        />
        <ProjectCard
          title="Login-Page"
          main="A responsive Login Page built with React.js and Tailwind CSS, 
          featuring a modern UI, input validation, and a seamless user experience."
          imgSrc={login}
          link="https://rococo-shortbread-746bb5.netlify.app/"
        />

        <ProjectCard
          title="To-do List"
          main="This project is made by using React for managing tasks efficiently. Users can add, edit, delete, and mark tasks
          as completed, with support for filtering and clearing completed tasks. Tasks are stored locally for 
          persistent usage."
          imgSrc={todo}
          link="https://portfolio-jyoti-yadav.netlify.app/"
          
        />
        <ProjectCard
          title="Product-Search-Engine"
          main="Created a basic product search engine using JavaScript, HTML, and CSS. Implemented a user-friendly interface 
          with real-time search capabilities for filtering products."
          imgSrc={landingp}
          link="https://portfolio-jyoti-yadav.netlify.app/"

        />
        
        
      </div>
    </div>
  );
};

export default Projects;
