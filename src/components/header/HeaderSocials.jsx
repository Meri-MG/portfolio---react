import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/meri-gogichashvili/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/Meri-MG" target="_blank"><FaGithub /></a>
      <a href="https://angel.co/u/meri-gogichashvili" target="_blank"><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials