import { useState } from 'react';
import './testimonials.scss';
import { testimonials } from '../../data';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick= (dir) => {
    dir === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 4) : setCurrentSlide(currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="testimonials" id="testimonials">
      <h2 className="test_header">Testimonials</h2>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
        {testimonials.map((item) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="left_container">
              <a href={item.link} target='_blank' rel="noreferrer" className="img_container">
                <img src="images/linkedin.png" alt="" />
              </a>
              <h2 className="title">{item.name}</h2>
              <p>{item.role}</p>
              </div>
            </div>
            <div className="right">
              <p>{item.test}</p>
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="images/arrow.png" alt="" className="arrow left" onClick={() => handleClick('left')} />
      <img src="images/arrow.png" alt="" className="arrow right" onClick={() => handleClick()} />
    </div>
  )
}
