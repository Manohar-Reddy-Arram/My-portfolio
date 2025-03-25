import React from 'react';
import './styles.css';;

function Projects() {
  const projectList = [
    {
      title: 'Jobby App',
      description: 'Developed a responsive web application using React.js for job searching and profile management. Implemented authentication flow, error handling, and used cookies for persistence. Utilized React Router and CSS flexbox/media queries.',
      link: 'https://manu08jobbyapp.ccbp.tech/login',
    },
    {
      title: 'Video Player',
      description: 'Built a video player using the react-player NPM package, supporting multiple URLs like YouTube and Facebook. Focused on responsive design and ease of use.',
      link: 'https://67b874722aeca0c21fc42d23--reactvideoplayer12.netlify.app/',
    },
    {
      title: 'Windows Language Change App',
      description: 'Created a React-based app to switch Windows display languages (English, Hindi, Telugu) dynamically using the Context API for state management.',
      link: 'https://languagewin11.ccbp.tech/',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Try it here
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;