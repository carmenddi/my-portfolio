import React from 'react';
import Phone from './images/phone.png';
import Email from './images/email.png';
import Linkedin from './images/linkedin.png';
import GitHub from './images/github.png'

export default function Footer () {
    return (
        <>
          <hr></hr>
          <ul className='contacts' id='contacts' role="presentation">
            <li>
              <img src={Email} alt='email icon'/>
              <a href='mailto:carmendarca@gmail.com'>carmendarca@gmail.com</a>
            </li>
            <li>
              <img src={Linkedin} alt='Linkedin icon'/>
              <a href='https://www.linkedin.com/in/carmen-d-arca/' target='_blank' rel="noreferrer">Linkedin</a>
            </li>
            <li>
              <img src={GitHub} alt='GitHub icon'/>
              <a href='https://github.com/carmenddi' target='_blank' rel="noreferrer">GitHub</a>
            </li>
            <li>
              <img src={Phone} alt='phone icon'/>
              <a href='tel:+4915206256579'>+4915206256579</a>
            </li>
          </ul>
          <span className='by'>© Carmen D'Arca 2025</span>
        </>
    )
}