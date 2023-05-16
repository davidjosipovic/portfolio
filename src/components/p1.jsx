import React, { useEffect, useState } from 'react';
import './p1.css';
import p1image1 from './p1image1.png';
import p2image2 from './p2image2.png';
import p3image3 from './p3image3.png';

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
      <h3>Project 1</h3>
      <p>Apartments website</p>
      <p className='txt'>
        Moj prvi projekt je web stranica za bookiranje apartmana koja prikazuje dostupne apartmane i omogućava korisnicima jednostavno rezerviranje.<br/> Kroz atraktivan dizajn i intuitivno korisničko iskustvo, cilj stranice je olakšati pronalazak i rezervaciju željenog smještaja.
      </p>
      <div className='slideshow-container'>
        <div className={`mySlides ${slideIndex === 0 ? 'active' : ''}`}>
          <img src={p1image1} alt='Slide 1' />
        </div>

        <div className={`mySlides ${slideIndex === 1 ? 'active' : ''}`}>
          <img src={p2image2} alt='Slide 2' />
        </div>

        <div className={`mySlides ${slideIndex === 2 ? 'active' : ''}`}>
          <img src={p3image3} alt='Slide 3' />
        </div>
      </div>
    </div>
  );
}

export default P1;
