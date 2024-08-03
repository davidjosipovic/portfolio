"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./about.module.css"; // Import the CSS module

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
    <section className="px-8 py-16 z-10 relative bg-white text-dark-blue ">
      <div id="about" className="container mx-auto lg:px-40 md:py-20 flex flex-col xl:flex-row lg:py-32">
        <div className="xl:w-1/2 pr-8">
        <h1  className="text-4xl font-bold pb-4">
          about me
        </h1>
        <p className="text-xl pb-4 pt-2">
    As a web developer, I excel in both frontend and backend development, working with a wide range of technologies to build dynamic and responsive solutions.
</p>
<p className="text-xl pb-4 pt-2">
    I’m constantly seeking new challenges and opportunities to enhance my skills and stay at the forefront of the ever-evolving web development landscape.
</p>
<p className="text-xl pb-8 pt-2">
    Beyond web development, I’m passionate about game development and enjoy exploring new ways to create immersive experiences.
</p>
</div>
        
        <div className="relative ml-auto mr-auto md:w-3/5 xl:w-2/5 xl:h-2/5  ">
          <Image
            src="/tech_circle.png"
            height={800}
            width={800}
            alt="Tech Circle"
            className={`w-full h-full ${rotate ? styles.rotate : ""}`} // Apply the rotation class conditionally
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
      </div>
    </section>
  );
}
