import React, { useEffect, useState } from 'react';
import './p1.css';

function P1() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p1'>
      <h3>Projekt 1 <a className='github' href="https://github.com/davidjosipovic/apartment-website" target='_blank' rel="noopener noreferrer"><img src="./github.svg" alt="github" /></a></h3>
      <p>Web stranica za apartmane</p>
      <p className='txt'>
        Moj prvi projekt je web stranica za bookiranje apartmana koja prikazuje dostupne apartmane i omogućava korisnicima jednostavno rezerviranje.<br/> Kroz atraktivan dizajn i intuitivno korisničko iskustvo, cilj stranice je olakšati pronalazak i rezervaciju željenog smještaja.
      </p>
      <div className='slideshow-container'>
        <div className={`mySlides ${slideIndex === 0 ? 'active' : ''}`}>
          <img className='projectimg1' src='./Apartman1.png' alt='Slide 1' />
        </div>

        <div className={`mySlides ${slideIndex === 1 ? 'active' : ''}`}>
          <img className='projectimg1' src='./Apartman2.png' alt='Slide 2' />
        </div>

        <div className={`mySlides ${slideIndex === 2 ? 'active' : ''}`}>
          <img className='projectimg1' src='./Apartman3.png' alt='Slide 3' />
        </div>
      </div>
    </div>
  );
}

export default P1;
