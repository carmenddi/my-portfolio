import React, { useRef } from 'react';
import useInView from './hooks/useInView';

export default function Header () {
    const headerRef = useRef(null);
    const isVisible = useInView(headerRef);
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('#projects-section'); // Make sure Projects section has this ID
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <div ref={headerRef}
         className={`header ${isVisible ? 'fade-in' : ''}`}>
          <div className='description'>
            <h1>I am <span className='name'>Carmen</span> <br></br>and I am a <span className='profession'>Webdesigner/Front-End Developer</span>.</h1>
          </div>
          <div className='arrow'>
            <p>Discover here my projects</p>
            <button className="scroll-button" onClick={scrollToProjects}></button>
          </div>
        </div>
        </>
    )
}