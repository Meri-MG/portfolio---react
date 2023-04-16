import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Faire connaissance</h5>
      <h2>Sur moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>1 an</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>Plus de 10 projets terminés</small>
            </article>
          </div>
          <p>Je m'appelle Sami, j'ai 22 ans et je suis actuellement en Bachelor Développement Web & Mobile a l'ecole ECE Paris pour devenir développeur web full-stack. Après celle-ci je souhaiterais poursuivre sur un master pour élargir mes compétences dans le domaine du web. J'aime toucher à tout et être autonome sur les projets que l'on me confie, cependant j'apporte une affection supplémentaire au développement dit back-end, notamment avec PHP.</p>
          <a href="#contact" className="btn btn-primary">Parlons</a>
        </div>
      </div>
    </section>
  )
}

export default Intro