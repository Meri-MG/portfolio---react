import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Sami Abdulhalim</h1>
        <h5 className="text-light">Développeur full-stack</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
        Défiler vers le bas
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
