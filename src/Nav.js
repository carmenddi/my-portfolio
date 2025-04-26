import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="nav-bar">
        {isMobile && (
          <div className="hamburger-icon" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        {!isMobile && (
          <ul className="nav-links">
            <li><a href="#/App">Home</a></li>
            <li><a href="#projects-section">My Projects</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        )}

        {isMobile && (
          <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="close-icon" onClick={toggleSidebar}>
            </div>
            <ul className="nav-links">
              <li><a href="#/App" onClick={toggleSidebar}>Home</a></li>
              <li><a href="#projects-section" onClick={toggleSidebar}>My Projects</a></li>
              <li><a href="#about" onClick={toggleSidebar}>About me</a></li>
              <li><a href="#contacts" onClick={toggleSidebar}>Contacts</a></li>
            </ul>
          </div>
        )}
      </nav>
      <hr className="nav-hr"></hr>
    </>
  );
}