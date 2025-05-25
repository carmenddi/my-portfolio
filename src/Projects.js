import React, { useRef } from 'react';
import useInView from './hooks/useInView';
import ProjectCard from './ProjectCard';
import beyondWatches from './images/beyondwatches.png';
import littleLemon from './images/littlelemon.jpeg';
import halfmoon from './images/halfmoon.jpg';
import hairDay from './images/hairday.png';

export default function Projects () {
  const projectsRef = useRef(null);
  const isVisible = useInView(projectsRef);
  const projectData = [
    { image: beyondWatches, title: "Beyond Watches", description: "A WordPress blog for a watch enthusiast, designed to showcase articles and reviews in a clean, elegant layout. Focused on readability, responsive design, and easy content management.  ", link: 'https://beyondwatchesbw.com' },
    { image: littleLemon, title: "Little Lemon", description: "A modern, responsive website for a restaurant, built with React. Focus on performance, component-based structure, and a smooth user experience across devices.", link:'https://projectlittlelemon.netlify.app/' },
    { image: halfmoon, title: "Halfmoon", description: "A Bootstrap-based restaurant website featuring a sleek, mobile-first layout. Designed for quick navigation, visual appeal, and clear presentation of key information.", link: 'https://carmenddi.github.io/halfmoon/' },
    { image: hairDay, title: "Hair Day", description: "Modern website for a hair salon, built with React. Features a photo gallery showcasing the work, service information, and an appointment booking form to enhance user experience.", link: 'https://projecthairday.netlify.app' }
  ];
    return (
        <>
          <div ref={projectsRef}
            className={`projects ${isVisible ? 'fade-in' : ''}`}>
              <h2 id="projects-section">Projects</h2>
              <div className="projects-container">
               {projectData.map((project, index) => (
               <ProjectCard key={index} image={project.image} title={project.title} link={project.link} description={project.description} />
               ))}
              </div>
          </div>
        </>
    )
}