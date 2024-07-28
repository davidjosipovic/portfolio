'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from './projects.module.css'; // Ensure this CSS module file is created

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleFlip = (index: number) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (flippedIndex !== null && containerRefs.current[flippedIndex]) {
      const currentCard = containerRefs.current[flippedIndex];
      if (currentCard && !currentCard.contains(event.target as Node)) {
        setFlippedIndex(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [flippedIndex]);

  const backTexts = [
    "myGameList",
    "German Syllable Splitter",
    "Nothing to see here"
  ];

  const projectLinks = [
    { github: "https://github.com/myGameList", live: "https://mygamelist.com" },
    { github: "https://github.com/GermanSyllableSplitter", live: "https://germansyllablesplitter.com" },
    { github: "https://github.com/NoProject", live: "#" }
  ];

  return (
    <section className="px-12 py-20 z-10 relative mb-[500px] bg-light-blue">
      <div className="container mx-auto">
        <h1 id="projects" className="text-4xl text-dark-blue font-bold leading-normal pb-4 sm:text-center">
          my projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:items-center">
          {['/mygamelist_banner.svg', '/germansyllablesplitter_banner.svg', '/inprogress_banner.svg'].map((src, index) => (
            <div 
              key={index} 
              ref={(el:any) => (containerRefs.current[index] = el)}
              className={`${styles.flipContainer} ${flippedIndex === index ? styles.flipped : ''}`} 
              onClick={() => handleFlip(index)}
            >
              <div className={styles.flipper}>
                <div className={styles.front}>
                  <Image
                    src={src}
                    height={600}
                    width={600}
                    alt="Project Image"
                    className="rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg"
                  />
                </div>
                <div className={styles.back}>
                  <div onClick={(e) => e.stopPropagation()} /* Stop event propagation to prevent card from closing */>
                    <Image
                      src="/backofthecard.svg"
                      height={600}
                      width={600}
                      alt="Back of Card"
                      className="rounded-2xl"
                    />
                    <p className="text-white text-center text-2xl">{backTexts[index]}</p>
                    <div className="text-center">
                      <a href={projectLinks[index].github} target="_blank" className="text-blue-500 underline mr-2 absolute left-20 top-20">GitHub</a>
                      <a href={projectLinks[index].live} target="_blank" className="text-blue-500 underline absolute right-20 top-20">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
