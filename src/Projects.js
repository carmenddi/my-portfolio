import React, { useRef } from 'react';
import useInView from './hooks/useInView';
import ProjectCard from './ProjectCard';
import beyondWatches from './images/beyondwatches.png';
import littleLemon from './images/littlelemon.jpg';
import halfmoon from './images/halfmoon.jpg';
import hairDay from './images/hairday.png';

export default function Projects () {
  const projectsRef = useRef(null);
  const isVisible = useInView(projectsRef);
  const projectData = [
    { image: beyondWatches, title: "Beyond Watches", link: 'https://beyondwatchesbw.com' },
    { image: littleLemon, title: "Little Lemon", link:'https://projectlittlelemon.netlify.app/' },
    { image: halfmoon, title: "Halfmoon", link: 'https://carmenddi.github.io/halfmoon/' },
    { image: hairDay, title: "Hair Day", link: 'https://projecthairday.netlify.app' }
  ];
    return (
        <>
          <div ref={projectsRef}
            className={`projects ${isVisible ? 'fade-in' : ''}`}>
              <h2 id="projects-section">Projects</h2>
              <div className="projects-container">
               {projectData.map((project, index) => (
               <ProjectCard key={index} image={project.image} title={project.title} link={project.link} />
               ))}
              </div>
          </div>
        </>
    )
}