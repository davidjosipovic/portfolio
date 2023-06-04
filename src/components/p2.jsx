import React, { useEffect, useState } from 'react';
import './p2.css';

function P2() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p2'>
      <h3>Projekt 2 <a className='github' href="https://github.com/davidjosipovic/mir-gradjevinarstvo-website" target='_blank' rel="noopener noreferrer"><img src="./github.svg" alt="github" /></a></h3>
      <p>Web stranica građevinske firme</p>
      <p className='txt'>
      Moj drugi projekt je statična web stranica za građevinsku firmu, koja predstavlja moje vještine u dizajnu i razvoju web stranica.<br/> Ova stranica pruža informacije o uslugama, referencama i kontaktima građevinske firme. Kroz estetski privlačan dizajn i intuitivnu navigaciju, cilj je privući potencijalne klijente i pružiti im ugodno iskustvo pregledavanja.
      </p>
      <div className='slideshow-container'>
        <div className={`mySlides2 ${slideIndex === 0 ? 'active' : ''}`}>
          <img className='projectimg2' src='./mir1.png' alt='Slide 1' />
        </div>

        <div className={`mySlides2 ${slideIndex === 1 ? 'active' : ''}`}>
          <img className='projectimg2' src='./mir2.png' alt='Slide 2' />
        </div>

        <div className={`mySlides2 ${slideIndex === 2 ? 'active' : ''}`}>
          <img className='projectimg2' src='./mir3.png' alt='Slide 3' />
        </div>

        <div className={`mySlides2 ${slideIndex === 3 ? 'active' : ''}`}>
          <img className='projectimg2' src='./mir4.png' alt='Slide 4' />
        </div>
      </div>
    </div>
  );
}

export default P2;
