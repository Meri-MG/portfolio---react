import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Meri Gogichashvili</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" id="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header