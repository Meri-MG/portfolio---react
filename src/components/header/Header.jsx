import React from 'react';
import './header.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anshi Mathur</h1>
        <p>Aspiring computer programmer / data scientist.</p>
        <div className='container header_socials'>
          <a href="https://www.linkedin.com/in/anshi-mathur-770688236" target="_blank" rel="noreferrer" ><BsLinkedin />    </a>
          <a href="https://github.com/anshimathur0325" target="_blank" rel="noreferrer" ><FaGithub /></a>
        </div>
        
      </div>
    </header>
  )
}

export default Header