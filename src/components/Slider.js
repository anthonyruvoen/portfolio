import React, { useState } from 'react';
import './slider.css';


const Slider = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? projects.length - 1 : prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    document.querySelector('.slide').classList.add('transition');
  
  // Remettre à zéro la classe de transition après un certain délai
  setTimeout(() => {
    document.querySelector('.slide').classList.remove('transition');
  }, 500); // ajustez la durée de la transition ici (en millisecondes)
  };

  return (
      <div className='sliderContainer' id='projects'>
        <h2>Projets réalisés</h2>
    <div className="slider">
      <button className="btn btn-left"onClick={handlePrevSlide}><i className="fas fa-chevron-left"></i></button>
      <div className="slide">
        <div className="slideDescription">
          <img className="logo" src={projects[currentSlide].image} alt={projects[currentSlide].title} />
          <p className='slideDesc'>{projects[currentSlide].description}</p>
          <p className='slideSkills'>{projects[currentSlide].skills[0]}</p>
          <p className='slideSkills'>{projects[currentSlide].skills[1]}</p>
          <p className='slideSkills'>{projects[currentSlide].skills[2]}</p>
          <p className='slideSkills'>{projects[currentSlide].skills[3]}</p>
          <a href={projects[currentSlide].codeLink} target="_blank" rel="noreferrer">Code source</a>
        </div>
        <div className="link">
          <img className="mockup" src={projects[currentSlide].demoLink} alt={projects[currentSlide].title} />
        </div>
      </div>
      <button className="btn btn-right" onClick={handleNextSlide}><i className="fas fa-chevron-right"></i></button>
        </div>
    </div>
  );
};

export default Slider;