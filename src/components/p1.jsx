import React, { useEffect } from 'react';
import './p1.css';

const P1 = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".Picture1 .slide");
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 3500); // Change slide every 2 seconds

    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className='p1'>
      <h3>Project 1</h3>
      <p>Apartments website</p>
      <p className='txt'>
        Moj prvi projekt je web stranica za bookiranje apartmana koja prikazuje dostupne apartmane i omogućava korisnicima jednostavno rezerviranje. Kroz atraktivan dizajn i intuitivno korisničko iskustvo, cilj stranice je olakšati pronalazak i rezervaciju željenog smještaja.
      </p>
      <div className="Picture1 slideshow-container">
        <img className="slide" src="./p1image1.png" alt="Slide 1" />
        <img className="slide" src="./p2image2.png" alt="Slide 2" />
        <img className="slide" src="./p3image3.png" alt="Slide 3" />
      </div>
    </div>
  );
};

export default P1;
