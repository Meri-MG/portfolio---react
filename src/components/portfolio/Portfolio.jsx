import React from 'react';
import IMG1 from '../../assets/bookstore.png';
import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Bookstore',
      img: IMG1,
      link: 'https://melodic-boba-111583.netlify.app/',
      github: 'https://github.com/Meri-MG/bookstore---react',
    },
    {
      id: 2,
      title: '',
      img: '',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: '',
    },
    {
      id: 3,
      title: '',
      img: '',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: '',
    },
    {
      id: 4,
      title: '',
      img: '',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: '',
    },
    {
      id: 5,
      title: '',
      img: '',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: '',
    },
    {
      id: 6,
      title: '',
      img: '',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: '',
    },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}

        <img src="assets/bookstore.png" />
        
      </div>
    </section>
  )
}

export default Portfolio