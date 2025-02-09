import React, { useRef} from 'react';
import Me from './images/me.jpg';
import useInView from './hooks/useInView';


export default function About () {
  const aboutRef = useRef(null);
  const isVisible = useInView(aboutRef);
    return (
        <>
          <div ref={aboutRef}
            className={`about ${isVisible ? 'fade-in' : ''}`}>
            <h2 id='about'>About me</h2>
            <div className='me'>
              <p>I am a Webdesigner/Front-End Developer based in Munich. Two and a half years ago I decided to start studying for a career change. I started by successfully obtaining the Webdesigner certificate at the Online Schule für Gestaltung, after which I started putting my knowledge into practice by integrating it with new knowledge and shifting the focus to Front-End Development. In particular, I chose the course 'Meta Front-End Development Professional Certificate' from Meta successfully completed. In addition to HTML, CSS, Wordpress, Java Script, Bootstrap, React, Git and Github the courses attended gave me the opportunity to learn UX/UI Design, Responsive Design, Web Accessibility, SEO and how to use Figma, Adobe Illustrator and Adobe Photoshop.</p>
              <img src={Me} alt='business pic of me' />
            </div>
          </div>
        </>
    )
}