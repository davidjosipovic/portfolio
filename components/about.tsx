'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css'; // Import the CSS module

export default function About() {
  const [rotate, setRotate] = useState(false);
  const [clickable, setClickable] = useState(true);

  const handleProfileClick = () => {
    if (!clickable) return; // Prevent click if not clickable
    setRotate(true);
    setClickable(false); // Disable click

    setTimeout(() => {
      setRotate(false);
      setClickable(true); // Re-enable click after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  return (
    <section className="px-12 py-20 z-10 relative bg-white ">
      <h1 className="text-4xl font-bold pb-4">about me</h1>
      <p className="text-xl pb-4 pt-2">
        As a full stack developer, I am capable of handling front end and back end web development using various programming languages and frameworks.
      </p>
      <p className="text-xl pb-4 pt-2">
        As a full stack developer, I am capable of handling front end and back end web development using various programming languages and frameworks.
      </p>
      <p className="text-xl pb-8 pt-2">
        As a full stack developer, I am capable of handling front end and back end web development using various programming languages and frameworks.
      </p>
      <div className="relative ml-auto mr-auto ">
        <Image
          src="/tech_circle.png"
          height={500}
          width={500}
          alt="Tech Circle"
          className={`w-full h-full ${rotate ? styles.rotate : ''}`} // Apply the rotation class conditionally
        />
        <Image
          src="/profile_picture.jpg"
          height={300}
          width={300}
          alt="Profile Picture"
          className="absolute top-1/2 left-1/2 w-3/5 h-3/5 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleProfileClick}
        />
      </div>
    </section>
  );
}
