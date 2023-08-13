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
      <p>Construction firm website</p>
      <p className='txt'>
      My second project is a static website for a construction company, showcasing my skills in web design and development. This website provides information about the services, references, and contacts of the construction company.<br />Through aesthetically appealing design and intuitive navigation, the goal is to attract potential clients and provide them with a pleasant browsing experience.
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
