import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">ABDULHALIM SAMI</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><Link to="/blog">Blog</Link> </li>
        
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sami-abdulhalim/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/aboalsim114" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small style={{color : "#fff"}}>&copy;  {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
