import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State to track if the screen is mobile/tablet

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState); // Toggle the state
  };

  // Function to handle window resizing
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false); // Automatically close sidebar on desktop view
    }
    setIsMobile(window.innerWidth <= 768); // Update mobile state
  };

  // Add event listener for screen resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <>
      <nav className="nav-bar">
        {/* Hamburger icon only for mobile/tablet */}
        {isMobile && (
          <div className="hamburger-icon" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />} {/* FaTimes when open, FaBars when closed */}
          </div>
        )}

        {/* Regular nav-links only for desktop */}
        {!isMobile && (
          <ul className="nav-links">
            <li><a href="#/App">Home</a></li>
            <li><a href="#projects-section">My Projects</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        )}

        {/* Sidebar only for mobile */}
        {isMobile && (
          <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            {/* Close icon inside the sidebar but positioned absolutely */}
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