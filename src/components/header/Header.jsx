import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>HOLAA!! SOY</h5>
        <h1>Tamara Tintes</h1>
        <h5 className="text-light">CONTADORA</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Mas Abajo
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
