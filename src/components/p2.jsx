import React, { useEffect, useState } from 'react';
import './p2.css';

function P2() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p2'>
      <h3>Project 2 <a className='github' href="https://github.com/davidjosipovic/mir-gradjevinarstvo-website" target='_blank'><img src="./github.svg" alt="github" /></a></h3>
      <p>Construction firm website</p>
      <p className='txt'>
        Moj prvi projekt je web stranica za bookiranje apartmana koja prikazuje dostupne apartmane i omogućava korisnicima jednostavno rezerviranje.<br/> Kroz atraktivan dizajn i intuitivno korisničko iskustvo, cilj stranice je olakšati pronalazak i rezervaciju željenog smještaja.
      </p>
      <div className='slideshow-container'>
        <div className={`mySlides2 ${slideIndex === 0 ? 'active' : ''}`}>
          <img src='./mir1.png' alt='Slide 1' />
        </div>

        <div className={`mySlides2 ${slideIndex === 1 ? 'active' : ''}`}>
          <img src='./mir2.png' alt='Slide 2' />
        </div>

        <div className={`mySlides2 ${slideIndex === 2 ? 'active' : ''}`}>
          <img src='./mir3.png' alt='Slide 3' />
        </div>
      </div>
    </div>
  );
}

export default P2;
