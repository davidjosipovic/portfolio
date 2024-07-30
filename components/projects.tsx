'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from './projects.module.css';
import Link from "next/link";

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [flipped, setFlipped] = useState<boolean>(false);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleFlip = (index: number) => {
    if (index !== 2) {
      setFlippedIndex(prevIndex => (prevIndex === index ? null : index));
    } else {
      setFlipped(prevFlipped => !prevFlipped);
    }
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
    { github: "https://github.com/davidjosipovic/myGameList", live: "https://mygamelistdj.vercel.app" },
    { github: "https://github.com/davidjosipovic/german-syllable-splitter", live: "https://german-syllable-splitter.vercel.app" },
    { github: "https://github.com/NoProject", live: "#" }
  ];

  return (
    <section className="px-8 py-16 z-10 relative mb-[380px] sm:mb-[350px] md:mb-[350px] lg:mb-[400px] 2xl:mb-[500px] bg-light-blue">
      <div id="projects" className="container mx-auto lg:py-16">
        <h1  className="text-4xl text-dark-blue font-bold leading-normal pb-6 text-center">
          my projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:items-center">
          {['/mygamelist_banner.svg', '/germansyllablesplitter_banner.svg', '/inprogress_banner.svg'].map((src, index) => (
            <div 
              key={index} 
              ref={(el:any) => (containerRefs.current[index] = el)}
              className={`${styles.flipContainer} ${flippedIndex === index ? (index !== 2 ? styles.flipped : '') : ''} ${flipped && index === 2 ? styles.flipped360 : ''} max-w-xs md:max-w-sm lg:max-w-md`} 
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
                  <div onClick={(e) => e.stopPropagation()}>
                    <Image
                      src="/backofthecard.svg"
                      height={600}
                      width={600}
                      alt="Back of Card"
                      className="rounded-2xl"
                    />
                    <p className="text-white text-center text-md md:text-xl xl:text-2xl">{backTexts[index]}</p>
                    <div className="text-center">
                      <Link href={projectLinks[index].github} target="_blank" className="mr-2 absolute left-12 xl:left-16 bottom-4 flex md:bottom-8">
                        <Image 
                          src="/github-mark-white.svg" 
                          alt="GitHub" 
                          width={40} 
                          height={40} 
                          className="inline-block md:scale-125 xl:scale-150 opacity-50 hover:opacity-100 active:opacity-100"
                        />
                      </Link>
                      <Link href={projectLinks[index].live} target="_blank" className="absolute right-12 xl:right-16 bottom-4 md:bottom-8 ">
                        <Image 
                          src="/live.svg" 
                          alt="Live" 
                          width={40} 
                          height={40} 
                          className="inline-block md:scale-125 xl:scale-150 opacity-50 hover:opacity-100 active:opacity-100"
                        />
                      </Link>
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
