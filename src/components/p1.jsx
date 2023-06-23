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
      <h3>Project 1 <a className='github' href="https://github.com/davidjosipovic/apartment-website" target='_blank' rel="noopener noreferrer"><img src="./github.svg" alt="github" /></a></h3>
      <p>Apartments website</p>
      <p className='txt'>
      "My first project is a website for apartment rentals that displays available apartments and allows users to easily make reservations.<br/> Through an attractive design and intuitive user experience, the goal of the website is to facilitate finding and booking desired accommodations."
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
