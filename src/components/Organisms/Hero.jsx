import React from 'react';

const Hero = () => {
  return (
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img
            className="main-banner__img"
            src="https://wallpaperset.com/w/full/a/4/6/49091.jpg"
            alt="banner"
          />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cursos de Devkingos</p>
            <p> Tu futuro te está esperando</p>
            <a href="https://devkingos.com" className="button">
              Subscribirse
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero